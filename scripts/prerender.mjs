/**
 * Custom prerender script using modern puppeteer.
 * Starts a local static server, visits every route with headless Chrome,
 * saves the full HTML snapshot to dist/<route>/index.html.
 *
 * Works on macOS (local) and Netlify/Linux.
 * Fails gracefully — never blocks the deploy.
 */

import puppeteer from "puppeteer";
import { createServer } from "http";
import serveStatic from "serve-static";
import finalhandler from "finalhandler";
import { writeFileSync, mkdirSync } from "fs";
import { join, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = resolve(__dirname, "../dist");
const PORT = 45678;
const BASE = `http://localhost:${PORT}`;
const WAIT_MS = 1500; // wait for React to render

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/sectors",
  "/case-studies",
  "/case-studies/luxury-real-estate-pipeline",
  "/case-studies/hotel-direct-bookings",
  "/case-studies/wealth-management-pipeline",
  "/case-studies/law-firm-consultations",
  "/case-studies/dental-clinic-revenue",
  "/case-studies/private-healthcare-network",
  "/case-studies/manufacturing-export-buyers",
  "/case-studies/ecommerce-dtc-revenue",
  "/case-studies/aesthetic-clinic-revenue",
  "/blog",
  "/contact",
  "/compare",
  "/engagement",
  "/founder",
  "/services/client-acquisition",
  "/services/ai-receptionist",
  "/services/revenue-operations",
  "/services/intelligence-research",
  "/services/sector-workflows",
  "/services/brand-outreach",
  "/services/dealflow-investor",
  "/services/channel-partnership",
  "/sectors/luxury-rugs-home-textiles",
  "/sectors/premium-real-estate",
  "/sectors/private-equity-family-offices",
  "/sectors/b2b-luxury-brands",
  "/sectors/wealth-management",
  "/sectors/high-ticket-ecommerce",
  "/sectors/maritime-logistics",
  "/sectors/professional-services",
  "/blog/luxury-rug-brand-distribution-strategy",
  "/blog/real-estate-investor-buyer-acquisition",
  "/blog/private-equity-proprietary-deal-flow",
  "/blog/architecture-interior-design-studio-client-acquisition",
  "/blog/wealth-management-boutique-client-acquisition",
  "/blog/b2b-textile-platform-buyer-acquisition",
  "/blog/client-acquisition-cost-referral-dependency",
  "/blog/client-acquisition-system-vs-campaign",
  "/blog/ai-prospecting-family-offices",
  "/blog/hnw-investor-outreach-strategy",
  "/blog/uhnw-client-acquisition-strategy",
  "/blog/b2b-outreach-agency-india",
  "/blog/what-is-outreach-infrastructure",
  "/blog/maritime-logistics-business-development",
  "/blog/cold-email-agency-luxury-brands",
  "/blog/professional-services-client-acquisition",
  "/blog/outbound-lead-generation-luxury-retail",
  "/blog/how-to-get-b2b-clients-luxury-brand",
];

function startServer() {
  const serve = serveStatic(DIST, { index: ["index.html"] });
  const server = createServer((req, res) => {
    // SPA fallback — serve index.html for any unknown path
    serve(req, res, () => {
      req.url = "/index.html";
      serve(req, res, finalhandler(req, res));
    });
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function saveRoute(page, route) {
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, WAIT_MS));
  const html = await page.content();

  const dir = route === "/" ? DIST : join(DIST, ...route.split("/").filter(Boolean));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html, "utf8");

  // Collect metadata (for sitemap + RSS generation)
  return page.evaluate(() => {
    const attr = (sel, a) => {
      const el = document.querySelector(sel);
      return el ? el.getAttribute(a) : null;
    };
    let date = null;
    document.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
      try {
        const json = JSON.parse(s.textContent);
        (Array.isArray(json) ? json : [json]).forEach((o) => {
          if (o && o["@type"] === "Article" && o.datePublished) date = o.datePublished;
        });
      } catch { /* ignore */ }
    });
    return {
      title: document.title || null,
      description: attr('meta[name="description"]', "content"),
      image: attr('meta[property="og:image"]', "content"),
      date,
    };
  });
}

