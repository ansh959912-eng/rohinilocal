/* ============================================================
   little & lovely — builders.js
   Hamper Builder / Return Gift Builder / Stationery Kit Builder
   ============================================================ */
const HAMPER_DRAFT_KEY = "littlelovely_hamper";
const KIT_DRAFT_KEY = "littlelovely_stationery";

function bulkDiscountPct(qty, tiers) {
  // tiers: sorted array [{min, pct}]
  let pct = 0;
  tiers.forEach((t) => { if (qty >= t.min) pct = t.pct; });
  return pct;
}
const RETURN_DISCOUNT_TIERS = [{ min: 20, pct: 3 }, { min: 50, pct: 5 }, { min: 100, pct: 8 }, { min: 200, pct: 12 }];
const KIT_DISCOUNT_TIERS = [{ min: 20, pct: 4 }, { min: 30, pct: 6 }, { min: 50, pct: 9 }, { min: 100, pct: 14 }];

// Small thumbnail used in the summary lists (Hamper Summary, Kit Summary) —
// shows the product's real photo when it has one, otherwise its emoji icon
// in a soft rounded tile, so summaries aren't just text.
function summaryThumbHtml(item) {
  if (item.image) {
    return `<img src="${LWL.esc(item.image)}" alt="" style="width:30px;height:30px;border-radius:8px;object-fit:cover;flex-shrink:0;border:1px solid var(--line);">`;
  }
  return `<span style="width:30px;height:30px;border-radius:8px;background:var(--bg-alt);display:inline-flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${item.icon || "🎁"}</span>`;
}

/* ============================================================
   HAMPER BUILDER
   ============================================================ */
