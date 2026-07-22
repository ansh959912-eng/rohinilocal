/* ═══════════════════════════════════════════════
   BALAJI STORE — Service Worker v2.0
   Handles: caching, offline fallback, push, bg sync

   FIX SW-01: AbortSignal.timeout() removed — not supported
              on Safari <16 (iOS 15 and older), older Android
              WebViews, some in-app browsers. It threw a
              TypeError on those devices, which silently forced
              every page load into "offline mode" even when the
              device was online. Replaced with a manual
              AbortController + setTimeout, which works on every
              browser that supports Service Workers at all.

   FIX SW-02: cache.addAll() was atomic — if ANY single asset in
              PRECACHE_ASSETS failed (slow network, CDN hiccup,
              CORS issue on an external font/script), caching of
              EVERYTHING was cancelled, including your own local
              pages. Now each asset is cached independently via
              Promise.allSettled, so one bad asset can't take down
              the rest. This is what was making installs/offline
              support unreliable on slower or flaky connections.

   FIX SW-03: networkFirst now falls back to last-known-good cache
              if the network returns a real error (4xx/5xx), not
              just on a hard network failure. Previously a 500 from
              the server would show the user an error page even
              though a perfectly good cached version existed.

   FIX SW-04: Network timeout reduced from 8s → 5s for a snappier
              feel on slow mobile connections before falling back
              to cache.
═══════════════════════════════════════════════ */

const CACHE_NAME      = 'balaji-store-v2';
const STATIC_CACHE    = 'balaji-static-v2';
const DYNAMIC_CACHE   = 'balaji-dynamic-v2';
const IMAGE_CACHE     = 'balaji-images-v2';

/* FIX SW-04: shorter timeout for faster perceived load on slow networks */
const NETWORK_TIMEOUT_MS = 5000;

/* ── Assets to pre-cache on install ── */
const PRECACHE_ASSETS = [
  '/',
  
  '/indexshop.html',       // ✅ public shop page
  '/indexoffer.html',      // ✅ public offers page
  '/policies.html',        // ✅ public policies page
  '/indexwebhub.html',
  '/manifest.json',
  /* NOTE: indexadmin.html & shopadmin.html are intentionally excluded */
  /* Google Fonts */
  'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Hind:wght@300;400;500;600&display=swap',
  /* Chart.js */
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  /* WhatsApp icon */
  'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
];

/* ── Max entries per cache ── */
const MAX_IMAGE_ENTRIES  = 120;
const MAX_DYNAMIC_ENTRIES = 60;
const MAX_IMAGE_AGE_SECS  = 7 * 24 * 60 * 60; // 7 days

/* ═══ INSTALL ═══ */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache =>
        /* FIX SW-02: cache each asset independently — one failure
           (e.g. a flaky CDN) no longer cancels the whole precache */
        Promise.allSettled(
          PRECACHE_ASSETS.map(url =>
            cache.add(url).catch(err => {
              console.warn('[SW] Pre-cache skipped (non-fatal):', url, err.message);
            })
          )
        )
      )
      .then(() => self.skipWaiting())
  );
});

/* ═══ ACTIVATE ═══ */
self.addEventListener('activate', event => {
  const VALID = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !VALID.includes(k)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ═══ FETCH STRATEGY ═══ */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  /* Skip non-GET, chrome-extension, Firebase realtime, analytics */
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;
  if (url.hostname.includes('firestore.googleapis.com')) return;
  if (url.hostname.includes('firebase.googleapis.com')) return;
  if (url.hostname.includes('google-analytics.com')) return;
  if (url.hostname.includes('firebaseio.com')) return;

  /* ── Block admin pages from ever being cached ── */
 if (
  url.pathname === '/indexadmin.html' ||
  url.pathname === '/shopadmin.html' ||
  url.pathname === '/indexledger.html' ||
  url.pathname === '/pwa-analytics.html'
) return;

  /* ── Images → Cache First (long TTL) ── */
  if (isImage(url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE, MAX_IMAGE_ENTRIES, MAX_IMAGE_AGE_SECS));
    return;
  }

  /* ── App Shell (HTML pages) → Network First, fallback to cache ── */
  if (url.pathname.endsWith('.html') || url.pathname === '/') {
    event.respondWith(networkFirst(request, STATIC_CACHE));
    return;
  }

  /* ── Static assets (JS, CSS, fonts) → Stale While Revalidate ── */
  if (isStaticAsset(url)) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  /* ── Everything else → Network First ── */
  event.respondWith(networkFirst(request, DYNAMIC_CACHE, MAX_DYNAMIC_ENTRIES));
});

/* ═══ STRATEGIES ═══ */

/* FIX SW-01: universal timeout helper — works on every browser that
   supports Service Workers, unlike AbortSignal.timeout() */
function fetchWithTimeout(request, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(request, { signal: controller.signal })
    .finally(() => clearTimeout(timer));
}

async function cacheFirst(request, cacheName, maxEntries, maxAgeSeconds) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) {
    /* Check age if maxAgeSeconds provided */
    if (maxAgeSeconds) {
      const dateHeader = cached.headers.get('date');
      if (dateHeader) {
        const age = (Date.now() - new Date(dateHeader).getTime()) / 1000;
        if (age > maxAgeSeconds) {
          /* Stale — refresh in background */
          fetchAndCache(request, cache, maxEntries).catch(() => {});
        }
      }
    }
    return cached;
  }
  return fetchAndCache(request, cache, maxEntries);
}

