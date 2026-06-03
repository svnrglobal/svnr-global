/**
 * Cross-platform prerender script for react-snap.
 * Auto-detects Chrome on macOS and Netlify/Linux.
 * Fails gracefully — never blocks the Netlify deploy.
 */
import { execSync } from "child_process";
import { existsSync } from "fs";
import { platform } from "os";

const candidates = [
  // Env var override (set in netlify.toml or locally)
  process.env.PUPPETEER_EXECUTABLE_PATH,
  // macOS
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  // Linux / Netlify
  "/usr/bin/google-chrome-stable",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/usr/bin/chromium",
  // Snap package (Ubuntu)
  "/snap/bin/chromium",
].filter(Boolean);

const chromePath = candidates.find((p) => existsSync(p)) ?? null;
console.log(`\n🔍 Prerender — Chrome: ${chromePath ?? "puppeteer bundled Chromium"}\n`);

const env = { ...process.env };
if (chromePath) env.PUPPETEER_EXECUTABLE_PATH = chromePath;

try {
  execSync("npx react-snap", { stdio: "inherit", env });
  console.log("\n✅ Prerendering complete.\n");
} catch (err) {
  console.warn("\n⚠️  Prerendering failed — site will deploy as SPA (crawlers may see empty pages).");
  console.warn("    Error:", err.message);
  // Exit 0 so Netlify deploy always succeeds
  process.exit(0);
}
