/* ============================================================
   little & lovely — layout.js
   Injects header / footer / nav / modals / cart drawer / toasts
   into every page via #app-header, #app-footer, #app-overlays
   ============================================================ */

/* admin.html lives at the site root next to index.html, not inside /pages/
   like the other linked pages, so it needs its own tiny path helper rather
   than LWL.pagePath() (which assumes a /pages/ prefix). */
function rootPath(file) {
  return window.location.pathname.includes("/pages/") ? "../" + file : file;
}

function headerHtml() {
  const shop = (label, cat) => `<button type="button" class="nav-link-btn" data-action="go-shop" data-cat="${cat}" style="background:none;border:none;font-family:inherit;color:inherit;font-size:14.5px;font-weight:500;opacity:.85;cursor:pointer;padding:0;">${label}</button>`;
  return `
  <div class="announce-bar">✨ Cute Finds • Custom Gifts • Birthday Return Gifts</div>
  <header class="site-header">
    <div class="header-row">
      <div style="display:flex;align-items:center;gap:28px;">
        <a href="${LWL.homePath()}" class="logo">little<span>&amp;</span>lovely</a>
        <nav class="desktop-nav">
          ${shop("Shop", "")}
          ${shop("Stationery", "Stationery")}
          ${shop("Keychains", "Keychains")}
          ${shop("Hair Accessories", "Hair Accessories")}
          ${shop("Kids", "Kids")}
          ${shop("Fans &amp; Lamps", "Fans &amp; Lamps")}
          ${shop("Gifts", "Gifts")}
                   <a href="${LWL.homePath()}#return-gifts">Return Gifts</a>
          <a href="${LWL.homePath()}#hamper-builder">Build Your Gift</a>
          <button type="button" class="nav-link-btn" id="header-my-kits-btn" style="background:none;border:none;font-family:inherit;color:inherit;font-size:14.5px;font-weight:500;opacity:.85;cursor:pointer;padding:0;">My Kits</button>
        </nav>
      </div>
      <div class="header-actions">
        <button class="icon-btn desktop-nav" id="header-search-btn" aria-label="Search">${ICONS.search}</button>
        <a class="icon-btn desktop-nav" href="${LWL.pagePath("wishlist.html")}" aria-label="Wishlist" style="position:relative;">${ICONS.heart(false)}<span class="count wish-count-badge" style="display:none;"></span></a>
        
        <button class="icon-btn" id="header-cart-btn" aria-label="Cart" style="position:relative;">${ICONS.bag}<span class="count cart-count-badge" style="display:none;"></span></button>
        <button class="btn btn-primary small desktop-cta" id="header-build-gift-btn">Build a Gift 🎁</button>
        <button class="icon-btn hamburger" id="mobile-menu-btn" aria-label="Open menu">${ICONS.menu}</button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      <button type="button" class="mm-link" data-action="go-shop" data-cat="">Shop</button>
      <button type="button" class="mm-link" data-action="go-shop" data-cat="Stationery">Stationery</button>
      <button type="button" class="mm-link" data-action="go-shop" data-cat="Keychains">Keychains</button>
      <button type="button" class="mm-link" data-action="go-shop" data-cat="Hair Accessories">Hair Accessories</button>
      <button type="button" class="mm-link" data-action="go-shop" data-cat="Kids">Kids</button>
      <button type="button" class="mm-link" data-action="go-shop" data-cat="Fans &amp; Lamps">Fans &amp; Lamps</button>
      <button type="button" class="mm-link" data-action="go-shop" data-cat="Gifts">Gifts</button>
          <a href="${LWL.homePath()}#return-gifts">Return Gifts</a>
      <a href="${LWL.homePath()}#hamper-builder">Build Your Gift</a>
      <button type="button" class="mm-link" id="mobile-my-kits-btn">My Kits</button>
      <a href="${LWL.pagePath("track-order.html")}">Track Order</a>
      <a href="${LWL.pagePath("wishlist.html")}">Wishlist</a>
     
      <button class="btn btn-primary small" style="margin-top:10px;" id="mobile-build-gift-btn">Build a Gift 🎁</button>
    </div>
  </header>`;
}

