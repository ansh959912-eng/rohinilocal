/* ============================================================
   little & lovely — ui.js
   Path helpers, formatting, toast + modal systems
   ============================================================ */
const LWL = window.LWL || {};

/* ---------- path helpers (works from / and /pages/) ---------- */
LWL.inPages = location.pathname.includes("/pages/");
LWL.rootPath = LWL.inPages ? "../" : "";
LWL.pagePath = (file) => (LWL.inPages ? file : "pages/" + file);
LWL.homePath = () => LWL.rootPath + "index.html";
LWL.assetPath = (p) => /^https?:\/\//i.test(p) ? p : LWL.rootPath + p;

/* ---------- money ---------- */
LWL.money = (v) => "₹" + Math.round(v).toLocaleString("en-IN");

/* ---------- query params ---------- */
LWL.qs = (key) => new URLSearchParams(location.search).get(key);
LWL.setQuery = (obj) => {
  const params = new URLSearchParams(location.search);
  Object.entries(obj).forEach(([k, v]) => {
    if (v === null || v === undefined || v === "") params.delete(k);
    else params.set(k, v);
  });
  return "?" + params.toString();
};

/* ---------- toast system ---------- */
LWL.toast = (msg) => {
  let stack = document.getElementById("toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.id = "toast-stack";
    document.body.appendChild(stack);
  }
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `${ICONS.check} <span>${msg}</span>`;
  stack.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity .25s ease";
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 250);
  }, 2200);
};

/* ---------- modal system ---------- */
LWL._openModals = [];
LWL.openModal = (id) => {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add("open");
  document.body.classList.add("no-scroll");
  LWL._openModals.push(id);
};
LWL.closeModal = (id) => {
  const overlay = document.getElementById(id);
  if (overlay) overlay.classList.remove("open");
  LWL._openModals = LWL._openModals.filter((m) => m !== id);
  if (LWL._openModals.length === 0) document.body.classList.remove("no-scroll");
};
LWL.closeTopModal = () => {
  if (LWL._openModals.length) LWL.closeModal(LWL._openModals[LWL._openModals.length - 1]);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    LWL.closeTopModal();
    if (window.LWLCart) window.LWLCart.close();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.classList && e.target.classList.contains("modal-overlay")) {
    LWL.closeModal(e.target.id);
  }
});

/* ---------- product art helper ---------- */
LWL.productArt = (icon, tone, extraClass = "", img = null) =>
  `<div class="product-art tone-${tone} ${extraClass}">
     <div class="glow"></div>
     ${img ? `<img src="${LWL.assetPath(img)}" alt="" class="art-img" onerror="this.remove(); this.parentElement.querySelector('.emoji').style.display='flex';">` : ""}
     <span class="emoji" style="${img ? "display:none;" : ""}">${icon}</span>
   </div>`;
/* ---------- stars ---------- */
LWL.starsHtml = (rating, reviews) => {
  const full = Math.round(rating);
  let s = "";
  for (let i = 0; i < 5; i++) s += ICONS.star(i < full);
  return `<div class="stars">${s}${reviews !== undefined ? `<span class="rcount">(${reviews})</span>` : ""}</div>`;
};

/* ---------- localStorage helpers ---------- */
LWL.store = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  },
};

/* ---------- whatsapp helper ---------- */
LWL.whatsappLink = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
LWL.openWhatsapp = (message) => window.open(LWL.whatsappLink(message), "_blank", "noopener");

/* ---------- generic form field error ---------- */
LWL.setFieldError = (labelEl, hasError) => {
  labelEl.classList.toggle("field-error", hasError);
};

/* ---------- escape html ---------- */
LWL.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

window.LWL = LWL;
