import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  articlePublishedTime?: string;
  schema?: object | object[];
  noindex?: boolean;
}

const SITE_NAME = "SVNR Global";
const SITE_URL = "https://www.svnrglobal.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.svg`;
const TWITTER_HANDLE = "@svnrglobal";

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  articlePublishedTime,
  schema,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

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
    setMeta("og:image:height", "630", "property");
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
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s, i) => setScript(`ld-json-${i}`, s));
      // Clean up any extras from a previous page
      let i = schemas.length;
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
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, articlePublishedTime, schema, noindex]);

  return null;
}