function bottomNavHtml() {
  return `
  <div class="bottom-nav mobile-only">
    <button id="bn-home"><span class="bn-icon">${ICONS.home}</span><span class="bn-label">Home</span></button>
    <button id="bn-shop"><span class="bn-icon">${ICONS.search}</span><span class="bn-label">Shop</span></button>
    <button id="bn-create" class="highlight"><span class="bn-icon">${ICONS.sparkles}</span><span class="bn-label">Create</span></button>
    <button id="bn-wishlist"><span class="bn-icon">${ICONS.heart(false)}</span><span class="bn-label">Wishlist</span></button>
    <button id="bn-cart"><span class="bn-icon">${ICONS.bag}</span><span class="bn-label">Cart</span></button>
  </div>`;
}

function cartDrawerHtml() {
  return `
  <div class="cart-overlay" id="cart-overlay"></div>
  <div class="cart-drawer" id="cart-drawer" role="dialog" aria-label="Shopping bag">
    <div class="cart-head">
      <h3 style="font-family:'Fraunces',serif;font-size:1.25rem;">Your Bag</h3>
      <button class="modal-close" id="cart-close-btn" aria-label="Close bag">${ICONS.x}</button>
    </div>
    <div class="ship-progress">
      <div class="msg" id="ship-msg"></div>
      <div class="ship-bar"><div id="ship-bar-fill" style="width:0%"></div></div>
    </div>
    <div class="cart-items" id="cart-items"></div>
    <div class="cart-foot">
      <div class="summary-line bold" style="margin-bottom:14px;"><span>Subtotal</span><span id="cart-subtotal">₹0</span></div>
      <button class="btn btn-primary block" id="cart-checkout-btn">Checkout</button>
    </div>
  </div>`;
}