const SITE = "https://svnrglobal.com";
const TODAY = new Date().toISOString().slice(0, 10);

function xmlEsc(s) {
  return String(s || "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function priorityFor(route) {
  if (route === "/") return "1.0";
  if (/^\/(about|services|sectors|case-studies|blog|founder|engagement|compare|contact)$/.test(route)) return "0.9";
  if (route.startsWith("/services/") || route.startsWith("/sectors/")) return "0.8";
  return "0.7"; // case-study + blog detail pages
}

function changefreqFor(route) {
  if (route === "/" || route === "/blog") return "weekly";
  return "monthly";
}

// Netlify serves prerendered pages at a trailing-slash URL (200); the no-slash
// form 301-redirects. List the canonical 200 URL so crawlers skip the hop.
function canonicalLoc(route) {
  if (route === "/") return SITE + "/";
  return SITE + (route.endsWith("/") ? route : route + "/");
}

function writeSitemap(pages) {
  const body = pages.map((p) => {
    const loc = canonicalLoc(p.route);
    const lastmod = p.date ? p.date.slice(0, 10) : TODAY;
    const hasUniqueImage = p.image && !p.image.endsWith("og-image.png");
    const imageBlock = hasUniqueImage
      ? `\n    <image:image>\n      <image:loc>${xmlEsc(p.image)}</image:loc>\n      <image:title>${xmlEsc(p.title)}</image:title>\n    </image:image>`
      : "";
    return `  <url>\n    <loc>${xmlEsc(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreqFor(p.route)}</changefreq>\n    <priority>${priorityFor(p.route)}</priority>${imageBlock}\n  </url>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`;
  writeFileSync(join(DIST, "sitemap.xml"), xml, "utf8");
  console.log(`✅ sitemap.xml — ${pages.length} URLs (with image entries)`);
}

function writeRss(pages) {
  const posts = pages
    .filter((p) => p.route.startsWith("/blog/"))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  const items = posts.map((p) => {
    const link = canonicalLoc(p.route);
    const pub = p.date ? new Date(p.date).toUTCString() : new Date().toUTCString();
    return `    <item>\n      <title>${xmlEsc(p.title)}</title>\n      <link>${xmlEsc(link)}</link>\n      <guid isPermaLink="true">${xmlEsc(link)}</guid>\n      <pubDate>${pub}</pubDate>\n      <description>${xmlEsc(p.description)}</description>\n    </item>`;
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>SVNR Global Blog</title>\n    <link>${SITE}/blog</link>\n    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />\n    <description>AI client acquisition and outreach infrastructure insights for premium operators.</description>\n    <language>en</language>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n${items}\n  </channel>\n</rss>\n`;
  writeFileSync(join(DIST, "rss.xml"), xml, "utf8");
  console.log(`✅ rss.xml — ${posts.length} blog posts`);
}

async function main() {
  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  let done = 0;
  const pages = [];
  for (const route of ROUTES) {
    try {
      const meta = await saveRoute(page, route);
      pages.push({ route, ...meta });
      done++;
      console.log(`✅  prerendered ${done}/${ROUTES.length} (${route})`);
    } catch (err) {
      console.warn(`⚠️  failed ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  // Generate sitemap + RSS from the rendered metadata
  try {
    writeSitemap(pages);
    writeRss(pages);
  } catch (err) {
    console.warn(`⚠️  sitemap/rss generation failed: ${err.message}`);
  }

  console.log(`\n✅ Prerendering complete — ${done}/${ROUTES.length} pages.\n`);
}

main().catch((err) => {
  console.warn("\n⚠️  Prerendering failed — site will deploy as SPA.");
  console.warn("    Error:", err.message);
  process.exit(0); // never block the deploy
});
