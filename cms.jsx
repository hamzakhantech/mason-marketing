// cms.jsx -- MASON content hook (public pages only)
// Provides: useSiteContent() hook + content store
// Does NOT include any editor UI -- editor lives at /admin/user-dashboard/adminpanel

import React from "react";

// --- Content store -----------------------------------------------------------

function deepMerge(base, override) {
  if (!override) return base;
  const out = { ...base };
  for (const k of Object.keys(override)) {
    if (Array.isArray(override[k])) {
      out[k] = override[k];
    } else if (override[k] && typeof override[k] === 'object' && !Array.isArray(base[k])) {
      out[k] = deepMerge(base[k] || {}, override[k]);
    } else {
      out[k] = override[k];
    }
  }
  return out;
}

function deepCloneContent(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const next = keys[i + 1];
    if (cur[k] == null) cur[k] = /^\d+$/.test(next) ? [] : {};
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}

// Global reactive content store
const _listeners = [];
let _content = window.__masonContent || {};

function getContent() { return _content; }

function setContent(updater) {
  _content = updater(_content);
  _listeners.forEach(fn => fn(_content));
}

function subscribeContent(fn) {
  _listeners.push(fn);
  return () => {
    const i = _listeners.indexOf(fn);
    if (i > -1) _listeners.splice(i, 1);
  };
}

// --- Public hook (used by page components) -----------------------------------

function useSiteContent() {
  const [content, setLocal] = React.useState(_content);

  React.useEffect(() => {
    setLocal(_content);
    return subscribeContent(c => setLocal({ ...c }));
  }, []);

  function update(path, value) {
    setContent(prev => {
      const next = deepCloneContent(prev);
      setNestedValue(next, path, value);
      return next;
    });
  }

  return { content, update };
}

// --- Boot: fetch content from API / fallback to static content.json ----------

(async function bootContentLoader() {
  try {
    let res = await fetch('/api/cms/public-content?v=' + Date.now(), { credentials: 'omit' });
    if (!res.ok) res = await fetch('/content.json?v=' + Date.now());
    if (res.ok) {
      const data = await res.json();
      window.__masonContent = data;
      _content = data;
      _listeners.forEach(fn => fn(_content));
      window.__masonContentReady = true;
    }
  } catch (e) {
    // Silently continue -- page components fall back to whatever __masonContent already is
  }
})();

export { useSiteContent, getContent, setContent };