/* ============================================================
   little & lovely — wishlist.js
   Wishlist state + persistence
   ============================================================ */
const WISHLIST_KEY = "littlelovely_wishlist";

const LWLWishlist = {
  ids: new Set(LWL.store.get(WISHLIST_KEY, [])),

  save() { LWL.store.set(WISHLIST_KEY, Array.from(this.ids)); this.renderBadges(); },

  has(id) { return this.ids.has(id); },

toggle(id, name) {
    const now = Date.now();
    if (this._lastToggle && this._lastToggle.id === id && now - this._lastToggle.time < 1000) {
      return this.ids.has(id); // duplicate call within 300ms — ignore
    }
    this._lastToggle = { id, time: now };

    if (this.ids.has(id)) {
      this.ids.delete(id);
      LWL.toast(`Removed ${name || "item"} from wishlist`);
    } else {
      this.ids.add(id);
      LWL.toast(`Added ${name || "item"} to wishlist 💗`);
    }
    this.save();
    document.querySelectorAll(`[data-wish-id="${id}"]`).forEach((btn) => {
      btn.classList.toggle("active", this.ids.has(id));
      btn.innerHTML = ICONS.heart(this.ids.has(id));
    });
    return this.ids.has(id);
  },

  count() { return this.ids.size; },

  renderBadges() {
    document.querySelectorAll(".wish-count-badge").forEach((el) => {
      const c = this.count();
      el.textContent = ""; // dot only, no number
      el.style.display = c > 0 ? "block" : "none";
      el.style.width = "9px";
      el.style.height = "9px";
      el.style.minWidth = "0";
      el.style.padding = "0";
      el.style.borderRadius = "50%";
      el.title = c > 0 ? `${c} item${c > 1 ? "s" : ""} in wishlist` : "";
    });
  },
};
window.LWLWishlist = LWLWishlist;

document.addEventListener("DOMContentLoaded", () => LWLWishlist.renderBadges());