function modalsHtml() {
  return `
  <!-- SEARCH OVERLAY -->
  <div class="modal-overlay" id="search-overlay">
    <div class="modal-box wide">
      <div class="modal-head"><h3>Search</h3><button class="modal-close" onclick="LWL.closeModal('search-overlay')">${ICONS.x}</button></div>
      <div class="modal-body">
        <div class="search-input-wrap">
          ${ICONS.search}
          <input type="text" id="search-input" placeholder="Search products, categories, tags..." aria-label="Search products">
        </div>
        <div id="search-results-area"></div>
      </div>
    </div>
  </div>

  <!-- QUICK VIEW -->
  <div class="modal-overlay" id="quickview-overlay">
    <div class="modal-box wide">
      <div class="modal-head"><h3>Quick View</h3><button class="modal-close" onclick="LWL.closeModal('quickview-overlay')">${ICONS.x}</button></div>
      <div class="modal-body" id="quickview-body"></div>
    </div>
  </div>

  <!-- ACCOUNT -->
  <div class="modal-overlay" id="account-overlay">
    <div class="modal-box">
      <div class="modal-head"><h3 id="account-modal-title">Your Account</h3><button class="modal-close" onclick="LWL.closeModal('account-overlay')">${ICONS.x}</button></div>
      <div class="modal-body" id="account-modal-body"></div>
    </div>
  </div>

  <!-- HAMPER CONFIRM -->
  <div class="modal-overlay" id="hamper-confirm-overlay">
    <div class="modal-box">
      <div class="modal-head"><h3>Hamper Created 🎁</h3><button class="modal-close" onclick="LWL.closeModal('hamper-confirm-overlay')">${ICONS.x}</button></div>
      <div class="modal-body">
        <div id="hamper-confirm-body"></div>
        <button class="btn btn-primary block" id="hamper-confirm-add-btn" style="margin-top:18px;">Add Custom Hamper to Cart</button>
      </div>
    </div>
  </div>

  <!-- BULK QUOTE -->
  <div class="modal-overlay" id="bulk-overlay">
    <div class="modal-box">
      <div class="modal-head"><h3>Get Bulk Quote</h3><button class="modal-close" onclick="LWL.closeModal('bulk-overlay')">${ICONS.x}</button></div>
      <div class="modal-body">
        <form id="bulk-form">
          <div class="form-grid">
            <label>Name<input type="text" id="bulk-name" required></label>
            <label>Phone<input type="tel" id="bulk-phone" required></label>
            <label class="full">Email<input type="email" id="bulk-email"></label>
            <label>Order type
              <select id="bulk-type">
                <option>Birthday</option><option>School</option><option>Event</option><option>Corporate</option><option>Return Gifts</option>
              </select>
            </label>
            <label>Quantity<input type="number" id="bulk-qty" min="1" required></label>
            <label>Budget per person<input type="text" id="bulk-budget" placeholder="e.g. ₹150"></label>
            <label>Theme<input type="text" id="bulk-theme"></label>
            <label>Delivery date<input type="date" id="bulk-date"></label>
            <label class="full">Special requirements<textarea id="bulk-notes" rows="3"></textarea></label>
          </div>
          <button type="submit" class="btn btn-primary block" style="margin-top:16px;">${ICONS.message} Send Inquiry on WhatsApp</button>
        </form>
      </div>
    </div>
  </div>

  <!-- CUSTOM GIFT -->
  <div class="modal-overlay" id="customgift-overlay">
    <div class="modal-box">
      <div class="modal-head"><h3>Customise a Gift</h3><button class="modal-close" onclick="LWL.closeModal('customgift-overlay')">${ICONS.x}</button></div>
      <div class="modal-body">
        <form id="customgift-form">
          <div class="form-grid">
            <label>Occasion
              <select id="cg-occasion">${OCCASIONS.map((o) => `<option>${o}</option>`).join("")}</select>
            </label>
            <label>Budget<input type="text" id="cg-budget" placeholder="e.g. ₹500"></label>
            <label>Age group<input type="text" id="cg-age" placeholder="e.g. 6-9 years"></label>
            <label>Theme<input type="text" id="cg-theme"></label>
            <label>Your name<input type="text" id="cg-name"></label>
            <label class="full">Products in mind<input type="text" id="cg-products" placeholder="e.g. keychains, stickers"></label>
            <label class="full">Message<textarea id="cg-message" rows="3" placeholder="Tell us what you're imagining..."></textarea></label>
          </div>
          <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
            <button type="button" class="btn btn-primary" id="cg-continue-btn">Continue to Hamper Builder</button>
            <button type="button" class="btn btn-soft" id="cg-whatsapp-btn">${ICONS.message} Send on WhatsApp</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- ORDER SUCCESS -->
  <div class="modal-overlay" id="order-success-overlay">
    <div class="modal-box">
      <div class="modal-head"><h3>Order Placed Successfully 🎉</h3><button class="modal-close" onclick="LWL.closeModal('order-success-overlay')">${ICONS.x}</button></div>
      <div class="modal-body" id="order-success-body"></div>
    </div>
  </div>

 <style>
  /* Premium WhatsApp float button — matches site's rose/lavender palette,
     WhatsApp green kept only in icon + small "online" dot for recognisability. */
  #wa-float-btn{
    position:fixed; right:20px; bottom:20px; z-index:60;
    width:60px; height:60px; border-radius:50%;
    display:flex; align-items:center; justify-content:center;
    background:#fff;
    background-image:linear-gradient(#fff,#fff), linear-gradient(135deg,var(--rose-deep),var(--lavender));
    background-origin:border-box; background-clip:padding-box, border-box;
    border:2px solid transparent;
    box-shadow:0 10px 26px rgba(232,134,159,.35), 0 3px 10px rgba(0,0,0,.08);
    cursor:pointer; overflow:visible;
    animation:wa-pop .5s cubic-bezier(.34,1.56,.64,1) .3s backwards;
    transition:transform .25s ease, box-shadow .25s ease, width .3s ease, border-radius .3s ease, padding .3s ease;
  }
  #wa-float-btn::before{
    content:""; position:absolute; inset:0; border-radius:50%;
    background:rgba(232,134,159,.35);
    animation:wa-pulse 2.4s ease-out infinite;
    z-index:-1;
  }
  #wa-float-btn:hover{
    transform:translateY(-3px) scale(1.05);
    box-shadow:0 14px 32px rgba(232,134,159,.45), 0 4px 12px rgba(0,0,0,.12);
  }
  #wa-float-btn .wa-icon-wrap{
    display:flex; align-items:center; justify-content:center;
    flex-shrink:0; width:60px; height:60px; position:relative;
  }
  #wa-float-btn .wa-icon-wrap svg{ width:28px; height:28px; }
  #wa-float-btn .wa-online-dot{
    position:absolute; bottom:1px; right:1px; width:14px; height:14px;
    background:#25D366; border-radius:50%; border:2.5px solid #fff;
  }
  #wa-float-btn .wa-label{
    max-width:0; overflow:hidden; white-space:nowrap;
    color:var(--ink); font-family:'Poppins',sans-serif; font-weight:600; font-size:13.5px;
    transition:max-width .35s ease, padding-left .35s ease;
  }
  #wa-float-btn:hover .wa-label{ max-width:150px; padding-left:6px; }
  #wa-float-btn:hover{ border-radius:34px; padding:0 18px 0 2px; width:auto; }
  @keyframes wa-pulse{
    0%{ transform:scale(1); opacity:.6; }
    70%{ transform:scale(1.6); opacity:0; }
    100%{ transform:scale(1.6); opacity:0; }
  }
  @keyframes wa-pop{
    0%{ transform:scale(0) rotate(-30deg); opacity:0; }
    100%{ transform:scale(1) rotate(0); opacity:1; }
  }
  @media(max-width:600px){
    #wa-float-btn{ right:16px; bottom:86px; }
    #wa-float-btn:hover .wa-label{ max-width:0; padding-left:0; }
    #wa-float-btn:hover{ border-radius:50%; padding:0; width:60px; }
  }
</style>
<div class="wa-float mobile-only-desktop-too" id="wa-float-btn" title="Chat with us on WhatsApp" aria-label="Chat with us on WhatsApp">
  <button style="all:unset;display:flex;align-items:center;cursor:pointer;" tabindex="-1">
    <span class="wa-icon-wrap">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#25D366"><path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.694 4.611 1.888 6.487L4 29l7.71-1.86A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm5.94 12.71c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.21-.38.24-.7.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.87-1.76-2.19-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.26-.63-.53-.55-.73-.56h-.62c-.21 0-.56.08-.85.4-.29.32-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.76.33 1.35.53 1.81.68.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37z"/></svg>
      <span class="wa-online-dot"></span>
    </span>
    <span class="wa-label">Chat with us</span>
  </button>
</div>
  `;
}

