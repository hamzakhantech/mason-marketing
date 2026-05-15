/**
 * index.html — scroll reveals after React paints (.reveal).
 */
(function () {
  'use strict';

  function reduced() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function initReveals() {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return false;
    if (reduced()) {
      els.forEach(function (el) {
        el.classList.add('in');
      });
      return true;
    }
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) {
        el.classList.add('in');
      });
      return true;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
    return true;
  }

  function tick() {
    if (initReveals()) return;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
