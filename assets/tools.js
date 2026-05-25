/* =========================================================
   Apex Dental Journal - tool logic: sensitivity quiz + heatmap,
   fluoride calculator, extraction checklist, article filter,
   admissions form.
   ========================================================= */

(function () {
  function dict() {
    const lang = (window.APEX && window.APEX.getLang()) || "fa";
    return (window.APEX && window.APEX.STR[lang]) || {};
  }

  /* ---------- Sensitivity quiz + heatmap ---------- */
  const quiz = document.querySelector("[data-quiz]");
  if (quiz) {
    const submitBtn = quiz.querySelector("[data-quiz-submit]");
    const resultBox = document.querySelector("[data-quiz-result]");
    const mapBlock = document.querySelector("[data-quiz-map]");
    const svg = document.querySelector(".heatmap-svg");

    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        let score = 0;
        let answered = 0;
        quiz.querySelectorAll("fieldset.quiz-q").forEach(fs => {
          const sel = fs.querySelector("input[type=radio]:checked");
          if (sel) {
            answered += 1;
            score += parseInt(sel.value, 10) || 0;
          }
        });
        if (answered === 0) return;
        const d = dict();
        let key = "tools.quiz.result.mild";
        if (score >= 4 && score <= 7) key = "tools.quiz.result.moderate";
        if (score >= 8) key = "tools.quiz.result.refer";
        if (resultBox) {
          resultBox.hidden = false;
          const h = resultBox.querySelector("[data-quiz-result-text]");
          if (h) h.textContent = d[key] || "";
        }
        if (mapBlock) mapBlock.hidden = false;
      });
    }

    if (svg) {
      svg.querySelectorAll(".tooth").forEach(t => {
        t.setAttribute("role", "button");
        t.setAttribute("tabindex", "0");
        const cycle = () => {
          if (t.classList.contains("sensitive-2")) {
            t.classList.remove("sensitive-2");
          } else if (t.classList.contains("sensitive-1")) {
            t.classList.remove("sensitive-1");
            t.classList.add("sensitive-2");
          } else {
            t.classList.add("sensitive-1");
          }
        };
        t.addEventListener("click", cycle);
        t.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); cycle(); }
        });
      });
    }
  }

  /* ---------- Fluoride calculator ---------- */
  const fl = document.querySelector("[data-fluoride]");
  if (fl) {
    const input = fl.querySelector("input[type=number]");
    const out = fl.querySelector("[data-fluoride-out]");
    function update() {
      const v = parseInt(input.value, 10);
      if (Number.isNaN(v)) { out.textContent = ""; return; }
      const d = dict();
      if (v < 3) out.textContent = d["tools.fluoride.r1"] || "";
      else if (v <= 6) out.textContent = d["tools.fluoride.r2"] || "";
      else out.textContent = d["tools.fluoride.r3"] || "";
    }
    if (input) {
      input.addEventListener("input", update);
      update();
    }
  }

  /* ---------- Extraction checklist ---------- */
  document.querySelectorAll("[data-checklist] input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", () => {
      cb.closest("li").classList.toggle("done", cb.checked);
    });
  });

  /* ---------- Article filter ---------- */
  const fr = document.querySelector("[data-article-filter]");
  if (fr) {
    fr.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => {
        const tag = btn.getAttribute("data-filter");
        fr.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
        document.querySelectorAll("[data-article-card]").forEach(card => {
          const tags = (card.getAttribute("data-tags") || "").split(",").map(s => s.trim());
          card.style.display = (tag === "all" || tags.includes(tag)) ? "" : "none";
        });
      });
    });
  }

  /* ---------- Admissions form ---------- */
  const adm = document.querySelector("[data-admissions]");
  if (adm) {
    adm.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = dict();
      const ok = adm.querySelector("[data-admissions-ok]");
      if (ok) {
        ok.textContent = d["adm.success"] || "Welcome.";
        ok.hidden = false;
      }
      adm.reset();
    });
  }
})();
