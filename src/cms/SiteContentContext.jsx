import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

function deepCloneContent(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  let cur = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    const next = keys[i + 1];
    if (cur[k] == null) cur[k] = /^\d+$/.test(next) ? [] : {};
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}

const SiteContentContext = createContext(null);

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        let res = await fetch("/api/cms/public-content?v=" + Date.now(), {
          credentials: "omit",
        });
        if (!res.ok) res = await fetch("/content.json?v=" + Date.now());
        if (res.ok && !cancelled) {
          const data = await res.json();
          setContent(data);
          return;
        }
      } catch {
        /* fall through */
      }
      try {
        const r2 = await fetch("/content.json?v=" + Date.now());
        if (r2.ok && !cancelled) setContent(await r2.json());
      } catch {
        /* static pages still render with defaults */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const update = useCallback((path, value) => {
    setContent((prev) => {
      const next = deepCloneContent(prev);
      setNestedValue(next, path, value);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ content, update }), [content, update]);

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

export function useSiteContent() {
  const ctx = useContext(SiteContentContext);
  if (!ctx) return { content: {}, update: () => {} };
  return ctx;
}