function footerHtml() {
  const shopCol = ["Stationery", "Keychains", "Hair Accessories", "Kids", "Fans & Lamps", "Gifts"];
  return `
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="logo">little&amp;lovely</div>
        <p>Made For Little Moments. Imported stationery, accessories and custom gifting, delivered across India.</p>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        ${shopCol.map((c) => `<button type="button" data-action="go-shop" data-cat="${c}">${c}</button>`).join("")}
      </div>
      <div class="footer-col">
        <h4>Customise</h4>
        <a href="${LWL.homePath()}#hamper-builder">Build Your Hamper</a>
        <a href="${LWL.homePath()}#return-gifts">Return Gifts</a>
        <a href="${LWL.homePath()}#stationery-kit-builder">Stationery Kit</a>
        <button type="button" id="footer-bulk-btn">Bulk Orders</button>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <a href="${LWL.pagePath("contact.html")}">Contact</a>
        <a href="${LWL.pagePath("faq.html")}#shipping">Shipping</a>
        <a href="${LWL.pagePath("faq.html")}#returns">Returns</a>
        <a href="${LWL.pagePath("faq.html")}">FAQ</a>
        <a href="${LWL.pagePath("track-order.html")}">Track Order</a>
        <a href="${rootPath("admin.html")}">Admin Login</a>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <a href="${LWL.pagePath("contact.html")}">Our Story</a>
        <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">Instagram</a>
        <button type="button" id="footer-whatsapp-btn">WhatsApp</button>
      </div>
    </div>
    <div class="footer-bottom">© <span id="footer-year"></span> little&amp;lovely — Made For Little Moments.</div>
  </footer>`;
}

/* ---------- search logic ---------- */
const SEARCH_HISTORY_KEY = "littlelovely_search_history";
const POPULAR_SEARCHES = ["Hair Clips", "Return Gifts", "Keychain", "LED Lamp", "Stationery Kit", "Mini Fan"];

