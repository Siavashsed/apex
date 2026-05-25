/* =========================================================
   Apex Dental Journal - quadrant brushing timer with visual map
   Canvas-rendered upper + lower jaws with 4 quadrants.
   Auto-advances every 30 seconds, beep on quadrant change.
   ========================================================= */

(function () {
  const stage = document.querySelector("[data-bite]");
  if (!stage) return;

  const ring = stage.querySelector(".timer-ring .fg-ring");
  const display = stage.querySelector("[data-timer-display]");
  const qLabel = stage.querySelector("[data-timer-quadrant]");
  const startBtn = stage.querySelector("[data-timer-start]");
  const resetBtn = stage.querySelector("[data-timer-reset]");
  const audioBtn = stage.querySelector("[data-timer-audio]");
  const modeBtns = stage.querySelectorAll("[data-timer-mode]");
  const svg = stage.querySelector(".bite-svg");
  if (!display) return;

  const QUADS = ["UR", "UL", "LL", "LR"];
  const TOTAL = 120;
  let remain = TOTAL;
  let running = false;
  let interval = null;
  let audioOn = true;
  let mode = "bass";
  let circumference = 0;

  if (ring) {
    const r = parseFloat(ring.getAttribute("r"));
    circumference = 2 * Math.PI * r;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = 0;
  }

  function dict() {
    const lang = (window.APEX && window.APEX.getLang()) || "fa";
    return (window.APEX && window.APEX.STR[lang]) || {};
  }

  function fmt(s) {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  function currentQuad() {
    const elapsed = TOTAL - remain;
    const idx = Math.min(QUADS.length - 1, Math.floor(elapsed / 30));
    return QUADS[idx];
  }

  function updateVisual() {
    display.textContent = fmt(remain);
    if (ring) {
      const offset = circumference * (1 - remain / TOTAL);
      ring.style.strokeDashoffset = offset;
    }
    const q = currentQuad();
    if (qLabel) {
      const key = "tools.timer.quadrants." + q;
      qLabel.textContent = dict()[key] || q;
    }
    if (svg) {
      svg.querySelectorAll(".quadrant").forEach(el => {
        el.classList.toggle("is-active", el.getAttribute("data-quad") === q);
      });
    }
  }

  function beep() {
    if (!audioOn) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 660;
      g.gain.setValueAtTime(0.0001, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.22);
      o.start();
      o.stop(ctx.currentTime + 0.25);
    } catch (e) { /* ignore */ }
  }

  function tick() {
    if (remain <= 0) {
      pause();
      display.textContent = "0:00";
      if (qLabel) qLabel.textContent = dict()["tools.timer.done"] || "Complete.";
      beep();
      return;
    }
    const prevQ = currentQuad();
    remain -= 1;
    const newQ = currentQuad();
    if (prevQ !== newQ) beep();
    updateVisual();
  }

  function start() {
    if (running) return;
    running = true;
    if (startBtn) startBtn.textContent = dict()["common.pause"] || "Pause";
    interval = setInterval(tick, 1000);
  }
  function pause() {
    running = false;
    if (startBtn) startBtn.textContent = dict()["common.start"] || "Start";
    if (interval) { clearInterval(interval); interval = null; }
  }
  function reset() {
    pause();
    remain = TOTAL;
    updateVisual();
  }

  if (startBtn) startBtn.addEventListener("click", () => running ? pause() : start());
  if (resetBtn) resetBtn.addEventListener("click", reset);
  if (audioBtn) audioBtn.addEventListener("click", () => {
    audioOn = !audioOn;
    audioBtn.textContent = dict()[audioOn ? "tools.timer.audio.on" : "tools.timer.audio.off"] || (audioOn ? "Sound on" : "Sound off");
  });
  modeBtns.forEach(b => b.addEventListener("click", () => {
    mode = b.getAttribute("data-timer-mode");
    modeBtns.forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
  }));

  // IntersectionObserver pause when off-screen
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting && running) pause();
      });
    }, { threshold: 0.1 });
    io.observe(stage);
  }

  // Initial
  updateVisual();
})();
