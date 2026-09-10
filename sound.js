/* UXbrain completion sounds — synthesized with WebAudio (no audio files, works
   offline). Watches the app's completion counts after each render and plays a
   soft cue when a lesson, day, or chapter is newly completed. Respects the
   reader's "reduce motion" preference as a proxy for "calmer" and is unlocked
   on first user gesture (autoplay policy). */
(function () {
  var ctx = null, muted = false;
  try { muted = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (_) {}

  function ensure() {
    if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return null; } }
    if (ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, ensure, { passive: true });
  });

  function tone(freq, start, dur, peak, type) {
    var c = ensure(); if (!c) return;
    var t0 = c.currentTime + start;
    var osc = c.createOscillator(), g = c.createGain();
    osc.type = type || 'sine'; osc.frequency.value = freq;
    osc.connect(g); g.connect(c.destination);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.start(t0); osc.stop(t0 + dur + 0.05);
  }

  var SND = {
    tick: function () { tone(880, 0, 0.13, 0.10, 'triangle'); tone(1320, 0.03, 0.16, 0.06, 'sine'); },
    day: function () { [523.25, 659.25, 783.99].forEach(function (f, i) { tone(f, i * 0.045, 0.5, 0.12, 'sine'); }); },
    chapter: function () {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
        tone(f, i * 0.11, 0.55, 0.15, 'sine');
        tone(f * 2, i * 0.11, 0.4, 0.04, 'sine');
      });
    }
  };
  window.__uxSound = SND;

  var prev = null;
  document.addEventListener('dos:rendered', function () {
    if (muted) return;
    var app = window.__dos;
    if (!app || typeof app.completionSummary !== 'function') return;
    var cur; try { cur = app.completionSummary(); } catch (e) { return; }
    if (prev) {
      if (cur.chapters > prev.chapters) SND.chapter();
      else if (cur.days > prev.days) SND.day();
      else if (cur.topics > prev.topics) SND.tick();
    }
    prev = cur;
  });
})();