const HamperBuilder = {
  state: { occasion: "Birthday", budget: 499, customBudget: "", sel: {}, packaging: "box", name: "", theme: "", message: "", instructions: "" },

  init() {
    const root = document.getElementById("hamper-builder");
    if (!root) return;
    const draft = LWL.store.get(HAMPER_DRAFT_KEY, null);
    if (draft) Object.assign(this.state, draft);
    this.renderOccasions();
    this.renderBudgets();
    this.renderProducts();
        this.renderPackagingChips();
    this.bindInputs();
    this.renderSummary();
  },

  saveDraft() { LWL.store.set(HAMPER_DRAFT_KEY, this.state); },

  renderOccasions() {
    const el = document.getElementById("hamper-occasion-chips");
    el.innerHTML = OCCASIONS.map((o) => `<button type="button" class="chip ${this.state.occasion === o ? "active" : ""}" data-o="${o}">${o}</button>`).join("");
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      this.state.occasion = b.dataset.o; this.saveDraft(); this.renderOccasions();
    }));
  },

  renderBudgets() {
    const el = document.getElementById("hamper-budget-chips");
    el.innerHTML = BUDGETS.map((b) => `<button type="button" class="chip ${this.state.budget === b ? "active" : ""}" data-b="${b}">₹${b}</button>`).join("") +
      `<button type="button" class="chip ${this.state.budget === 0 ? "active" : ""}" data-b="0">Custom Budget</button>`;
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      this.state.budget = Number(b.dataset.b); this.saveDraft(); this.renderBudgets(); this.renderSummary();
      document.getElementById("hamper-custom-budget-wrap").style.display = this.state.budget === 0 ? "block" : "none";
    }));
    document.getElementById("hamper-custom-budget-wrap").style.display = this.state.budget === 0 ? "block" : "none";
    const customInput = document.getElementById("hamper-custom-budget");
    customInput.value = this.state.customBudget || "";
    customInput.oninput = () => { this.state.customBudget = customInput.value; this.saveDraft(); this.renderSummary(); };
  },

   renderProducts() {
    const el = document.getElementById("hamper-product-grid");
    el.innerHTML = HAMPER_PRODUCTS.map((p) => {
      const qty = this.variantQtyFor(p);
      return `<div class="bp-card">
        <div data-open-variants="${p.id}" style="cursor:pointer;">
          ${LWL.productArt(p.icon, p.tone || "rose", "bp-art", p.image)}
        </div>
        <div class="name" data-open-variants="${p.id}" style="cursor:pointer;">${p.name}</div>
        <div class="price">${LWL.money(p.price)}</div>
        <button type="button" class="pill-add" data-open-variants="${p.id}">
          ${qty > 0 ? `${qty} added` : "Add"}
        </button>
      </div>`;
    }).join("");
    el.querySelectorAll("[data-open-variants]").forEach((b) =>
      b.addEventListener("click", () => this.openVariantPicker(b.dataset.openVariants))
    );
  },

  allFlatProducts() {
    let flat = [];
    HAMPER_PRODUCTS.forEach((p) => {
      if (p.variants && p.variants.length) flat = flat.concat(p.variants.map((v) => ({ ...v })));
      else flat.push(p);
    });
    return flat;
  },

  variantQtyFor(p) {
    const variants = p.variants && p.variants.length ? p.variants : [p];
    return variants.reduce((sum, v) => sum + (this.state.sel[v.id] || 0), 0);
  },

  openVariantPicker(productId) {
    const p = HAMPER_PRODUCTS.find((x) => x.id === productId);
    const variants = p.variants && p.variants.length ? p.variants : [p];

    let overlay = document.getElementById("hamper-variant-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "hamper-variant-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-box" style="max-width:560px;background:#fff;border-radius:16px;padding:24px;position:relative;">
        <button type="button" id="hamper-variant-close" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
        <h3 id="hamper-variant-title" style="margin-bottom:16px;"></h3>
        <div id="hamper-variant-list" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px;"></div>
      </div>`;
      document.body.appendChild(overlay);
      document.getElementById("hamper-variant-close").addEventListener("click", () => LWL.closeModal("hamper-variant-overlay"));
    }

    document.getElementById("hamper-variant-title").textContent = `Choose your ${p.name}`;
    const listEl = document.getElementById("hamper-variant-list");

    const renderList = () => {
      listEl.innerHTML = variants.map((v) => {
        const qty = this.state.sel[v.id] || 0;
                return `<div class="bp-card">
          ${LWL.productArt(v.icon || p.icon, v.tone || p.tone || "rose", "bp-art", v.image)}
          <div class="name">${v.name}</div>
          <div class="price">${LWL.money(v.price)}</div>
          ${qty === 0
            ? `<button type="button" class="pill-add" data-v-add="${v.id}">Add</button>`
            : `<div class="qty-pill">
                <button type="button" class="stepper-btn" data-v-dec="${v.id}">${ICONS.minus}</button>
                <span style="font-weight:700;font-size:13px;">${qty}</span>
                <button type="button" class="stepper-btn" data-v-inc="${v.id}">${ICONS.plus}</button>
              </div>`}
        </div>`;
      }).join("");
      listEl.querySelectorAll("[data-v-add]").forEach((b) => b.addEventListener("click", () => { this.setQty(b.dataset.vAdd, 1); renderList(); this.renderProducts(); }));
      listEl.querySelectorAll("[data-v-inc]").forEach((b) => b.addEventListener("click", () => { this.setQty(b.dataset.vInc, (this.state.sel[b.dataset.vInc] || 0) + 1); renderList(); this.renderProducts(); }));
      listEl.querySelectorAll("[data-v-dec]").forEach((b) => b.addEventListener("click", () => { this.setQty(b.dataset.vDec, (this.state.sel[b.dataset.vDec] || 0) - 1); renderList(); this.renderProducts(); }));
    };
    renderList();

    LWL.openModal("hamper-variant-overlay");
  },

  setQty(id, qty) {
    if (qty <= 0) delete this.state.sel[id]; else this.state.sel[id] = qty;
    this.saveDraft(); this.renderProducts(); this.renderSummary();
  },

   renderPackaging() {
    const el = document.getElementById("hamper-packaging-chips");
    el.innerHTML = PACKAGING.map((pk) => `<button type="button" class="chip ${this.state.packaging === pk.id ? "active" : ""}" data-pk="${pk.id}">${pk.name} · ₹${pk.price}</button>`).join("");
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      this.openPackagingPopup(b.dataset.pk);
    }));
  },

  openPackagingPopup(pkId) {
    const pk = PACKAGING.find((x) => x.id === pkId);

    let overlay = document.getElementById("hamper-packaging-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "hamper-packaging-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-box" style="max-width:360px;background:#fff;border-radius:16px;padding:24px;position:relative;margin:auto;">
        <button type="button" id="hamper-packaging-close" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
        <div id="hamper-packaging-body"></div>
        <button type="button" id="hamper-packaging-confirm" class="btn btn-primary block" style="margin-top:16px;">Select This Packaging</button>
      </div>`;
      document.body.appendChild(overlay);
      document.getElementById("hamper-packaging-close").addEventListener("click", () => LWL.closeModal("hamper-packaging-overlay"));
    }

    document.getElementById("hamper-packaging-body").innerHTML = `
      <div class="bp-card" style="max-width:220px;margin:0 auto;">
        ${LWL.productArt(pk.icon || "🎁", pk.tone || "rose", "bp-art", pk.image)}
        <div class="name">${pk.name}</div>
        <div class="price">${LWL.money(pk.price)}</div>
      </div>`;

    document.getElementById("hamper-packaging-confirm").onclick = () => {
      this.state.packaging = pk.id;
      this.saveDraft();
      this.renderPackagingChips();
      this.renderSummary();
      LWL.closeModal("hamper-packaging-overlay");
    };

    LWL.openModal("hamper-packaging-overlay");
  },

  renderPackagingChips() {
    const el = document.getElementById("hamper-packaging-chips");
    el.innerHTML = PACKAGING.map((pk) => `<button type="button" class="chip ${this.state.packaging === pk.id ? "active" : ""}" data-pk="${pk.id}">${pk.name} · ₹${pk.price}</button>`).join("");
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      this.openPackagingPopup(b.dataset.pk);
    }));
  },

  bindInputs() {
    const nameEl = document.getElementById("hamper-recipient");
    const themeEl = document.getElementById("hamper-theme-color");
    const msgEl = document.getElementById("hamper-message");
    nameEl.value = this.state.name; themeEl.value = this.state.theme; msgEl.value = this.state.message;
    nameEl.oninput = () => { this.state.name = nameEl.value; this.saveDraft(); };
    themeEl.oninput = () => { this.state.theme = themeEl.value; this.saveDraft(); };
    msgEl.oninput = () => { this.state.message = msgEl.value; this.saveDraft(); };
    document.getElementById("hamper-create-btn").addEventListener("click", () => this.finalize());
  },

     items() {
    const flat = this.allFlatProducts();
    const valid = [];
    Object.entries(this.state.sel).forEach(([id, qty]) => {
      const p = flat.find((x) => x.id === id);
      if (p) valid.push({ ...p, qty });
      else delete this.state.sel[id]; // remove stale/unknown ids
    });
    return valid;
  },
  subtotal() { return this.items().reduce((a, i) => a + i.price * i.qty, 0); },
  pack() { return PACKAGING.find((p) => p.id === this.state.packaging); },
  total() { return this.subtotal() + (this.pack()?.price || 0); },
  effectiveBudget() { return this.state.budget === 0 ? Number(this.state.customBudget) || 0 : this.state.budget; },

  renderSummary() {
    const items = this.items();
    const wrap = document.getElementById("hamper-summary-items");
    wrap.innerHTML = items.length === 0
      ? `<p class="empty-note">No items yet — add a few favourites to see your hamper come together.</p>`
      : items.map((i) => `<div class="summary-line" style="align-items:center;gap:8px;">
          <span style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
            ${summaryThumbHtml(i)}
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${LWL.esc(i.name)} × ${i.qty}</span>
          </span>
          <span style="flex-shrink:0;">${LWL.money(i.price * i.qty)}</span>
        </div>`).join("");
    document.getElementById("hamper-subtotal-val").textContent = LWL.money(this.subtotal());
    document.getElementById("hamper-packaging-label").textContent = `Packaging (${this.pack()?.name})`;
    document.getElementById("hamper-packaging-val").textContent = LWL.money(this.pack()?.price || 0);
    document.getElementById("hamper-total-val").textContent = LWL.money(this.total());
    const note = document.getElementById("hamper-budget-note");
    const budget = this.effectiveBudget();
    if (budget > 0) {
      const over = this.subtotal() > budget;
      note.style.display = "block";
      note.style.color = over ? "var(--rose-deep)" : "var(--ink-soft)";
      note.textContent = over ? `₹${this.subtotal() - budget} over your ₹${budget} budget` : `Budget: ₹${budget} — looking good!`;
    } else {
      note.style.display = "none";
    }
  },

  finalize() {
    const items = this.items();
    if (items.length === 0) { LWL.toast("Add at least one product to build your hamper"); return; }
    const hamper = {
      id: "hamper_" + Date.now(),
      occasion: this.state.occasion,
      budget: this.effectiveBudget(),
      products: items,
      packaging: this.pack(),
      recipient: this.state.name,
      theme: this.state.theme,
      message: this.state.message,
      total: this.total(),
    };
    document.getElementById("hamper-confirm-body").innerHTML = `
      <p style="color:var(--ink-soft);font-size:14px;line-height:1.6;">Your <b style="color:var(--ink);">${LWL.esc(hamper.occasion)}</b> hamper with ${items.length} item${items.length > 1 ? "s" : ""}${hamper.recipient ? ` for <b>${LWL.esc(hamper.recipient)}</b>` : ""} is ready.</p>
      <div class="summary-line bold"><span>Total</span><span>${LWL.money(hamper.total)}</span></div>
    `;
    LWL.openModal("hamper-confirm-overlay");
    document.getElementById("hamper-confirm-add-btn").onclick = () => {
      LWLCart.add({ id: hamper.id, name: `Custom Hamper (${hamper.occasion})`, price: hamper.total, icon: "🎁", tone: "rose", type: "hamper", meta: hamper });
      LWL.closeModal("hamper-confirm-overlay");
      this.state.sel = {}; this.saveDraft(); this.renderProducts(); this.renderSummary();
      LWLCart.open();
    };
  },
};

