/* =========================================================
   Apex Dental Journal - motion + scroll utilities
   ========================================================= */

(function () {
  const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal on scroll
  if ("IntersectionObserver" in window && !prefersReduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    document.querySelectorAll("[data-reveal]").forEach(el => io.observe(el));
  } else {
    document.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-visible"));
  }

  // Read progress bar
  const bar = document.querySelector(".read-progress > div");
  if (bar) {
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }
})();
