/**
 * Alef-style in-card hover bubble: black disk + white diagonal arrow, follows pointer.
 * Targets: .cursor-card-hover, .hover-arrow-cursor, .magnetic-click-card (must be <a> or <button>).
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

  function shouldRun() {
    if (reducedMotion() || coarsePointer()) return false;
    return window.innerWidth > 900;
  }

  if (!shouldRun()) return;

  var SEL = '.cursor-card-hover, .hover-arrow-cursor, .magnetic-click-card';

  /** Hide global .mason-cursor (orange ring/dot) while in-card arrow bubble is active */
  var bodyCardHoverDepth = 0;
  function setBodyCardHovering(delta) {
    bodyCardHoverDepth += delta;
    if (bodyCardHoverDepth < 0) bodyCardHoverDepth = 0;
    document.body.classList.toggle('is-card-hovering', bodyCardHoverDepth > 0);
  }

  function buildBubble() {
    var bubble = document.createElement('div');
    bubble.className = 'mason-hover-arrow-bubble';
    bubble.setAttribute('aria-hidden', 'true');
    bubble.innerHTML =
      '<div class="mason-hover-arrow-bubble__disk">' +
      '<span class="mason-hover-arrow-bubble__arrow">' +
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path d="M7 17L17 7M17 7H10M17 7V14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</svg></span></div>';
    return bubble;
  }

  function bind(el) {
    if (el.dataset.masonHoverArrowBound) return;
    var tag = el.tagName;
    if (tag !== 'A' && tag !== 'BUTTON') return;
    if (tag === 'A' && !el.getAttribute('href')) return;

    el.dataset.masonHoverArrowBound = '1';
    var bubble = buildBubble();
    el.appendChild(bubble);

    var lx = 0;
    var ly = 0;
    var tx = 0;
    var ty = 0;
    var raf = null;
    var active = false;
    var lastTs = 0;

    /** Frame-rate aware smoothing: higher dt → catch up without overshoot jitter */
    function smoothAlpha(dtMs) {
      var t = Math.min(56, Math.max(8, dtMs));
      return 1 - Math.pow(0.78, t / 16.67);
    }

    function tick(ts) {
      if (!active) {
        raf = null;
        lastTs = 0;
        return;
      }
      var dt = lastTs ? Math.min(56, Math.max(8, ts - lastTs)) : 16.67;
      lastTs = ts;
      var a = smoothAlpha(dt);
      lx += (tx - lx) * a;
      ly += (ty - ly) * a;
      bubble.style.transform =
        'translate3d(' + lx.toFixed(2) + 'px,' + ly.toFixed(2) + 'px,0) translate(-50%, -50%)';
      raf = requestAnimationFrame(tick);
    }

    function startRaf() {
      if (!raf) {
        lastTs = 0;
        raf = requestAnimationFrame(tick);
      }
    }

    function setCardTiltVars(e) {
      var r = el.getBoundingClientRect();
      var nx = (e.clientX - r.left) / Math.max(1, r.width);
      var ny = (e.clientY - r.top) / Math.max(1, r.height);
      el.style.setProperty('--mason-cursor-mx', (nx * 2 - 1).toFixed(4));
      el.style.setProperty('--mason-cursor-my', (ny * 2 - 1).toFixed(4));
    }

    function clearCardTiltVars() {
      el.style.removeProperty('--mason-cursor-mx');
      el.style.removeProperty('--mason-cursor-my');
    }

    el.addEventListener(
      'mouseenter',
      function (e) {
        if (!shouldRun()) return;
        setBodyCardHovering(1);
        active = true;
        var r = el.getBoundingClientRect();
        tx = e.clientX - r.left;
        ty = e.clientY - r.top;
        lx = tx - (tx - r.width * 0.5) * 0.35;
        ly = ty - (ty - r.height * 0.5) * 0.35;
        bubble.style.transform =
          'translate3d(' + lx.toFixed(2) + 'px,' + ly.toFixed(2) + 'px,0) translate(-50%, -50%)';
        setCardTiltVars(e);
        bubble.classList.add('is-visible');
        startRaf();
      },
      { passive: true }
    );

    el.addEventListener(
      'mousemove',
      function (e) {
        if (!active || !shouldRun()) return;
        var r = el.getBoundingClientRect();
        tx = e.clientX - r.left;
        ty = e.clientY - r.top;
        setCardTiltVars(e);
        startRaf();
      },
      { passive: true }
    );

    el.addEventListener(
      'mouseleave',
      function () {
        active = false;
        clearCardTiltVars();
        setBodyCardHovering(-1);
        bubble.classList.remove('is-visible');
        if (raf) cancelAnimationFrame(raf);
        raf = null;
      },
      { passive: true }
    );
  }

  function scan() {
    if (!shouldRun()) return;
    document.querySelectorAll(SEL).forEach(bind);
  }

  function boot() {
    scan();
    var rootEl = document.getElementById('root');
    if (rootEl && 'MutationObserver' in window) {
      var t;
      var mo = new MutationObserver(function () {
        clearTimeout(t);
        t = setTimeout(scan, 120);
      });
      mo.observe(rootEl, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  window.addEventListener('load', function () {
    setTimeout(scan, 250);
  });
})();
