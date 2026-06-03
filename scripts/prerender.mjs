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
  "/results",
  "/blog",
  "/contact",
  "/compare",
  "/engagement",
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
  for (const route of ROUTES) {
    try {
      await saveRoute(page, route);
      done++;
      console.log(`✅  prerendered ${done}/${ROUTES.length} (${route})`);
    } catch (err) {
      console.warn(`⚠️  failed ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();
  console.log(`\n✅ Prerendering complete — ${done}/${ROUTES.length} pages.\n`);
}

main().catch((err) => {
  console.warn("\n⚠️  Prerendering failed — site will deploy as SPA.");
  console.warn("    Error:", err.message);
  process.exit(0); // never block the deploy
});
