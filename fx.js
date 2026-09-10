/* UXbrain interactivity layer. Everything is DELEGATED on document/window + driven by
   the 'dos:rendered' event the app fires after each render, so it survives the app's
   innerHTML re-renders. Provides: cursor 3D-tilt + spotlight on cards, magnetic primary
   buttons, scroll-reveal (re-armed each render without flashing in-view content),
   cinematic section transitions, and live reading progress on the topic reader. */
(function () {
  var fine = window.matchMedia && matchMedia('(hover: hover) and (pointer: fine)').matches;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- cursor 3D tilt + spotlight + magnetic buttons ------------- */
  if (fine && !reduce) {
    // LEAF = a single actionable tile (the whole thing is one click target) → 3D tilt.
    // CONTAINER = a content card that holds its own controls → calm glow, never tilt
    // (tilting a container makes its buttons feel like they shift under the cursor).
    var LEAF = '[data-dos-cardlink], .stat-tile.clickable, .dos-flip-card, .dos-lesson-row, .dos-continue';
    var CONTAINER = '.dos-card, .dos-card-16, .stat-tile';
    var MAG = '.dos-btn-primary';
    var last = null, ticking = false, tiltEl = null, glowEl = null, magEl = null;
    var setVars = function (el, e) { var r = el.getBoundingClientRect(); el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%'); el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%'); return r; };
    var clearTilt = function () { if (tiltEl) { tiltEl.classList.remove('fx-tilt'); tiltEl.style.removeProperty('--rx'); tiltEl.style.removeProperty('--ry'); tiltEl = null; } };
    var clearGlow = function () { if (glowEl) { glowEl.classList.remove('fx-glow'); glowEl = null; } };
    var clearMag = function () { if (magEl) { magEl.style.transform = ''; magEl = null; } };
    var proc = function () {
      ticking = false; var e = last; if (!e || !e.target.closest) return;
      var leaf = e.target.closest(LEAF);
      var glow = leaf ? null : e.target.closest(CONTAINER);   // tilt the tile, else glow the container
      var btn = e.target.closest(MAG);
      if (leaf !== tiltEl) { clearTilt(); tiltEl = leaf; if (leaf) leaf.classList.add('fx-tilt'); }
      if (leaf) { var r = setVars(leaf, e); leaf.style.setProperty('--rx', ((0.5 - (e.clientY - r.top) / r.height) * 5).toFixed(2) + 'deg'); leaf.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 5).toFixed(2) + 'deg'); }
      if (glow !== glowEl) { clearGlow(); glowEl = glow; if (glow) glow.classList.add('fx-glow'); }
      if (glow) setVars(glow, e);
      if (btn !== magEl) { clearMag(); magEl = btn; }
      if (btn) { var b = btn.getBoundingClientRect(); btn.style.transform = 'translate(' + ((e.clientX - (b.left + b.width / 2)) / b.width * 6).toFixed(1) + 'px,' + ((e.clientY - (b.top + b.height / 2)) / b.height * 6 - 2).toFixed(1) + 'px)'; }
    };
    document.addEventListener('pointermove', function (e) { last = e; if (!ticking) { ticking = true; requestAnimationFrame(proc); } }, { passive: true });
    document.addEventListener('pointerleave', function () { clearTilt(); clearGlow(); clearMag(); }, { passive: true });
    window.addEventListener('blur', function () { clearTilt(); clearGlow(); clearMag(); });
  }

  /* ---------------- scroll-reveal (re-armed each render) ---------------------- */
  var io = null;
  function armReveal() {
    if (reduce) return;
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('dos-in'); io.unobserve(en.target); } });
    }, { threshold: 0.06, rootMargin: '0px 0px -8% 0px' });
    var main = document.querySelector('main.dos-main');
    if (!main) return;
    var els = main.querySelectorAll('.dos-card, .dos-card-16, [data-dos-cardlink], .stat-tile');
    var vh = window.innerHeight, groupIdx = 0, lastParent = null;
    els.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      if (top < vh * 0.9) return;            // already in view → leave visible, no fade
      // stagger by position within the same parent row/grid
      if (el.parentNode !== lastParent) { lastParent = el.parentNode; groupIdx = 0; }
      el.style.setProperty('--rvd', Math.min(groupIdx * 0.06, 0.3) + 's');
      groupIdx++;
      el.classList.add('dos-reveal');
      io.observe(el);
    });
  }

  /* ---------------- cinematic section transition ----------------------------- */
  var lastSec = null, lastTopic = null, first = true;
  function sectionTransition(sec, topic) {
    if (reduce) { lastSec = sec; lastTopic = topic; first = false; return; }
    var changed = !first && (sec !== lastSec || topic !== lastTopic);
    lastSec = sec; lastTopic = topic; first = false;
    if (!changed) return;
    var main = document.querySelector('main.dos-main');
    if (!main) return;
    main.classList.remove('dos-sec-enter'); void main.offsetWidth; // restart animation
    main.classList.add('dos-sec-enter');
    setTimeout(function () { main.classList.remove('dos-sec-enter'); }, 700);
  }

  document.addEventListener('dos:rendered', function (e) {
    var d = (e && e.detail) || {};
    sectionTransition(d.sec, d.topic);
    // wait a frame so layout is settled before measuring positions
    requestAnimationFrame(function () { requestAnimationFrame(armReveal); });
  });

  /* ---------------- live reading progress on the topic reader ---------------- */
  var rTick = false;
  function readerProgress() {
    rTick = false;
    var article = document.querySelector('.dos-reader');
    if (!article) return;
    var bar = article.querySelector('.dos-topic-progress > div');
    if (!bar) return;
    var total = article.offsetHeight - window.innerHeight;
    var scrolled = -article.getBoundingClientRect().top;
    var pct = total > 0 ? Math.max(0, Math.min(100, (scrolled / total) * 100)) : 0;
    bar.style.width = pct.toFixed(1) + '%';
  }
  window.addEventListener('scroll', function () { if (!rTick) { rTick = true; requestAnimationFrame(readerProgress); } }, { passive: true });
})();
