/* UXbrain interactivity layer. The app replaces #dos-root.innerHTML on every state
   change, so per-element listeners would die on re-render. Everything here is fully
   DELEGATED on document (one set of listeners) + CSS custom properties, so it works
   on every card/button across the whole site and survives re-renders. Fine-pointer
   only; disabled under reduced-motion. */
(function () {
  var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || reduce) return;

  var TILT = '.dos-card, .dos-card-16, .stat-tile, [data-dos-cardlink], .dos-flip-card';
  var MAG = '.dos-btn-primary';
  var MAX_TILT = 5;   // degrees
  var MAG_PULL = 7;   // px

  var last = null, ticking = false;
  var tiltEl = null, magEl = null;

  function clearTilt() {
    if (!tiltEl) return;
    tiltEl.classList.remove('fx-tilt');
    tiltEl.style.removeProperty('--rx'); tiltEl.style.removeProperty('--ry');
    tiltEl = null;
  }
  function clearMag() {
    if (!magEl) return;
    magEl.style.transform = ''; magEl = null;
  }

  function process() {
    ticking = false;
    var e = last; if (!e) return;
    var t = e.target;
    var card = t.closest ? t.closest(TILT) : null;
    var btn = t.closest ? t.closest(MAG) : null;

    // --- 3D tilt + spotlight ---
    if (card !== tiltEl) { clearTilt(); tiltEl = card; if (card) card.classList.add('fx-tilt'); }
    if (card) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', (px * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (py * 100).toFixed(1) + '%');
      card.style.setProperty('--rx', ((0.5 - py) * MAX_TILT).toFixed(2) + 'deg');
      card.style.setProperty('--ry', ((px - 0.5) * MAX_TILT).toFixed(2) + 'deg');
    }

    // --- magnetic primary buttons ---
    if (btn !== magEl) { clearMag(); magEl = btn; }
    if (btn) {
      var br = btn.getBoundingClientRect();
      var dx = (e.clientX - (br.left + br.width / 2)) / br.width;
      var dy = (e.clientY - (br.top + br.height / 2)) / br.height;
      btn.style.transform = 'translate(' + (dx * MAG_PULL).toFixed(1) + 'px,' + (dy * MAG_PULL - 2).toFixed(1) + 'px)';
    }
  }

  document.addEventListener('pointermove', function (e) {
    last = e;
    if (!ticking) { ticking = true; requestAnimationFrame(process); }
  }, { passive: true });

  // reset when the pointer leaves the window entirely
  document.addEventListener('pointerleave', function () { clearTilt(); clearMag(); }, { passive: true });
  window.addEventListener('blur', function () { clearTilt(); clearMag(); });
})();