/* ============================================================
   RETURN GIFT BUILDER
   ============================================================ */
const ReturnGiftBuilder = {
  state: { kit: RETURN_KITS[1].id, guests: 30, customGuests: "", theme: "Pastel", childName: "", eventDate: "", message: "" },

  init() {
    const root = document.getElementById("return-gift-builder");
    if (!root) return;
    this.renderKits();
    this.renderGuests();
    this.renderThemes();
    this.bindInputs();
    this.renderSummary();
  },

  kitObj() { return RETURN_KITS.find((k) => k.id === this.state.kit); },
  guestCount() { return this.state.guests === 0 ? Number(this.state.customGuests) || 0 : this.state.guests; },
  discountPct() { return bulkDiscountPct(this.guestCount(), RETURN_DISCOUNT_TIERS); },
  rawTotal() { return this.kitObj().price * this.guestCount(); },
  discountAmt() { return Math.round(this.rawTotal() * this.discountPct() / 100); },
  finalTotal() { return this.rawTotal() - this.discountAmt(); },

   renderKits() {
    const el = document.getElementById("return-kit-tiles");
    el.innerHTML = RETURN_KITS.map((k) => `
      <button type="button" class="kit-tile ${this.state.kit === k.id ? "active" : ""}" data-k="${k.id}">
        <div class="emoji">${k.icon}</div>
        <div class="name">${k.name}</div>
        <div class="price">${LWL.money(k.price)}</div>
      </button>`).join("");
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => this.openKitPopup(b.dataset.k)));
  },

  openKitPopup(kitId) {
    const k = RETURN_KITS.find((x) => x.id === kitId);

    let overlay = document.getElementById("return-kit-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "return-kit-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-box" style="max-width:360px;background:#fff;border-radius:16px;padding:24px;position:relative;margin:auto;">
        <button type="button" id="return-kit-close" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
        <div id="return-kit-body"></div>
        <button type="button" id="return-kit-confirm" class="btn btn-primary block" style="margin-top:16px;">Select This Kit</button>
      </div>`;
      document.body.appendChild(overlay);
      document.getElementById("return-kit-close").addEventListener("click", () => LWL.closeModal("return-kit-overlay"));
    }

    document.getElementById("return-kit-body").innerHTML = `
      <div class="bp-card" style="max-width:220px;margin:0 auto;">
        ${LWL.productArt(k.icon, k.tone || "rose", "bp-art", k.image)}
        <div class="name">${k.name}</div>
        <div class="price">${LWL.money(k.price)}</div>
      </div>`;

    document.getElementById("return-kit-confirm").onclick = () => {
      this.state.kit = k.id;
      this.renderKits();
      this.renderSummary();
      LWL.closeModal("return-kit-overlay");
    };

    LWL.openModal("return-kit-overlay");
  },

  renderGuests() {
    const el = document.getElementById("return-guest-chips");
    el.innerHTML = RETURN_GUEST_COUNTS.map((g) => `<button type="button" class="chip ${this.state.guests === g ? "active" : ""}" data-g="${g}">${g}${g === 200 ? "+" : ""}</button>`).join("") +
      `<button type="button" class="chip ${this.state.guests === 0 ? "active" : ""}" data-g="0">Custom quantity</button>`;
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      this.state.guests = Number(b.dataset.g); this.renderGuests(); this.renderSummary();
      document.getElementById("return-custom-guests-wrap").style.display = this.state.guests === 0 ? "block" : "none";
    }));
    document.getElementById("return-custom-guests-wrap").style.display = this.state.guests === 0 ? "block" : "none";
    const input = document.getElementById("return-custom-guests");
    input.oninput = () => { this.state.customGuests = input.value; this.renderSummary(); };
  },

    renderThemes() {
    const el = document.getElementById("return-theme-chips");
    el.innerHTML = RETURN_THEMES.map((t) => `<button type="button" class="chip ${this.state.theme === t.name ? "active" : ""}" data-t="${t.id}">${t.name}</button>`).join("");
    el.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => this.openThemePopup(b.dataset.t)));
  },

  openThemePopup(themeId) {
    const t = RETURN_THEMES.find((x) => x.id === themeId);

    let overlay = document.getElementById("return-theme-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "return-theme-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-box" style="max-width:360px;background:#fff;border-radius:16px;padding:24px;position:relative;margin:auto;">
        <button type="button" id="return-theme-close" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
        <div id="return-theme-body"></div>
        <button type="button" id="return-theme-confirm" class="btn btn-primary block" style="margin-top:16px;">Select This Theme</button>
      </div>`;
      document.body.appendChild(overlay);
      document.getElementById("return-theme-close").addEventListener("click", () => LWL.closeModal("return-theme-overlay"));
    }

    document.getElementById("return-theme-body").innerHTML = `
      <div class="bp-card" style="max-width:220px;margin:0 auto;">
        ${LWL.productArt(t.icon, t.tone || "rose", "bp-art", t.image)}
        <div class="name">${t.name}</div>
      </div>`;

    document.getElementById("return-theme-confirm").onclick = () => {
      this.state.theme = t.name;
      this.renderThemes();
      LWL.closeModal("return-theme-overlay");
    };

    LWL.openModal("return-theme-overlay");
  },
  bindInputs() {
    document.getElementById("return-child-name").oninput = (e) => this.state.childName = e.target.value;
    document.getElementById("return-event-date").oninput = (e) => this.state.eventDate = e.target.value;
    document.getElementById("return-message").oninput = (e) => this.state.message = e.target.value;

    document.getElementById("return-add-cart-btn").addEventListener("click", () => {
      const guests = this.guestCount();
      if (guests <= 0) { LWL.toast("Please choose the number of guests"); return; }
      LWLCart.add({
        id: "return_" + Date.now(), name: `${this.kitObj().name} × ${guests} (Return Gifts)`,
        price: this.finalTotal(), icon: this.kitObj().icon, tone: "peach", type: "return-gift",
        image: this.kitObj().image || null,
        meta: {
          ...this.state,
          guests,
          total: this.finalTotal(),
          // Full kit/theme objects (name, price, icon, image) embedded here
          // so the admin dashboard can show the picture without needing the
          // RETURN_KITS/RETURN_THEMES catalog loaded on that page.
          kitDetails: this.kitObj(),
          themeDetails: RETURN_THEMES.find((t) => t.name === this.state.theme) || null,
        },
      });
      LWLCart.open();
    });
    document.getElementById("return-quote-btn").addEventListener("click", () => {
      const guests = this.guestCount();
      const msg = `Hi! I'd like a custom quote for birthday return gifts.\nKit: ${this.kitObj().name}\nGuests: ${guests || "TBD"}\nTheme: ${this.state.theme}\nChild's name: ${this.state.childName || "-"}\nEvent date: ${this.state.eventDate || "-"}\nMessage: ${this.state.message || "-"}`;
      LWL.openWhatsapp(msg);
    });
  },

  renderSummary() {
    const guests = this.guestCount();
    document.getElementById("return-price-each").textContent = LWL.money(this.kitObj().price);
    document.getElementById("return-guest-count").textContent = guests;
    document.getElementById("return-raw-total").textContent = LWL.money(this.rawTotal());
    const discRow = document.getElementById("return-discount-row");
    if (this.discountPct() > 0) {
      discRow.style.display = "flex";
      document.getElementById("return-discount-pct").textContent = this.discountPct() + "%";
      document.getElementById("return-discount-amt").textContent = "− " + LWL.money(this.discountAmt());
    } else {
      discRow.style.display = "none";
    }
    document.getElementById("return-final-total").textContent = LWL.money(this.finalTotal());
    const saveNote = document.getElementById("return-save-note");
    saveNote.style.display = this.discountAmt() > 0 ? "block" : "none";
    saveNote.textContent = `You save ${LWL.money(this.discountAmt())} 🎉`;
  },
};