async function networkFirst(request, cacheName, maxEntries) {
  try {
    const response = await fetchWithTimeout(request, NETWORK_TIMEOUT_MS);
    if (response.ok || response.type === 'opaque') {
      const cache = await caches.open(cacheName);
      await cacheAndTrim(cache, request, response.clone(), maxEntries);
      return response;
    }
    /* FIX SW-03: real server error (4xx/5xx) — prefer last-good cache
       over showing the user a broken response, if one exists */
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached || response;
  } catch {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
    /* Offline fallback for HTML */
    if (request.headers.get('accept')?.includes('text/html')) {
      return offlineFallback();
    }
    return new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok || response.type === 'opaque') {
        cache.put(request, response.clone()).catch(() => {});
      }
      return response;
    })
    .catch(() => null);
  return cached || await fetchPromise || new Response('', { status: 503 });
}

async function fetchAndCache(request, cache, maxEntries) {
  const response = await fetch(request);
  if (response.ok || response.type === 'opaque') {
    await cacheAndTrim(cache, request, response.clone(), maxEntries);
  }
  return response;
}

async function cacheAndTrim(cache, request, response, maxEntries) {
  await cache.put(request, response);
  if (!maxEntries) return;
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    await Promise.all(keys.slice(0, keys.length - maxEntries).map(k => cache.delete(k)));
  }
}

/* ═══ HELPERS ═══ */

function isImage(url) {
  return /\.(png|jpg|jpeg|gif|webp|svg|ico|avif)(\?.*)?$/.test(url.pathname)
    || url.hostname === 'res.cloudinary.com'
    || url.hostname === 'upload.wikimedia.org';
}

function isStaticAsset(url) {
  return /\.(js|css|woff|woff2|ttf|otf)(\?.*)?$/.test(url.pathname)
    || url.hostname === 'fonts.googleapis.com'
    || url.hostname === 'fonts.gstatic.com'
    || url.hostname === 'cdnjs.cloudflare.com';
}

function offlineFallback() {
  return new Response(`<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Balaji Store – Offline</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Hind',sans-serif;background:#FFF3E8;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:20px}
  .card{background:#fff;border-radius:20px;padding:40px 32px;max-width:340px;width:100%;box-shadow:0 8px 32px rgba(255,107,0,.18);border:2px solid #FFD6B0}
  .icon{font-size:64px;margin-bottom:16px}
  h1{font-size:22px;font-weight:800;color:#FF6B00;margin-bottom:8px;font-family:'Baloo 2',cursive}
  p{font-size:14px;color:#757575;line-height:1.6;margin-bottom:20px}
  .store{font-size:13px;color:#FF6B00;font-weight:600;margin-bottom:20px}
  button{background:#FF6B00;color:#fff;border:none;border-radius:50px;padding:13px 28px;font-size:15px;font-weight:700;cursor:pointer;width:100%;font-family:'Baloo 2',cursive}
  button:hover{background:#CC5500}
  .wa-btn{background:#25D366;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:8px}
  .wa-btn:hover{background:#1da851}
</style>
</head>
<body>
<div class="card">
  <div class="icon">📶</div>
  <h1>You're Offline</h1>
  <p>Internet connection nahi hai. Kuch cached pages available hain.</p>
  <div class="store">🛒 BALAJI STORE – Rohini, Delhi</div>
  <button onclick="window.location.reload()">🔄 Retry</button>
  <a href="https://wa.me/919205002319?text=Hello%20Balaji%20Store" target="_blank">
    <button class="wa-btn">📱 WhatsApp Order Karo</button>
  </a>
</div>
</body>
</html>`, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

/* ═══ PUSH NOTIFICATIONS ═══ */
self.addEventListener('push', event => {
  if (!event.data) return;
  let data = {};
  try { data = event.data.json(); } catch { data = { title: 'Balaji Store', body: event.data.text() }; }
  event.waitUntil(
    self.registration.showNotification(data.title || '🛒 Balaji Store', {
      body: data.body || 'New update from Balaji Store!',
      icon: 'https://res.cloudinary.com/db2tt1cy6/image/upload/v1780421930/image/qr.png',
      badge: 'https://res.cloudinary.com/db2tt1cy6/image/upload/v1780421930/image/qr.png',
      tag: 'balaji-notif',
      renotify: true,
      vibrate: [200, 100, 200],
      data: { url: data.url || '/index.html' },
      actions: [
        { action: 'open', title: '🛒 Shop Now' },
        { action: 'dismiss', title: '✕ Dismiss' }
      ]
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  const url = event.notification.data?.url || '/index.html';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windowClients => {
      const existing = windowClients.find(c => c.url.includes(url) && 'focus' in c);
      if (existing) return existing.focus();
      return clients.openWindow(url);
    })
  );
});

/* ═══ BACKGROUND SYNC ═══ */
self.addEventListener('sync', event => {
  if (event.tag === 'sync-orders') {
    event.waitUntil(syncPendingOrders());
  }
});

async function syncPendingOrders() {
  try {
    const db = await openIDB();
    const pending = await getAllFromStore(db, 'pending_orders');
    for (const order of pending) {
      console.log('[SW] Syncing pending order:', order.id);
      /* Orders are placed via WhatsApp — just clear any stale entries */
      await deleteFromStore(db, 'pending_orders', order.id);
    }
  } catch (err) {
    console.warn('[SW] Sync failed:', err.message);
  }
}

/* ── Minimal IndexedDB helpers ── */
function openIDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('balaji_sw_db', 1);
    req.onupgradeneeded = e => e.target.result.createObjectStore('pending_orders', { keyPath: 'id' });
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => reject(req.error);
  });
}
function getAllFromStore(db, store) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => res(req.result || []);
    req.onerror = () => rej(req.error);
  });
}
function deleteFromStore(db, store, id) {
  return new Promise((res, rej) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => res();
    req.onerror = () => rej(req.error);
  });
}

console.log('[SW] Balaji Store Service Worker v2.0 loaded ✅');