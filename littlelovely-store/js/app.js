/* ============================================================
   little & lovely — app.js (home page only)
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* hero CTAs */
  const heroShop = document.getElementById("hero-shop-btn");
  if (heroShop) heroShop.addEventListener("click", () => window.location.href = LWL.pagePath("shop.html"));
  const heroCreate = document.getElementById("hero-create-btn");
  if (heroCreate) heroCreate.addEventListener("click", () => document.getElementById("hamper-builder").scrollIntoView({ behavior: "smooth" }));

  /* shop by mood */
  const moodGrid = document.getElementById("mood-grid");
  if (moodGrid) {
    moodGrid.innerHTML = MOODS.map((m) => `
      <button type="button" class="mood-card" data-cat="${m.cat || ""}" data-link="${m.link || ""}" data-tag="${m.tag || ""}">
        ${LWL.productArt(m.icon, m.tone)}
        <div class="label">${m.label}</div>
      </button>`).join("");
    moodGrid.querySelectorAll(".mood-card").forEach((card) => card.addEventListener("click", () => {
      if (card.dataset.link === "return-gifts") { document.getElementById("return-gifts").scrollIntoView({ behavior: "smooth" }); return; }
      const params = {};
      if (card.dataset.cat) params.cat = card.dataset.cat;
      if (card.dataset.tag) params.tag = card.dataset.tag;
      window.location.href = LWL.pagePath("shop.html") + LWL.setQuery(params);
    }));
  }

  /* usp start creating */
  const uspBtn = document.getElementById("usp-start-btn");
  if (uspBtn) uspBtn.addEventListener("click", () => document.getElementById("hamper-builder").scrollIntoView({ behavior: "smooth" }));

  /* product rails */
  document.querySelectorAll("[data-rail-source]").forEach((section) => {
    const source = section.dataset.railSource;
    let items = [];
    if (source === "fresh") items = PRODUCTS.slice(0, 8);
    if (source === "bestsellers") items = [...PRODUCTS].reverse().slice(0, 8);
    if (source === "Keychains") items = PRODUCTS.filter((p) => p.cat === "Keychains");
    if (source === "Hair Accessories") items = PRODUCTS.filter((p) => p.cat === "Hair Accessories");
    if (source === "Kids") items = PRODUCTS.filter((p) => p.cat === "Kids");
    if (source === "Fans & Lamps") items = PRODUCTS.filter((p) => p.cat === "Fans & Lamps");
    LWLProducts.renderRail(section, items);
    const viewAllBtn = section.querySelector("[data-view-all]");
    if (viewAllBtn) viewAllBtn.addEventListener("click", () => {
      const cat = viewAllBtn.dataset.viewAll;
      window.location.href = LWL.pagePath("shop.html") + (cat ? LWL.setQuery({ cat }) : "");
    });
  });

  /* price strip */
  const priceStrip = document.getElementById("price-strip");
  if (priceStrip) {
    priceStrip.innerHTML = PRICE_TIERS.map((t) => `
      <button type="button" class="price-tile tone-${t.tone}" style="background:var(--${t.tone === "rose" ? "rose-soft" : t.tone});" data-max="${t.max}" data-cat="${t.cat || ""}">
        <span>${t.label}</span>${ICONS.chevronRight}
      </button>`).join("");
    priceStrip.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
      const params = { max: b.dataset.max };
      if (b.dataset.cat) params.cat = b.dataset.cat;
      window.location.href = LWL.pagePath("shop.html") + LWL.setQuery(params);
    }));
  }

  /* occasion shopping grid */
  const occGrid = document.getElementById("occasion-grid");
  if (occGrid) {
    occGrid.innerHTML = OCCASION_SHOP.map((o) => `
      <button type="button" class="occasion-card" style="background:color-mix(in srgb, var(--${o.tone === "rose" ? "rose-soft" : o.tone}) 55%, transparent);" data-link="${o.link || ""}" data-label="${o.label}">
        <div class="emoji">${o.icon}</div>
        <div class="label">${o.label}</div>
      </button>`).join("");
    occGrid.querySelectorAll(".occasion-card").forEach((card) => card.addEventListener("click", () => {
      if (card.dataset.link === "return-gifts") { document.getElementById("return-gifts").scrollIntoView({ behavior: "smooth" }); return; }
      window.location.href = LWL.pagePath("shop.html") + LWL.setQuery({ query: card.dataset.label });
    }));
  }

  /* reviews */
  const reviewGrid = document.getElementById("review-grid");
  if (reviewGrid) {
    reviewGrid.innerHTML = REVIEWS.map((r) => `
      <div class="review-card">
        ${LWL.starsHtml(r.rating)}
        <p>${LWL.esc(r.text)}</p>
        <div class="who">— ${LWL.esc(r.name)} · ${LWL.esc(r.product)}</div>
      </div>`).join("");
  }

  /* instagram grid */
  const instaGrid = document.getElementById("insta-grid");
  if (instaGrid) {
    instaGrid.innerHTML = INSTA_POSTS.map((post) => {
      if (post.type === "video") {
        return `<button type="button" class="insta-cell insta-video">
          <video src="${LWL.assetPath(post.src)}" muted loop playsinline autoplay preload="auto"></video>
          <span class="insta-play-badge">▶</span>
        </button>`;
      }
     
      if (post.type === "image") {
        return `<button type="button" class="insta-cell">
          <div class="insta-img-wrap"><img src="${LWL.assetPath(post.src)}" alt="" class="insta-img" onerror="this.parentElement.remove();"></div>
        </button>`;
      }
      return `<button type="button" class="insta-cell">${LWL.productArt(post.icon, post.tone)}</button>`;
    }).join("");

    /* force videos to actually autoplay + loop — some browsers ignore the
       autoplay attribute on dynamically inserted <video> elements */
    instaGrid.querySelectorAll("video").forEach((v) => {
      v.muted = true;
      v.loop = true;
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      v.addEventListener("loadeddata", tryPlay);
      v.addEventListener("canplay", tryPlay);
    });

    instaGrid.querySelectorAll(".insta-cell").forEach((c) => c.addEventListener("click", () => window.open(INSTAGRAM_URL, "_blank", "noopener")));
    document.getElementById("insta-follow-btn").addEventListener("click", () => window.open(INSTAGRAM_URL, "_blank", "noopener"));
  }

  /* bulk / custom order CTAs */
  const bulkCta = document.getElementById("bulk-cta-btn");
  if (bulkCta) bulkCta.addEventListener("click", () => LWL.openModal("bulk-overlay"));
  const customCta = document.getElementById("custom-gift-btn");
  if (customCta) customCta.addEventListener("click", () => LWL.openModal("customgift-overlay"));
  const customWaCta = document.getElementById("custom-whatsapp-btn");
  if (customWaCta) customWaCta.addEventListener("click", () => LWL.openWhatsapp("Hi! I'd like help creating a custom gift."));
});