function renderSearchArea(query) {
  const area = document.getElementById("search-results-area");
  const history = LWL.store.get(SEARCH_HISTORY_KEY, []);
  if (!query) {
    area.innerHTML = `
      ${history.length ? `<div class="search-label">Recent Searches</div><div>${history.map((h) => `<button type="button" class="search-tag" data-q="${LWL.esc(h)}">${LWL.esc(h)}</button>`).join("")}</div>` : ""}
      <div class="search-label">Popular Searches</div>
      <div>${POPULAR_SEARCHES.map((h) => `<button type="button" class="search-tag" data-q="${LWL.esc(h)}">${LWL.esc(h)}</button>`).join("")}</div>
    `;
    area.querySelectorAll(".search-tag").forEach((t) => t.addEventListener("click", () => {
      document.getElementById("search-input").value = t.dataset.q;
      runSearch(t.dataset.q);
    }));
    return;
  }
  const results = LWLProducts.filter({ query });
  area.innerHTML = `
    <div class="search-label">${results.length} result${results.length !== 1 ? "s" : ""}</div>
    ${results.length === 0 ? `<p style="color:var(--ink-soft);font-size:14px;padding:20px 0;">No results for "${LWL.esc(query)}". Try a different keyword.</p>` :
      results.map((p) => `
  <div class="search-result-row" data-action="open-product" data-id="${p.id}">
    ${LWL.productArt(p.icon, p.tone, "", p.images ? p.images[0] : p.image) }  
    <div class="info"><div class="name">${LWL.esc(p.name)}</div><div class="cat">${p.cat}</div></div>
    <div class="price">${LWL.money(p.price)}</div>
  </div>`).join("")}
  `;
}
function runSearch(q) {
  renderSearchArea(q);
  if (q && q.trim().length > 1) {
    let history = LWL.store.get(SEARCH_HISTORY_KEY, []);
    history = [q, ...history.filter((h) => h.toLowerCase() !== q.toLowerCase())].slice(0, 6);
    LWL.store.set(SEARCH_HISTORY_KEY, history);
  }
}



/* ---------- init layout ---------- */
function initLayout() {
  const headerMount = document.getElementById("app-header");
  const footerMount = document.getElementById("app-footer");
  const overlayMount = document.getElementById("app-overlays");
  if (headerMount) headerMount.innerHTML = headerHtml();
  if (footerMount) footerMount.innerHTML = footerHtml() + bottomNavHtml();
  if (overlayMount) overlayMount.innerHTML = cartDrawerHtml() + modalsHtml();

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile menu toggle
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (menuBtn) menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtn.innerHTML = menu.classList.contains("open") ? ICONS.x : ICONS.menu;
  });

  // cart
  document.getElementById("header-cart-btn").addEventListener("click", () => LWLCart.open());
  document.getElementById("cart-close-btn").addEventListener("click", () => LWLCart.close());
  document.getElementById("cart-overlay").addEventListener("click", () => LWLCart.close());
  document.getElementById("cart-checkout-btn").addEventListener("click", () => {
    if (LWLCart.items.length === 0) { LWL.toast("Your bag is empty"); return; }
    window.location.href = LWL.pagePath("checkout.html");
  });
  LWLCart.renderDrawer();
  LWLCart.renderBadges();

  // search
  const openSearch = () => { LWL.openModal("search-overlay"); renderSearchArea(""); setTimeout(() => document.getElementById("search-input").focus(), 60); };
  document.getElementById("header-search-btn").addEventListener("click", openSearch);
  document.getElementById("bn-shop").addEventListener("click", () => openSearch());
  document.getElementById("search-input").addEventListener("input", (e) => runSearch(e.target.value));

  
   // build a gift buttons -> hamper builder
  const goHamper = () => { window.location.href = LWL.homePath() + "#hamper-builder"; };
  document.getElementById("header-build-gift-btn").addEventListener("click", goHamper);
  document.getElementById("mobile-build-gift-btn").addEventListener("click", goHamper);

   // my kits -> open saved kits modal (navigates home first if needed)
  const openMyKits = () => {
    if (typeof window.LWLOpenSavedKits === "function") {
      window.LWLOpenSavedKits();
    } else {
      window.location.href = LWL.homePath() + "#stationery-kit-builder?openKits=1";
    }
  };
  const myKitsBtn = document.getElementById("header-my-kits-btn");
  if (myKitsBtn) myKitsBtn.addEventListener("click", openMyKits);
  const mobileMyKitsBtn = document.getElementById("mobile-my-kits-btn");
  if (mobileMyKitsBtn) mobileMyKitsBtn.addEventListener("click", () => { openMyKits(); menu.classList.remove("open"); });
  // bottom nav
  document.getElementById("bn-home").addEventListener("click", () => { window.location.href = LWL.homePath(); });
  document.getElementById("bn-wishlist").addEventListener("click", () => { window.location.href = LWL.pagePath("wishlist.html"); });
  document.getElementById("bn-cart").addEventListener("click", () => LWLCart.open());
  document.getElementById("bn-create").addEventListener("click", () => openCreateMenu());

  // whatsapp float
  document.getElementById("wa-float-btn").addEventListener("click", () => LWL.openWhatsapp("Hi! I have a question about your cute finds & custom gifts 🎁"));

  // footer actions
  const bulkBtn = document.getElementById("footer-bulk-btn");
  if (bulkBtn) bulkBtn.addEventListener("click", () => LWL.openModal("bulk-overlay"));
  const waBtn = document.getElementById("footer-whatsapp-btn");
  if (waBtn) waBtn.addEventListener("click", () => LWL.openWhatsapp("Hi! I'd like to know more about little&lovely."));

  bindBulkForm();
  bindCustomGiftForm();
}

