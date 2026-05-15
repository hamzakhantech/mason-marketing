/**
 * MASON magnetic hover + glow zones + light parallax + line reveals.
 * Desktop only; respects reduced motion & coarse pointer.
 */
(function () {
  'use strict';

  function reducedMotion() {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      return false;
    }
  }

  function coarsePointer() {
    try {
      return window.matchMedia('(pointer: coarse)').matches;
    } catch (e2) {
      return 'ontouchstart' in window;
    }
  }

  function desktopMotion() {
    return !reducedMotion() && !coarsePointer() && window.innerWidth > 900;
  }

  var magneticSelector =
    '.btn-primary, .btn-ghost, .btn.primary, .btn.ghost, .theme-toggle, .site-nav--desktop a, .nav-drop__btn, .personas__panel, .cnc, .surface';

  function bindMagnetic(el) {
    if (el.dataset.masonMagneticBound) return;
    el.dataset.masonMagneticBound = '1';
    var isBtn =
      el.classList.contains('btn-primary') ||
      el.classList.contains('btn-ghost') ||
      (el.classList.contains('btn') &&
        (el.classList.contains('primary') || el.classList.contains('ghost')));
    var strength = isBtn ? 0.22 : 0.12;

    el.addEventListener(
      'mousemove',
      function (e) {
        if (!desktopMotion()) return;
        var r = el.getBoundingClientRect();
        var cx = r.left + r.width * 0.5;
        var cy = r.top + r.height * 0.5;
        var mx = (e.clientX - cx) * strength;
        var my = (e.clientY - cy) * strength;
        var lift = isBtn ? -1.5 : 0;
        el.style.transform = 'translate3d(' + mx.toFixed(2) + 'px,' + (my + lift).toFixed(2) + 'px,0)';
      },
      { passive: true }
    );

    el.addEventListener(
      'mouseleave',
      function () {
        el.style.transform = '';
      },
      { passive: true }
    );
  }

  function bindGlowZone(el) {
    if (el.dataset.masonGlowBound) return;
    el.dataset.masonGlowBound = '1';
    el.addEventListener(
      'mousemove',
      function (e) {
        if (!desktopMotion()) return;
        var r = el.getBoundingClientRect();
        var px = ((e.clientX - r.left) / Math.max(r.width, 1)) * 100;
        var py = ((e.clientY - r.top) / Math.max(r.height, 1)) * 100;
        el.style.setProperty('--gx', String(Math.max(0, Math.min(100, px))));
        el.style.setProperty('--gy', String(Math.max(0, Math.min(100, py))));
      },
      { passive: true }
    );
  }

  function scanMagnetic() {
    if (!desktopMotion()) return;
    document.querySelectorAll(magneticSelector).forEach(bindMagnetic);
    document.querySelectorAll('.mason-glow-zone').forEach(bindGlowZone);
  }

  var root = document.documentElement;

  function parallaxTick() {
    if (reducedMotion()) return;
    var y = window.scrollY || window.pageYOffset || 0;
    root.style.setProperty('--mason-scroll-y', y + 'px');
    var slow = document.querySelectorAll('.mason-parallax-slow');
    for (var i = 0; i < slow.length; i++) {
      var el = slow[i];
      var r = el.getBoundingClientRect();
      var p = Math.min(42, Math.max(-42, (window.innerHeight * 0.5 - (r.top + r.height * 0.5)) * 0.04));
      el.style.setProperty('--py', p.toFixed(2) + 'px');
    }
  }

  function initLines() {
    if (reducedMotion()) {
      document.querySelectorAll('.mason-line-reveal').forEach(function (el) {
        el.classList.add('is-line-in');
      });
      return;
    }
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.mason-line-reveal').forEach(function (el) {
        el.classList.add('is-line-in');
      });
      return;
    }
    if (!initLines._io) {
      initLines._io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add('is-line-in');
              initLines._io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
      );
    }
    var io = initLines._io;
    document.querySelectorAll('.mason-line-reveal:not([data-mason-line-obs])').forEach(function (el) {
      el.setAttribute('data-mason-line-obs', '1');
      io.observe(el);
    });
  }

  function boot() {
    scanMagnetic();
    initLines();
    window.addEventListener('scroll', parallaxTick, { passive: true });
    parallaxTick();

    var rootEl = document.getElementById('root');
    if (rootEl && 'MutationObserver' in window) {
      var t = null;
      var mo = new MutationObserver(function () {
        clearTimeout(t);
        t = setTimeout(function () {
          scanMagnetic();
          initLines();
        }, 120);
      });
      mo.observe(rootEl, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    setTimeout(boot, 0);
  }

  window.addEventListener('load', function () {
    setTimeout(function () {
      scanMagnetic();
      initLines();
    }, 200);
  });
})();
