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
    // Only a genuine, single-click-target element gets any hover feedback (tilt +
    // spotlight). A card that merely *contains* controls stays inert — its buttons/
    // rows already carry their own hover state, so the ambient wrapper must not.
    var LEAF = '[data-dos-cardlink], .stat-tile.clickable, .dos-flip-card, .dos-lesson-row, .dos-continue, .dos-chapter-card';
    var MAG = '.dos-btn-primary';
    var last = null, ticking = false, tiltEl = null, magEl = null;
    var setVars = function (el, e) { var r = el.getBoundingClientRect(); el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%'); el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%'); return r; };
    var clearTilt = function () { if (tiltEl) { tiltEl.classList.remove('fx-tilt'); tiltEl.style.removeProperty('--rx'); tiltEl.style.removeProperty('--ry'); tiltEl = null; } };
    var clearMag = function () { if (magEl) { magEl.style.transform = ''; magEl = null; } };
    var proc = function () {
      ticking = false; var e = last; if (!e || !e.target.closest) return;
      var leaf = e.target.closest(LEAF);
      var btn = e.target.closest(MAG);
      if (leaf !== tiltEl) { clearTilt(); tiltEl = leaf; if (leaf) leaf.classList.add('fx-tilt'); }
      if (leaf) { var r = setVars(leaf, e); leaf.style.setProperty('--rx', ((0.5 - (e.clientY - r.top) / r.height) * 5).toFixed(2) + 'deg'); leaf.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * 5).toFixed(2) + 'deg'); }
      if (btn !== magEl) { clearMag(); magEl = btn; }
      if (btn) { var b = btn.getBoundingClientRect(); btn.style.transform = 'translate(' + ((e.clientX - (b.left + b.width / 2)) / b.width * 6).toFixed(1) + 'px,' + ((e.clientY - (b.top + b.height / 2)) / b.height * 6 - 2).toFixed(1) + 'px)'; }
    };
    document.addEventListener('pointermove', function (e) { last = e; if (!ticking) { ticking = true; requestAnimationFrame(proc); } }, { passive: true });
    document.addEventListener('pointerleave', function () { clearTilt(); clearMag(); }, { passive: true });
    window.addEventListener('blur', function () { clearTilt(); clearMag(); });
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
    // reader: reveal content blocks below the fold (skip rail/progress/breadcrumb/header)
    var reader = main.querySelector('.dos-reader');
    if (reader) {
      var kids = reader.children;
      for (var i = 4; i < kids.length; i++) {
        var k = kids[i];
        if (k.getBoundingClientRect().top < vh * 0.92) continue;
        k.classList.add('dos-reveal');
        io.observe(k);
      }
    }
  }

  /* ---------------- cinematic section transition ----------------------------- */
  var lastSec = null, lastTopic = null, first = true;
  function sectionTransition(sec, topic) {
    // When the View Transitions API is driving page morphs, skip the CSS fallback.
    if (reduce || document.startViewTransition) { lastSec = sec; lastTopic = topic; first = false; return; }
    var changed = !first && (sec !== lastSec || topic !== lastTopic);
    lastSec = sec; lastTopic = topic; first = false;
    if (!changed) return;
    var main = document.querySelector('main.dos-main');
    if (!main) return;
    main.classList.remove('dos-sec-enter'); void main.offsetWidth; // restart animation
    main.classList.add('dos-sec-enter');
    setTimeout(function () { main.classList.remove('dos-sec-enter'); }, 700);
  }

  // count-up animation for [data-count] numbers, on entering a section
  var countLastSec = null;
  function runCountUp() {
    document.querySelectorAll('main [data-count]').forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10) || 0;
      if (target <= 0) { el.textContent = target; return; }
      var dur = 950, t0 = performance.now();
      (function step(now) {
        var p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }

  document.addEventListener('dos:rendered', function (e) {
    var d = (e && e.detail) || {};
    sectionTransition(d.sec, d.topic);
    if (!reduce && d.sec !== countLastSec) { requestAnimationFrame(runCountUp); }
    countLastSec = d.sec;
    // wait a frame so layout is settled before measuring positions
    requestAnimationFrame(function () { requestAnimationFrame(armReveal); });
  });

  /* ---------------- aurora parallax (mouse + scroll + gentle drift) ---------- */
  if (!reduce) {
    var rootEl = document.getElementById('dos-root');
    var atx = 0, aty = 0, amx = 0, amy = 0, asc = 0;
    window.addEventListener('pointermove', function (e) { atx = e.clientX / window.innerWidth - 0.5; aty = e.clientY / window.innerHeight - 0.5; }, { passive: true });
    window.addEventListener('scroll', function () { asc = window.scrollY || 0; }, { passive: true });
    (function auroraLoop() {
      amx += (atx - amx) * 0.045; amy += (aty - amy) * 0.045;
      var t = performance.now() / 1000;
      var x = amx * 32 + Math.sin(t * 0.15) * 14;
      var y = amy * 26 + Math.cos(t * 0.12) * 10 - asc * 0.03;
      if (rootEl) { rootEl.style.setProperty('--aurx', x.toFixed(1) + 'px'); rootEl.style.setProperty('--aury', y.toFixed(1) + 'px'); }
      requestAnimationFrame(auroraLoop);
    })();
  }

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