function openCreateMenu() {
  document.getElementById("account-modal-title").textContent = "Start Creating 🎁";
  document.getElementById("account-modal-body").innerHTML = `
    <p style="color:var(--ink-soft);font-size:14px;margin-bottom:16px;">What would you like to build?</p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <a class="btn btn-primary block" href="${LWL.homePath()}#hamper-builder" data-close-scroll="hamper-builder">Build a Hamper</a>
      <a class="btn btn-soft block" href="${LWL.homePath()}#return-gifts" data-close-scroll="return-gifts">Birthday Return Gifts</a>
      <a class="btn btn-soft block" href="${LWL.homePath()}#stationery-kit-builder" data-close-scroll="stationery-kit-builder">Custom Stationery Kit</a>
      <button type="button" class="btn btn-soft block" id="create-menu-my-kits-btn">My Kits</button>
    </div>`;
  LWL.openModal("account-overlay");

  document.querySelectorAll("#account-modal-body a[data-close-scroll]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.dataset.closeScroll;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault(); // we're already on this page, so scroll instead of reloading
        LWL.closeModal("account-overlay");
        setTimeout(() => targetEl.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        LWL.closeModal("account-overlay"); // different page — let the link navigate normally
      }
    });
  });

  const myKitsBtn = document.getElementById("create-menu-my-kits-btn");
  if (myKitsBtn) myKitsBtn.addEventListener("click", () => {
    LWL.closeModal("account-overlay");
    if (typeof window.LWLOpenSavedKits === "function") {
      window.LWLOpenSavedKits();
    } else {
      window.location.href = LWL.homePath() + "#stationery-kit-builder?openKits=1";
    }
  });
}
window.openCreateMenu = openCreateMenu;

function bindBulkForm() {
  const form = document.getElementById("bulk-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("bulk-name").value;
    const phone = document.getElementById("bulk-phone").value;
    if (!name || !phone) { LWL.toast("Please fill in your name and phone"); return; }
    const msg = `Hi! I'd like a bulk order quote.\nName: ${name}\nPhone: ${phone}\nEmail: ${document.getElementById("bulk-email").value || "-"}\nOrder type: ${document.getElementById("bulk-type").value}\nQuantity: ${document.getElementById("bulk-qty").value}\nBudget per person: ${document.getElementById("bulk-budget").value || "-"}\nTheme: ${document.getElementById("bulk-theme").value || "-"}\nDelivery date: ${document.getElementById("bulk-date").value || "-"}\nSpecial requirements: ${document.getElementById("bulk-notes").value || "-"}`;
    LWL.openWhatsapp(msg);
    LWL.closeModal("bulk-overlay");
    LWL.toast("Opening WhatsApp with your inquiry");
  });
}

function bindCustomGiftForm() {
  document.getElementById("cg-continue-btn").addEventListener("click", () => {
    LWL.closeModal("customgift-overlay");
    window.location.href = LWL.homePath() + "#hamper-builder";
  });
  document.getElementById("cg-whatsapp-btn").addEventListener("click", () => {
    const msg = `Hi! I'd like to customise a gift.\nOccasion: ${document.getElementById("cg-occasion").value}\nBudget: ${document.getElementById("cg-budget").value || "-"}\nAge group: ${document.getElementById("cg-age").value || "-"}\nTheme: ${document.getElementById("cg-theme").value || "-"}\nName: ${document.getElementById("cg-name").value || "-"}\nProducts in mind: ${document.getElementById("cg-products").value || "-"}\nMessage: ${document.getElementById("cg-message").value || "-"}`;
    LWL.openWhatsapp(msg);
    LWL.closeModal("customgift-overlay");
  });
}

document.addEventListener("DOMContentLoaded", initLayout);