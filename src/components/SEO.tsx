import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articlePublishedTime?: string;
  schema?: object | object[];
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

const SITE_NAME = "SVNR Global";
const SITE_URL = "https://svnrglobal.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const TWITTER_HANDLE = "@svnrglobal";

// Netlify serves prerendered pages with a trailing slash (e.g. /about/), so
// canonical + og:url + breadcrumb URLs must match that exact 200 URL to avoid
// pointing crawlers at a 301 redirect.
const withTrailingSlash = (path: string) =>
  !path || path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  articlePublishedTime,
  schema,
  breadcrumbs,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${withTrailingSlash(canonical || "/")}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Helpers
    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    const setScript = (id: string, json: object) => {
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.id = id;
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(json);
    };

    const removeScript = (id: string) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };

    // Core meta
    setMeta("description", description);
    setMeta("robots", noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:type", ogType, "property");
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "1200", "property");
    setMeta("og:site_name", SITE_NAME, "property");
    setMeta("og:locale", "en_US", "property");
    if (articlePublishedTime) {
      setMeta("article:published_time", articlePublishedTime, "property");
    }

    // Twitter / X cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:site", TWITTER_HANDLE);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // JSON-LD structured data
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbs.map((item, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "name": item.name,
            "item": `${SITE_URL}${withTrailingSlash(item.url)}`,
          })),
        }
      : null;

    const allSchemas = [
      ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
      ...(breadcrumbSchema ? [breadcrumbSchema] : []),
    ];

    if (allSchemas.length > 0) {
      allSchemas.forEach((s, i) => setScript(`ld-json-${i}`, s));
      // Clean up any extras from a previous page
      let i = allSchemas.length;
      while (document.getElementById(`ld-json-${i}`)) {
        removeScript(`ld-json-${i}`);
        i++;
      }
    } else {
      // Clean up any schemas set by a previous page
      let i = 0;
      while (document.getElementById(`ld-json-${i}`)) {
        removeScript(`ld-json-${i}`);
        i++;
      }
    }
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, articlePublishedTime, schema, breadcrumbs, noindex]);

  return null;
}
