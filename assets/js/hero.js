/* hero */
(function () {
  'use strict';

  const heroCanvas = document.getElementById('hero-canvas');
  if (!heroCanvas) return;

  const heroCtx = heroCanvas.getContext('2d');
  if (!heroCtx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  let heroW = 0;
  let heroH = 0;
  let phase = 0;
  let rafId = null;
  const pointerOffset = { x: 0, y: 0 };

  function resizeHero() {
    const rect = heroCanvas.parentElement.getBoundingClientRect();
    heroW = rect.width;
    heroH = rect.height;
    heroCanvas.width = heroW * dpr;
    heroCanvas.height = heroH * dpr;
    heroCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (reduceMotion.matches) drawFrame();
  }

  function drawFrame() {
    heroCtx.clearRect(0, 0, heroW, heroH);

    const cy = heroH * 0.52;
    const amp = Math.min(heroH * 0.22, 130);

    // Subtle primary harmonic wave (cobalt)
    heroCtx.beginPath();
    heroCtx.strokeStyle = 'rgba(55, 48, 170, 0.75)';
    heroCtx.lineWidth = 1.5;
    for (let x = 0; x <= heroW; x += 4) {
      const t = (x / heroW) * Math.PI * 3;
      const y = cy + Math.sin(t + phase + pointerOffset.x) * amp * Math.cos(t * 0.5 - phase * 0.4);
      if (x === 0) heroCtx.moveTo(x, y);
      else heroCtx.lineTo(x, y);
    }
    heroCtx.stroke();

    // Delicate secondary envelope curve (gold)
    heroCtx.beginPath();
    heroCtx.strokeStyle = 'rgba(255, 200, 92, 0.28)';
    heroCtx.lineWidth = 1.2;
    for (let x = 0; x <= heroW; x += 5) {
      const t = (x / heroW) * Math.PI * 2.5;
      const y = cy + Math.cos(t - phase * 0.7 + pointerOffset.y) * (amp * 0.78);
      if (x === 0) heroCtx.moveTo(x, y);
      else heroCtx.lineTo(x, y);
    }
    heroCtx.stroke();

    // Thin coral accent curve
    heroCtx.beginPath();
    heroCtx.strokeStyle = 'rgba(255, 101, 63, 0.24)';
    heroCtx.lineWidth = 1.1;
    for (let x = 0; x <= heroW; x += 6) {
      const t = (x / heroW) * Math.PI * 4;
      const y = cy + Math.sin(t * 0.75 + phase * 0.5) * (amp * 0.55);
      if (x === 0) heroCtx.moveTo(x, y);
      else heroCtx.lineTo(x, y);
    }
    heroCtx.stroke();
  }

  function tick() {
    drawFrame();
    phase += 0.006;
    rafId = requestAnimationFrame(tick);
  }

  function start() {
    if (rafId !== null) return;
    if (reduceMotion.matches || document.visibilityState === 'hidden') {
      drawFrame();
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function stop() {
    if (rafId === null) return;
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  function handleMotionPreference() {
    if (reduceMotion.matches) {
      stop();
      drawFrame();
    } else {
      start();
    }
  }

  window.addEventListener('mousemove', (e) => {
    if (reduceMotion.matches) return;
    pointerOffset.x = ((e.clientX / window.innerWidth) - 0.5) * 0.4;
    pointerOffset.y = ((e.clientY / window.innerHeight) - 0.5) * 0.4;
  }, { passive: true });

  window.addEventListener('resize', resizeHero);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') stop();
    else start();
  });
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', handleMotionPreference);

  resizeHero();
  start();
})();
