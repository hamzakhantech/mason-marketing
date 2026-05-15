/**
 * MASON custom cursor — desktop / fine pointer only.
 * Accent #f0a84a, rAF-smoothed follower. Hides for touch & reduced motion.
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

  function shouldEnable() {
    if (reducedMotion() || coarsePointer()) return false;
    return window.innerWidth > 900;
  }

  if (!shouldEnable()) return;

  var root = document.documentElement;
  root.classList.add('mason-cursor-on');

  var wrap = document.createElement('div');
  wrap.className = 'mason-cursor';
  wrap.setAttribute('aria-hidden', 'true');
  wrap.innerHTML =
    '<div class="mason-cursor__ring"></div><div class="mason-cursor__dot"></div>';
  document.body.appendChild(wrap);

  var ring = wrap.querySelector('.mason-cursor__ring');
  var dot = wrap.querySelector('.mason-cursor__dot');

  var ringX = window.innerWidth * 0.5;
  var ringY = window.innerHeight * 0.5;
  var dotX = ringX;
  var dotY = ringY;
  var targetX = ringX;
  var targetY = ringY;

  var pointerSelector = [
    'a[href]',
    'button:not(:disabled)',
    '[role="button"]',
    'input[type="submit"]',
    'input[type="button"]',
    '.btn',
    '.module',
    '.pillar',
    '.theme-toggle',
    '.nav-hamburger',
    '.personas__tab',
    '.personas__panel',
    '.cnc',
    '.case-card',
    '.surface',
    '.post',
    '.nav-drop__btn',
    '.header-link',
    '.site-nav a',
    '.nav-link',
    '.mode-toggle',
    'label',
    'summary',
  ].join(',');

  function pickHover(clientX, clientY) {
    var el = document.elementFromPoint(clientX, clientY);
    if (!el || el.closest('.mason-cursor')) return { mode: 'none' };
    if (el.closest('iframe')) return { mode: 'none' };
    var n = el.closest(pointerSelector);
    if (!n) return { mode: 'none' };
    var tag = n.tagName;
    if (tag === 'TEXTAREA' || tag === 'SELECT') return { mode: 'text' };
    if (tag === 'INPUT') {
      var t = n.getAttribute('type') || 'text';
      if (t === 'text' || t === 'email' || t === 'password' || t === 'search' || t === 'url' || t === 'tel' || t === 'number') {
        return { mode: 'text' };
      }
    }
    return { mode: 'pointer' };
  }

  window.addEventListener(
    'mousemove',
    function (e) {
      targetX = e.clientX;
      targetY = e.clientY;
      var h = pickHover(targetX, targetY);
      wrap.classList.toggle('is-pointer', h.mode === 'pointer');
    },
    { passive: true }
  );

  window.addEventListener('mousedown', function () {
    wrap.classList.add('is-down');
  });
  window.addEventListener('mouseup', function () {
    wrap.classList.remove('is-down');
  });

  document.addEventListener(
    'mouseleave',
    function (e) {
      if (e.target === document.documentElement) wrap.style.opacity = '0';
    },
    true
  );
  document.addEventListener(
    'mouseenter',
    function (e) {
      if (e.target === document.documentElement) wrap.style.opacity = '1';
    },
    true
  );

  function tick() {
    ringX += (targetX - ringX) * 0.14;
    ringY += (targetY - ringY) * 0.14;
    dotX += (targetX - dotX) * 0.38;
    dotY += (targetY - dotY) * 0.38;
    var sx = ringX.toFixed(2);
    var sy = ringY.toFixed(2);
    var dx = dotX.toFixed(2);
    var dy = dotY.toFixed(2);
    ring.style.transform = 'translate3d(' + sx + 'px,' + sy + 'px,0)';
    dot.style.transform = 'translate3d(' + dx + 'px,' + dy + 'px,0)';
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  window.addEventListener('resize', function () {
    if (!shouldEnable()) {
      root.classList.remove('mason-cursor-on');
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    }
  });
})();
