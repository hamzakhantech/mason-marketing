/**
 * MASON marketing motion shell: Lenis smooth scroll, optional home intro,
 * ScrollTrigger sync. Respects prefers-reduced-motion (no Lenis, no intro).
 */
(function () {
  'use strict';

  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  function reducedMotion() {
    return mqReduce.matches;
  }

  function showMotionChrome() {
    document.documentElement.classList.add('mason-motion-reveal');
  }

  /* URL is the source of truth here: body[data-motion-home] is set later by React. */
  var path = (window.location && window.location.pathname) || '';
  var isHome = path === '/' || path === '';
  try {
    if (document.body) document.body.setAttribute('data-motion-home', isHome ? 'true' : 'false');
  } catch (eSync) {}

  /* --- Lenis (ScrollTrigger pages call registerPlugin in React; we only nudge updates) */
  if (!reducedMotion() && typeof window.Lenis === 'function') {
    try {
      var lenis = new window.Lenis({
        duration: 1.12,
        easing: function (t) {
          return 1 - Math.pow(1 - t, 3);
        },
        smoothWheel: true,
        touchMultiplier: 1.65,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      lenis.on('scroll', function () {
        if (window.ScrollTrigger) window.ScrollTrigger.update();
      });

      window.__MASON_LENIS = lenis;
      document.documentElement.classList.add('lenis', 'lenis-smooth');
    } catch (eLenis) {
      try {
        console.warn('[MASON] Lenis failed to initialize; continuing without smooth scroll.', eLenis);
      } catch (eLog) {}
    }
  }

  /* --- Home-only cinematic intro ---------------------------------------- */

  if (isHome && !reducedMotion()) {
    try {
      document.documentElement.classList.add('mason-intro-lock');

      var intro = document.createElement('div');
      intro.className = 'mason-page-intro';
      intro.setAttribute('aria-hidden', 'true');
      intro.innerHTML =
        '<div class="mason-page-intro__backdrop"></div>' +
        '<div class="mason-page-intro__stage">' +
        '<div class="mason-page-intro__mark-wrap">' +
        '<img class="mason-page-intro__mark" src="/assets/mason_horizontal_dark.png" alt="" width="200" height="36" decoding="async" />' +
        '</div>' +
        '<div class="mason-page-intro__line" aria-hidden="true"></div>' +
        '</div>';

      document.body.appendChild(intro);

      requestAnimationFrame(function () {
        intro.classList.add('is-visible');
      });

      window.setTimeout(function () {
        intro.classList.add('is-exiting');
        document.documentElement.classList.remove('mason-intro-lock');
        showMotionChrome();
        try {
          window.dispatchEvent(new CustomEvent('mason-motion-shell-ready'));
        } catch (e3) {}
      }, 1450);

      window.setTimeout(function () {
        if (intro.parentNode) intro.parentNode.removeChild(intro);
      }, 2150);
    } catch (eIntro) {
      try {
        document.documentElement.classList.remove('mason-intro-lock');
      } catch (eIntro2) {}
      showMotionChrome();
      try {
        window.dispatchEvent(new CustomEvent('mason-motion-shell-ready'));
      } catch (e3b) {}
    }
  } else {
    showMotionChrome();
    try {
      window.dispatchEvent(new CustomEvent('mason-motion-shell-ready'));
    } catch (e4) {}
  }
})();
