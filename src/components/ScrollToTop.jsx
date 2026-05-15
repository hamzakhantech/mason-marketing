import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function forceScrollTop() {
  try {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis =
      window.lenis ||
      window.__lenis ||
      window.masonLenis ||
      window.__MASON_LENIS__ ||
      window.__MASON_LENIS;

    if (lenis && typeof lenis.scrollTo === "function") {
      try {
        lenis.scrollTo(0, {
          immediate: true,
          force: true,
          lock: true,
        });
      } catch {
        try {
          lenis.scrollTo(0, { immediate: true });
        } catch {
          /* ignore */
        }
      }
    }

    window.scrollTo(0, 0);

    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = 0;
      document.scrollingElement.scrollLeft = 0;
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const root = document.getElementById("root");
    if (root) root.scrollTop = 0;

    const main = document.querySelector("main");
    if (main) main.scrollTop = 0;
  } catch (error) {
    window.scrollTo(0, 0);
  }
}

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    forceScrollTop();
    requestAnimationFrame(forceScrollTop);
    setTimeout(forceScrollTop, 0);
    setTimeout(forceScrollTop, 80);
  }, [pathname, search, hash]);

  return null;
}
