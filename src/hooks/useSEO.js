import { useEffect } from "react";

const DEFAULT_TITLE = "MASON — Construction Project Management Software";
const DEFAULT_DESC =
  "MASON is construction management software for GC and specialty sub teams under 50 people. BIM, RFIs, daily logs, change orders — one platform, flat pricing, no seat fees.";

/**
 * useSEO — per-page SEO injection
 * @param {object} options
 * @param {string}   options.title       — page <title>
 * @param {string}   options.description — meta description
 * @param {string}   options.canonical   — canonical URL
 * @param {object[]} options.schema      — array of JSON-LD objects to inject as <script> tags
 */
export function useSEO({ title, description, canonical, schema } = {}) {
  useEffect(() => {
    const resolvedTitle = title || DEFAULT_TITLE;
    const resolvedDesc = description || DEFAULT_DESC;

    // Title
    document.title = resolvedTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", resolvedDesc);

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", resolvedTitle);

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", resolvedDesc);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // JSON-LD schema blocks
    const injectedScripts = [];
    if (schema && Array.isArray(schema)) {
      schema.forEach((schemaObj) => {
        const script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-mason-schema", "true");
        script.textContent = JSON.stringify(schemaObj);
        document.head.appendChild(script);
        injectedScripts.push(script);
      });
    }

    return () => {
      document.title = DEFAULT_TITLE;
      // Remove any schema scripts injected by this page on unmount
      injectedScripts.forEach((s) => s.remove());
    };
  }, [title, description, canonical, schema]);
}
