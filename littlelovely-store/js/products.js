/* ============================================================
   little & lovely — products.js
   Product card rendering, filtering, rails, quick view, recents
   ============================================================ */
const RECENT_VIEWED_KEY = "littlelovely_recent";

const LWLProducts = {
  all() { return PRODUCTS; },

  byId(id) { return PRODUCTS.find((p) => p.id === id); },

  filter({ cat, tag, maxPrice, minPrice, query, sort } = {}) {
    let list = PRODUCTS.slice();
    if (cat) list = list.filter((p) => p.cat === cat);
    if (tag) list = list.filter((p) => p.tags.includes(tag));
    if (maxPrice) list = list.filter((p) => p.price <= Number(maxPrice));
    if (minPrice) list = list.filter((p) => p.price >= Number(minPrice));
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.cat.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  },

  discountPct(p) { return Math.round((1 - p.price / p.mrp) * 100); },

  cardHtml(p) {
    const wished = LWLWishlist.has(p.id);
    return `
    <div class="product-card" data-product-id="${p.id}">
      <div class="art-wrap" data-action="open-product" data-id="${p.id}">
        ${LWL.productArt(p.icon, p.tone, "", p.images ? p.images[0] : p.image)}
        <span class="badge">${p.badge}</span>
        <button class="wish-btn ${wished ? "active" : ""}" data-wish-id="${p.id}" data-action="toggle-wish" aria-label="Toggle wishlist for ${LWL.esc(p.name)}">${ICONS.heart(wished)}</button>
        <button class="quickview-btn" data-action="quick-view" data-id="${p.id}">Quick View</button>
      </div>
      <div class="body">
        <div class="cat">${p.cat}</div>
        <div class="name" data-action="open-product" data-id="${p.id}">${LWL.esc(p.name)}</div>
        ${LWL.starsHtml(p.rating, p.reviews)}
        <div class="price-row">
          <span class="now">${LWL.money(p.price)}</span>
          <span class="mrp">${LWL.money(p.mrp)}</span>
          <span class="off">${this.discountPct(p)}% off</span>
        </div>
        <button class="btn btn-soft small block" data-action="quick-add" data-id="${p.id}" style="margin-top:8px;">
          ${ICONS.plus} Quick Add
        </button>
      </div>
    </div>`;
  },

  renderGrid(container, products) {
    if (!container) return;
    if (products.length === 0) {
      container.innerHTML = `<div class="empty-state">${ICONS.search}<p style="margin-top:12px;font-size:15px;">No products found. Try a different search or filter.</p></div>`;
      return;
    }
    container.innerHTML = products.map((p) => this.cardHtml(p)).join("");
  },

  renderRail(sectionEl, products) {
    const railEl = sectionEl.querySelector(".rail");
    railEl.innerHTML = products.map((p) => this.cardHtml(p)).join("");
    const prev = sectionEl.querySelector('[data-rail="prev"]');
    const next = sectionEl.querySelector('[data-rail="next"]');
    const scrollAmt = () => (railEl.firstElementChild ? railEl.firstElementChild.offsetWidth + 18 : 240);
    if (prev) prev.onclick = () => railEl.scrollBy({ left: -scrollAmt(), behavior: "smooth" });
    if (next) next.onclick = () => railEl.scrollBy({ left: scrollAmt(), behavior: "smooth" });
    this.enableDragScroll(railEl);
  },

  enableDragScroll(el) {
    let isDown = false, startX, scrollLeft;
    el.addEventListener("mousedown", (e) => {
      isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor = "grabbing";
    });
    ["mouseleave", "mouseup"].forEach((evt) => el.addEventListener(evt, () => { isDown = false; el.style.cursor = "default"; }));
    el.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.4;
    });
  },

  addRecentlyViewed(id) {
    let list = LWL.store.get(RECENT_VIEWED_KEY, []);
    list = list.filter((x) => x !== id);
    list.unshift(id);
    list = list.slice(0, 10);
    LWL.store.set(RECENT_VIEWED_KEY, list);
  },
  recentlyViewed(excludeId) {
    const ids = LWL.store.get(RECENT_VIEWED_KEY, []);
    return ids.filter((id) => id !== excludeId).map((id) => this.byId(id)).filter(Boolean);
  },

  related(product) {
    return PRODUCTS.filter((p) => p.id !== product.id && p.cat === product.cat).slice(0, 6);
  },
  pairsWith(product) {
    return PRODUCTS.filter((p) => p.id !== product.id && p.cat !== product.cat).slice(0, 6);
  },

  quickViewHtml(p) {
    return `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;" class="qv-grid">
        <div>${LWL.productArt(p.icon, p.tone, "", p.images ? p.images[0] : p.image)}</div>
        <div>
          <div style="color:var(--ink-soft);font-size:12px;">${p.cat}</div>
          <h3 style="font-size:1.3rem;margin:6px 0 8px;">${LWL.esc(p.name)}</h3>
          ${LWL.starsHtml(p.rating, p.reviews)}
          <div class="price-row" style="margin:12px 0;">
            <span class="now">${LWL.money(p.price)}</span>
            <span class="mrp">${LWL.money(p.mrp)}</span>
            <span class="off">${this.discountPct(p)}% off</span>
          </div>
          <p style="color:var(--ink-soft);font-size:13.5px;line-height:1.6;">${LWL.esc(p.description)}</p>
          <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
            <button class="btn btn-primary" data-action="quick-add" data-id="${p.id}">${ICONS.plus} Add to Bag</button>
            <button class="btn btn-outline" data-action="open-product" data-id="${p.id}">View Full Details</button>
          </div>
        </div>
      </div>
      <style>@media(max-width:560px){.qv-grid{grid-template-columns:1fr !important;}}</style>
    `;
  },
};
window.LWLProducts = LWLProducts;

/* ---------- delegated actions across the whole site ---------- */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;

  if (action === "quick-add") {
    const p = LWLProducts.byId(id);
    if (p) LWLCart.add(p);
  }
  if (action === "toggle-wish") {
    const wishId = btn.dataset.wishId;
    const p = LWLProducts.byId(wishId);
    LWLWishlist.toggle(wishId, p ? p.name : "");
}
  if (action === "open-product") {
    LWLProducts.addRecentlyViewed(id);
    window.location.href = LWL.pagePath("product.html") + "?id=" + encodeURIComponent(id);
  }
  if (action === "quick-view") {
    const p = LWLProducts.byId(id);
    if (!p) return;
    const body = document.getElementById("quickview-body");
    if (body) { body.innerHTML = LWLProducts.quickViewHtml(p); LWL.openModal("quickview-overlay"); }
  }
  if (action === "go-shop") {
    const params = {};
    if (btn.dataset.cat) params.cat = btn.dataset.cat;
    if (btn.dataset.tag) params.tag = btn.dataset.tag;
    if (btn.dataset.max) params.max = btn.dataset.max;
    window.location.href = LWL.pagePath("shop.html") + LWL.setQuery(params);
  }
});
