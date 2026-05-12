/**
 * MASON — Analytics & Tracking Configuration
 * ============================================
 * Add your tracking codes below. This file is loaded on every page.
 * Supported: GA4, Plausible, Segment, Hotjar, Meta Pixel, LinkedIn Insight, etc.
 *
 * HOW TO USE:
 * 1. Find the section for your analytics provider below
 * 2. Uncomment the block and paste your tracking ID / code
 * 3. Save the file — all pages will pick it up on reload
 *
 * To verify a tracker is working, open DevTools → Network → filter by
 * the provider's domain (e.g. "google-analytics.com", "plausible.io")
 */

(function () {
  'use strict';

  // ─── CONFIGURATION ──────────────────────────────────────────────────────────

  var TRACKING_CONFIG = {
    // Set to false to disable all tracking (e.g. for dev)
    enabled: true,

    // ── Google Analytics 4 ───────────────────────────────────────────────────
    ga4: {
      enabled: false,
      measurementId: 'G-XXXXXXXXXX',  // ← Paste your Measurement ID here (G-...)
    },

    // ── Plausible (privacy-first, no cookies) ────────────────────────────────
    plausible: {
      enabled: false,
      domain: 'masononsite.com',       // ← Your domain as registered in Plausible
      // apiHost: 'https://plausible.io', // Uncomment to use self-hosted
    },

    // ── Meta Pixel (Facebook / Instagram Ads) ───────────────────────────────
    metaPixel: {
      enabled: false,
      pixelId: 'XXXXXXXXXXXXXXXXXX',   // ← Paste your Pixel ID here
    },

    // ── LinkedIn Insight Tag ─────────────────────────────────────────────────
    linkedin: {
      enabled: false,
      partnerId: 'XXXXXXX',            // ← Paste your Partner ID here
    },

    // ── Hotjar (heatmaps + recordings) ──────────────────────────────────────
    hotjar: {
      enabled: false,
      siteId: 0000000,                 // ← Paste your Site ID here (numbers only)
      version: 6,
    },

    // ── Microsoft Clarity ───────────────────────────────────────────────────
    clarity: {
      enabled: false,
      projectId: 'XXXXXXXXXX',         // ← Paste your Project ID here
    },

    // ── Segment (unified customer data) ─────────────────────────────────────
    segment: {
      enabled: false,
      writeKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', // ← Paste your Write Key here
    },

    // ── Custom script slot ───────────────────────────────────────────────────
    // Paste any custom <script> tag content here as a string.
    // It will be injected into the page head.
    custom: {
      enabled: false,
      script: '',
    },
  };

  // ─── DO NOT EDIT BELOW THIS LINE ────────────────────────────────────────────

  if (!TRACKING_CONFIG.enabled) {
    console.info('[MASON Tracking] Tracking disabled via config.');
    return;
  }

  function loadScript(src, attrs) {
    var s = document.createElement('script');
    s.src = src;
    s.async = true;
    if (attrs) Object.keys(attrs).forEach(function(k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
  }

  function injectInlineScript(code) {
    var s = document.createElement('script');
    s.textContent = code;
    document.head.appendChild(s);
  }

  // Google Analytics 4
  if (TRACKING_CONFIG.ga4.enabled && TRACKING_CONFIG.ga4.measurementId) {
    var gId = TRACKING_CONFIG.ga4.measurementId;
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + gId);
    injectInlineScript(
      'window.dataLayer=window.dataLayer||[];' +
      'function gtag(){dataLayer.push(arguments);}' +
      'gtag("js",new Date());' +
      'gtag("config","' + gId + '");'
    );
    console.info('[MASON Tracking] GA4 loaded:', gId);
  }

  // Plausible
  if (TRACKING_CONFIG.plausible.enabled) {
    var cfg = TRACKING_CONFIG.plausible;
    var host = cfg.apiHost || 'https://plausible.io';
    loadScript(host + '/js/script.js', {
      'data-domain': cfg.domain,
      defer: ''
    });
    console.info('[MASON Tracking] Plausible loaded for:', cfg.domain);
  }

  // Meta Pixel
  if (TRACKING_CONFIG.metaPixel.enabled && TRACKING_CONFIG.metaPixel.pixelId) {
    var pixelId = TRACKING_CONFIG.metaPixel.pixelId;
    injectInlineScript(
      '!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?' +
      'n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;' +
      'n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;' +
      't.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,' +
      'document,"script","https://connect.facebook.net/en_US/fbevents.js");' +
      'fbq("init","' + pixelId + '");fbq("track","PageView");'
    );
    console.info('[MASON Tracking] Meta Pixel loaded:', pixelId);
  }

  // LinkedIn Insight
  if (TRACKING_CONFIG.linkedin.enabled && TRACKING_CONFIG.linkedin.partnerId) {
    var liId = TRACKING_CONFIG.linkedin.partnerId;
    injectInlineScript(
      '_linkedin_partner_id="' + liId + '";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];' +
      'window._linkedin_data_partner_ids.push(_linkedin_partner_id);'
    );
    loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
    console.info('[MASON Tracking] LinkedIn Insight loaded:', liId);
  }

  // Hotjar
  if (TRACKING_CONFIG.hotjar.enabled && TRACKING_CONFIG.hotjar.siteId) {
    var hjId = TRACKING_CONFIG.hotjar.siteId;
    var hjV = TRACKING_CONFIG.hotjar.version;
    injectInlineScript(
      '(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};' +
      'h._hjSettings={hjid:' + hjId + ',hjsv:' + hjV + '};a=o.getElementsByTagName("head")[0];' +
      'r=o.createElement("script");r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;' +
      'a.appendChild(r)})(window,document,"https://static.hotjar.com/c/hotjar-",".js?sv=");'
    );
    console.info('[MASON Tracking] Hotjar loaded:', hjId);
  }

  // Microsoft Clarity
  if (TRACKING_CONFIG.clarity.enabled && TRACKING_CONFIG.clarity.projectId) {
    var claId = TRACKING_CONFIG.clarity.projectId;
    injectInlineScript(
      '(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};' +
      't=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;' +
      'y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","' + claId + '");'
    );
    console.info('[MASON Tracking] Microsoft Clarity loaded:', claId);
  }

  // Custom script
  if (TRACKING_CONFIG.custom.enabled && TRACKING_CONFIG.custom.script) {
    injectInlineScript(TRACKING_CONFIG.custom.script);
    console.info('[MASON Tracking] Custom script injected.');
  }

  // Expose config for tracking dashboard
  window.__MASON_TRACKING = TRACKING_CONFIG;

})();