/* ============================================================
   STATIONERY KIT BUILDER
   ============================================================ */
const StationeryKitBuilder = {
  state: { sel: {}, kits: 10 },

  init() {
    const root = document.getElementById("stationery-kit-builder");
    if (!root) return;
    const draft = LWL.store.get(KIT_DRAFT_KEY, null);
    if (draft) Object.assign(this.state, draft);
    this.renderItems();
    this.renderKitQty();
    this.renderSummary();
    document.getElementById("kit-save-btn").addEventListener("click", () => this.saveNamedKit());
    document.getElementById("kit-clear-btn").addEventListener("click", () => { this.state.sel = {}; this.state.kits = 10; this.saveDraft(); this.renderItems(); this.renderKitQty(); this.renderSummary(); });
    document.getElementById("kit-add-cart-btn").addEventListener("click", () => this.addToCart());

    window.LWLOpenSavedKits = () => this.openSavedKitsModal();
    if (location.hash.includes("openKits=1") || location.search.includes("openKits=1")) {
      this.openSavedKitsModal();
    }
  },

  saveDraft() { LWL.store.set(KIT_DRAFT_KEY, this.state); },
   items() {
    const flat = this.allFlatItems();
    const valid = [];
    Object.entries(this.state.sel).forEach(([id, qty]) => {
      const item = flat.find((x) => x.id === id);
      if (item) valid.push({ ...item, qty });
      else delete this.state.sel[id];
    });
    return valid;
  },
    saveDraft() { LWL.store.set(KIT_DRAFT_KEY, this.state); },

  SAVED_KITS_KEY: "littlelovely_saved_kits",

  savedKits() { return LWL.store.get(this.SAVED_KITS_KEY, []); },

  saveNamedKit() {
    const items = this.items();
    if (items.length === 0) { LWL.toast("Add at least one item to save a kit"); return; }
    const name = prompt("Name this kit (e.g. 'Birthday Return Kit'):", "My Stationery Kit");
    if (!name) return;
    const kits = this.savedKits();
    kits.unshift({
      id: "savedkit_" + Date.now(),
      name,
      items,
      kits: this.state.kits,
      perKitTotal: this.perKitTotal(),
      grandTotal: this.grandTotal(),
      savedAt: Date.now(),
    });
    LWL.store.set(this.SAVED_KITS_KEY, kits);
    LWL.toast(`"${name}" saved to My Kits 💾`);
  },

  loadNamedKit(id) {
    const kit = this.savedKits().find((k) => k.id === id);
    if (!kit) return;
    this.state.sel = {};
    kit.items.forEach((i) => { this.state.sel[i.id] = i.qty; });
    this.state.kits = kit.kits;
    this.saveDraft();
    this.renderItems();
    this.renderKitQty();
    this.renderSummary();
    LWL.toast(`Loaded "${kit.name}"`);
  },

  deleteNamedKit(id) {
    const kits = this.savedKits().filter((k) => k.id !== id);
    LWL.store.set(this.SAVED_KITS_KEY, kits);
  },

  openSavedKitsModal() {
    let overlay = document.getElementById("saved-kits-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "saved-kits-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-box" style="max-width:480px;background:#fff;border-radius:16px;padding:24px;position:relative;margin:auto;max-height:80vh;overflow-y:auto;">
        <button type="button" id="saved-kits-close" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
        <h3 style="margin-bottom:16px;">My Saved Kits</h3>
        <div id="saved-kits-list"></div>
      </div>`;
      document.body.appendChild(overlay);
      document.getElementById("saved-kits-close").addEventListener("click", () => LWL.closeModal("saved-kits-overlay"));
    }
    this.renderSavedKitsList();
    LWL.openModal("saved-kits-overlay");
  },

  renderSavedKitsList() {
    const kits = this.savedKits();
    const listEl = document.getElementById("saved-kits-list");
    if (kits.length === 0) {
      listEl.innerHTML = `<p class="empty-note">No saved kits yet. Build a kit and tap "Save Kit".</p>`;
      return;
    }
    listEl.innerHTML = kits.map((k) => `
      <div class="summary-line" style="flex-direction:column;align-items:stretch;border-bottom:1px solid #eee;padding:12px 0;">
        <div style="display:flex;justify-content:space-between;font-weight:700;">
          <span>${LWL.esc(k.name)}</span><span>${LWL.money(k.grandTotal)}</span>
        </div>
        <div style="font-size:12.5px;color:var(--ink-soft);margin:4px 0;">
          ${k.items.map((i) => `${i.qty} × ${LWL.esc(i.name)}`).join(", ")} · ${k.kits} kits
        </div>
        <div style="display:flex;gap:8px;margin-top:6px;">
          <button type="button" class="btn btn-soft small" data-load="${k.id}">Reorder This Kit</button>
          <button type="button" class="btn btn-outline small" data-del="${k.id}">Delete</button>
        </div>
      </div>`).join("");
    listEl.querySelectorAll("[data-load]").forEach((b) => b.addEventListener("click", () => {
      this.loadNamedKit(b.dataset.load);
      LWL.closeModal("saved-kits-overlay");
    }));
    listEl.querySelectorAll("[data-del]").forEach((b) => b.addEventListener("click", () => {
      this.deleteNamedKit(b.dataset.del);
      this.renderSavedKitsList();
    }));
  },
  perKitTotal() { return this.items().reduce((a, i) => a + i.price * i.qty, 0); },
  discountPct() { return bulkDiscountPct(this.state.kits, KIT_DISCOUNT_TIERS); },
  grandTotalRaw() { return this.perKitTotal() * this.state.kits; },
  discountAmt() { return Math.round(this.grandTotalRaw() * this.discountPct() / 100); },
  grandTotal() { return this.grandTotalRaw() - this.discountAmt(); },

   renderItems() {
    const el = document.getElementById("kit-items-grid");
    el.innerHTML = KIT_ITEMS.map((k) => {
      const qty = this.variantQtyFor(k);
      return `<div class="bp-card">
        <div data-open-variants="${k.id}" style="cursor:pointer;">
          ${LWL.productArt(k.icon, k.tone || "rose", "bp-art", k.image)}
        </div>
        <div class="name" data-open-variants="${k.id}" style="cursor:pointer;">${k.name}</div>
        <div class="price">${LWL.money(k.price)}</div>
        <button type="button" class="pill-add" data-open-variants="${k.id}">
          ${qty > 0 ? `${qty} added` : "Add"}
        </button>
      </div>`;
    }).join("");
    el.querySelectorAll("[data-open-variants]").forEach((b) =>
      b.addEventListener("click", () => this.openVariantPicker(b.dataset.openVariants))
    );
  },

  allFlatItems() {
    let flat = [];
    KIT_ITEMS.forEach((k) => {
      if (k.variants && k.variants.length) flat = flat.concat(k.variants.map((v) => ({ ...v })));
      else flat.push(k);
    });
    return flat;
  },

  variantQtyFor(k) {
    const variants = k.variants && k.variants.length ? k.variants : [k];
    return variants.reduce((sum, v) => sum + (this.state.sel[v.id] || 0), 0);
  },

  setQty(id, qty) { if (qty <= 0) delete this.state.sel[id]; else this.state.sel[id] = qty; this.saveDraft(); this.renderItems(); this.renderSummary(); },

  openVariantPicker(itemId) {
    const k = KIT_ITEMS.find((x) => x.id === itemId);
    const variants = k.variants && k.variants.length ? k.variants : [k];

    let overlay = document.getElementById("kit-variant-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "kit-variant-overlay";
      overlay.className = "modal-overlay";
      overlay.innerHTML = `<div class="modal-box" style="max-width:560px;background:#fff;border-radius:16px;padding:24px;position:relative;">
        <button type="button" id="kit-variant-close" style="position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;">${ICONS.x}</button>
        <h3 id="kit-variant-title" style="margin-bottom:16px;"></h3>
        <div id="kit-variant-list" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:14px;"></div>
      </div>`;
      document.body.appendChild(overlay);
      document.getElementById("kit-variant-close").addEventListener("click", () => LWL.closeModal("kit-variant-overlay"));
    }

    document.getElementById("kit-variant-title").textContent = `Choose your ${k.name}`;
    const listEl = document.getElementById("kit-variant-list");

    const renderList = () => {
      listEl.innerHTML = variants.map((v) => {
        const qty = this.state.sel[v.id] || 0;
        return `<div class="bp-card">
          ${LWL.productArt(v.icon || k.icon, v.tone || k.tone || "rose", "bp-art", v.image)}
          <div class="name">${v.name}</div>
          <div class="price">${LWL.money(v.price)}</div>
          ${qty === 0
            ? `<button type="button" class="pill-add" data-v-add="${v.id}">Add</button>`
            : `<div class="qty-pill">
                <button type="button" class="stepper-btn" data-v-dec="${v.id}">${ICONS.minus}</button>
                <span style="font-weight:700;font-size:13px;">${qty}</span>
                <button type="button" class="stepper-btn" data-v-inc="${v.id}">${ICONS.plus}</button>
              </div>`}
        </div>`;
      }).join("");
      listEl.querySelectorAll("[data-v-add]").forEach((b) => b.addEventListener("click", () => { this.setQty(b.dataset.vAdd, 1); renderList(); this.renderItems(); }));
      listEl.querySelectorAll("[data-v-inc]").forEach((b) => b.addEventListener("click", () => { this.setQty(b.dataset.vInc, (this.state.sel[b.dataset.vInc] || 0) + 1); renderList(); this.renderItems(); }));
      listEl.querySelectorAll("[data-v-dec]").forEach((b) => b.addEventListener("click", () => { this.setQty(b.dataset.vDec, (this.state.sel[b.dataset.vDec] || 0) - 1); renderList(); this.renderItems(); }));
    };
    renderList();

    LWL.openModal("kit-variant-overlay");
  },

  renderKitQty() {
    document.getElementById("kit-qty-input").value = this.state.kits;
    document.getElementById("kit-qty-dec").onclick = () => { this.state.kits = Math.max(1, this.state.kits - 5); this.saveDraft(); this.renderKitQty(); this.renderSummary(); };
    document.getElementById("kit-qty-inc").onclick = () => { this.state.kits = this.state.kits + 5; this.saveDraft(); this.renderKitQty(); this.renderSummary(); };
    document.getElementById("kit-qty-input").oninput = (e) => { this.state.kits = Math.max(1, Number(e.target.value) || 1); this.saveDraft(); this.renderSummary(); };
  },

  renderSummary() {
    const wrap = document.getElementById("kit-summary-items");
    const items = this.items();
    wrap.innerHTML = items.length === 0 ? `<p class="empty-note">Add items to build one kit.</p>` :
      items.map((i) => `<div class="summary-line" style="align-items:center;gap:8px;">
          <span style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">
            ${summaryThumbHtml(i)}
            <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${i.qty} × ${LWL.esc(i.name)}</span>
          </span>
          <span style="flex-shrink:0;">${LWL.money(i.price * i.qty)}</span>
        </div>`).join("");
    document.getElementById("kit-per-kit-total").textContent = LWL.money(this.perKitTotal());
    document.getElementById("kit-count-label").textContent = this.state.kits;
    document.getElementById("kit-grand-raw").textContent = LWL.money(this.grandTotalRaw());
    const discRow = document.getElementById("kit-discount-row");
    if (this.discountPct() > 0) {
      discRow.style.display = "flex";
      document.getElementById("kit-discount-pct").textContent = this.discountPct() + "%";
      document.getElementById("kit-discount-amt").textContent = "− " + LWL.money(this.discountAmt());
    } else discRow.style.display = "none";
    document.getElementById("kit-grand-total").textContent = LWL.money(this.grandTotal());
  },

  addToCart() {
    const items = this.items();
    if (items.length === 0) { LWL.toast("Add at least one item to your kit"); return; }
    LWLCart.add({
      id: "kit_" + Date.now(), name: `Custom Stationery Kit × ${this.state.kits}`,
      price: this.grandTotal(), icon: "🎒", tone: "blue", type: "stationery-kit",
      meta: { items, kits: this.state.kits, total: this.grandTotal() },
    });
    LWL.toast("Kit added to bag");
    LWLCart.open();
  },
};

document.addEventListener("DOMContentLoaded", () => {
  HamperBuilder.init();
  ReturnGiftBuilder.init();
  StationeryKitBuilder.init();
});