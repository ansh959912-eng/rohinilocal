/* ============================================================
   little & lovely — cart.js
   Cart state, persistence, drawer rendering
   ============================================================ */
const CART_KEY = "littlelovely_cart";
const FREE_SHIP_THRESHOLD = 499;

const LWLCart = {
  items: LWL.store.get(CART_KEY, []),

  save() { LWL.store.set(CART_KEY, this.items); this.renderDrawer(); this.renderBadges(); },

  add(product, qty = 1) {
    const existing = this.items.find((i) => i.id === product.id && !product.forceNew);
    if (existing) {
      existing.qty += qty;
    } else {
    this.items.push({
  id: product.id, name: product.name, price: product.price,
  icon: product.icon || "🎁", tone: product.tone || "rose", qty,
  image: (product.images && product.images[0]) || product.image || null,
  type: product.type || "product", meta: product.meta || null,
});
    }
    this.save();
    LWL.toast(`Added ${product.name} to bag`);
  },

  updateQty(id, qty) {
    if (qty <= 0) { this.remove(id); return; }
    const item = this.items.find((i) => i.id === id);
    if (item) { item.qty = qty; this.save(); }
  },

  remove(id) {
    const item = this.items.find((i) => i.id === id);
    this.items = this.items.filter((i) => i.id !== id);
    this.save();
    if (item) LWL.toast(`Removed ${item.name} from bag`);
  },

  clear() { this.items = []; this.save(); },

  count() { return this.items.reduce((a, i) => a + i.qty, 0); },
  subtotal() { return this.items.reduce((a, i) => a + i.price * i.qty, 0); },

  open() {
    const overlay = document.getElementById("cart-overlay");
    const drawer = document.getElementById("cart-drawer");
    if (overlay) overlay.classList.add("open");
    if (drawer) drawer.classList.add("open");
    document.body.classList.add("no-scroll");
    this.renderDrawer();
  },
  close() {
    const overlay = document.getElementById("cart-overlay");
    const drawer = document.getElementById("cart-drawer");
    if (overlay) overlay.classList.remove("open");
    if (drawer) drawer.classList.remove("open");
    if (!LWL._openModals.length) document.body.classList.remove("no-scroll");
  },

  renderBadges() {
    document.querySelectorAll(".cart-count-badge").forEach((el) => {
      const c = this.count();
      el.textContent = c;
      el.style.display = c > 0 ? "flex" : "none";
    });
  },

  renderDrawer() {
    const wrap = document.getElementById("cart-items");
    const footTotal = document.getElementById("cart-subtotal");
    const shipMsg = document.getElementById("ship-msg");
    const shipBar = document.getElementById("ship-bar-fill");
    if (!wrap) return;

    const subtotal = this.subtotal();
    const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
    const pct = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);
    if (shipMsg) shipMsg.textContent = remaining > 0 ? `Add ₹${remaining} more to unlock free shipping 🎁` : "You've unlocked free shipping! 🎉";
    if (shipBar) shipBar.style.width = pct + "%";

    if (this.items.length === 0) {
      wrap.innerHTML = `<p class="cart-empty">Your bag is feeling light — go find something cute!</p>`;
    } else {
      wrap.innerHTML = this.items.map((i) => {
        // Always resolve the current product so we show its latest image —
        // never trust only the snapshot that was saved into localStorage
        // when the item was originally added to the bag.
        const live = window.LWLProducts ? LWLProducts.byId(i.id) : null;
        const icon = (live && live.icon) || i.icon;
        const tone = (live && live.tone) || i.tone;
        const image = (live && ((live.images && live.images[0]) || live.image)) || i.image;
        return `
        <div class="cart-item" data-id="${i.id}">
         ${LWL.productArt(icon, tone, "", image)}
          <div class="info">
            <div class="name">${LWL.esc(i.name)}</div>
            <div class="price">${LWL.money(i.price)}</div>
            <div class="qty-controls">
              <button class="stepper-btn" data-action="dec">${ICONS.minus}</button>
              <span>${i.qty}</span>
              <button class="stepper-btn" data-action="inc">${ICONS.plus}</button>
              <button class="remove-btn" data-action="remove">Remove</button>
            </div>
          </div>
        </div>`;
      }).join("");
    }
    if (footTotal) footTotal.textContent = LWL.money(subtotal);
  },
};
window.LWLCart = LWLCart;

document.addEventListener("click", (e) => {
  const item = e.target.closest(".cart-item");
  if (!item) return;
  const id = item.dataset.id;
  const action = e.target.closest("button")?.dataset.action;
  const cur = LWLCart.items.find((i) => i.id === id);
  if (!cur) return;
  if (action === "inc") LWLCart.updateQty(id, cur.qty + 1);
  if (action === "dec") LWLCart.updateQty(id, cur.qty - 1);
  if (action === "remove") LWLCart.remove(id);
});

document.addEventListener("DOMContentLoaded", () => {
  LWLCart.renderBadges();
  LWLCart.renderDrawer();
});