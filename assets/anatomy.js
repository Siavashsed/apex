/* =========================================================
   Apex Dental Journal - interactive tooth anatomy
   SVG cross-section. Layers respond to hover/click and
   surface info from i18n dictionary.
   ========================================================= */

(function () {
  const stage = document.querySelector("[data-anatomy]");
  if (!stage) return;

  const svg = stage.querySelector(".anatomy-svg");
  const info = stage.querySelector(".anatomy-info");
  if (!svg || !info) return;

  const titleEl = info.querySelector("[data-anatomy-title]");
  const descEl = info.querySelector("[data-anatomy-desc]");

  const layers = ["enamel", "dentin", "pulp", "cementum", "ligament", "bone", "gum"];

  function dict() {
    const lang = (window.APEX && window.APEX.getLang()) || "fa";
    return (window.APEX && window.APEX.STR[lang]) || {};
  }

  function show(key) {
    const d = dict();
    const tk = "anatomy." + key;
    const dk = "anatomy." + key + ".desc";
    titleEl.textContent = d[tk] || key;
    descEl.textContent = d[dk] || "";
    svg.querySelectorAll(".layer").forEach(el => el.classList.remove("is-active"));
    const target = svg.querySelector('[data-layer="' + key + '"]');
    if (target) target.classList.add("is-active");
  }

  // Bind
  svg.querySelectorAll(".layer").forEach(el => {
    const key = el.getAttribute("data-layer");
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", key);
    el.addEventListener("mouseenter", () => show(key));
    el.addEventListener("focus", () => show(key));
    el.addEventListener("click", () => show(key));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        show(key);
      }
    });
  });

  // Default
  show("enamel");

  // Re-apply on language change
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      setTimeout(() => {
        const active = svg.querySelector(".layer.is-active");
        if (active) show(active.getAttribute("data-layer"));
      }, 50);
    });
  });
})();
