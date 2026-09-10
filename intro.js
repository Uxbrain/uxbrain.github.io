/* UXbrain immersive intro — a living particle "brain" cloud + kinetic type that
   plays once per session, then dissolves into the app. Progressive enhancement:
   the overlay content is real HTML and works with zero JS; Three.js (if it loads)
   adds the WebGL particle field; all reveal/exit motion is pure CSS so nothing
   here depends on an animation library. Respects reduced-motion. */
(function () {
  var overlay = document.getElementById('ux-intro');
  if (!overlay) return; // returning visitor — the inline guard already removed it

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('ux-intro-lock');

  // --- kinetic title: wrap each letter for staggered CSS reveal ---
  var title = overlay.querySelector('.ux-intro-title');
  if (title && !title.dataset.split) {
    var text = title.textContent;
    title.textContent = '';
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement('span');
      span.textContent = text[i];
      span.style.setProperty('--i', i);
      title.appendChild(span);
    }
    title.dataset.split = '1';
  }

  // --- WebGL particle brain-cloud (optional enhancement) ---
  var three = null;
  function initWebGL() {
    if (reduce || typeof THREE === 'undefined') return;
    var canvas = document.getElementById('ux-intro-canvas');
    if (!canvas) return;
    try {
      var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 15;

      var COUNT = window.innerWidth < 700 ? 1600 : 2800;
      var positions = new Float32Array(COUNT * 3);
      var R = 6.2;
      // fibonacci sphere + inward jitter → a soft neural globe
      for (var p = 0; p < COUNT; p++) {
        var t = p / COUNT;
        var inc = Math.acos(1 - 2 * t);
        var az = Math.PI * (1 + Math.sqrt(5)) * p;
        var rr = R * (0.75 + Math.random() * 0.28);
        positions[p * 3] = rr * Math.sin(inc) * Math.cos(az);
        positions[p * 3 + 1] = rr * Math.sin(inc) * Math.sin(az);
        positions[p * 3 + 2] = rr * Math.cos(inc);
      }
      var geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      var mat = new THREE.PointsMaterial({
        size: 0.08, color: 0xcdd6ea, transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
      });
      var points = new THREE.Points(geo, mat);
      scene.add(points);

      // a second, larger faint shell for depth
      var mat2 = new THREE.PointsMaterial({ size: 0.05, color: 0x9db0d6, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false });
      var points2 = new THREE.Points(geo, mat2);
      points2.scale.setScalar(1.35);
      scene.add(points2);

      var mx = 0, my = 0, raf = 0, exiting = false, exitK = 1;
      window.addEventListener('mousemove', function (e) {
        mx = (e.clientX / window.innerWidth - 0.5);
        my = (e.clientY / window.innerHeight - 0.5);
      }, { passive: true });

      function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      window.addEventListener('resize', onResize);

      var clock = new THREE.Clock();
      function render() {
        raf = requestAnimationFrame(render);
        var el = clock.getElapsedTime();
        points.rotation.y = el * 0.09 + mx * 0.6;
        points.rotation.x = my * 0.4 + Math.sin(el * 0.3) * 0.05;
        points2.rotation.y = -el * 0.05 - mx * 0.4;
        points2.rotation.x = my * 0.3;
        var breathe = 1 + Math.sin(el * 0.8) * 0.02;
        points.scale.setScalar(breathe * exitK);
        points2.scale.setScalar(1.35 * breathe * exitK);
        if (exiting) { exitK += (14 - exitK) * 0.06; mat.opacity *= 0.92; mat2.opacity *= 0.92; }
        renderer.render(scene, camera);
      }
      render();

      three = {
        startExit: function () { exiting = true; },
        dispose: function () {
          cancelAnimationFrame(raf);
          window.removeEventListener('resize', onResize);
          geo.dispose(); mat.dispose(); mat2.dispose(); renderer.dispose();
        }
      };
    } catch (err) { /* WebGL unavailable — the CSS intro stands on its own */ }
  }

  // Three.js is loaded with defer and may land just after this file; wait briefly.
  if (typeof THREE !== 'undefined') initWebGL();
  else { var tries = 0, iv = setInterval(function () { if (typeof THREE !== 'undefined') { clearInterval(iv); initWebGL(); } else if (++tries > 40) clearInterval(iv); }, 50); }

  // --- exit ---
  var done = false;
  function enter() {
    if (done) return; done = true;
    if (three) three.startExit();
    overlay.classList.add('exit');
    try { sessionStorage.setItem('uxbrain.intro.v1', '1'); } catch (_) {}
    document.body.classList.remove('ux-intro-lock');
    var cleanup = function () {
      if (three) three.dispose();
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    };
    overlay.addEventListener('transitionend', function (e) { if (e.target === overlay && e.propertyName === 'opacity') cleanup(); });
    setTimeout(cleanup, 1600); // fallback if transitionend doesn't fire
  }

  var enterBtn = document.getElementById('ux-intro-enter');
  if (enterBtn) enterBtn.addEventListener('click', function (e) { e.stopPropagation(); enter(); });
  overlay.addEventListener('click', enter);
  window.addEventListener('keydown', function (e) { if (!done && (e.key === 'Enter' || e.key === 'Escape' || e.key === ' ')) enter(); });
})();
