/**
 * Cross-platform prerender script for react-snap.
 * On macOS: uses system Chrome.
 * On Linux/Netlify: lets puppeteer use its own bundled Chromium.
 * Fails gracefully — never blocks the Netlify deploy.
 */
import { execSync } from "child_process";
import { existsSync } from "fs";
import { platform } from "os";

const env = { ...process.env };

// Only override Chrome path on macOS — on Linux let puppeteer use its bundled Chromium
if (platform() === "darwin") {
  const macPaths = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
  ];
  const found = macPaths.find((p) => existsSync(p));
  if (found) {
    env.PUPPETEER_EXECUTABLE_PATH = found;
    console.log(`\n🔍 Prerender — Chrome: ${found}\n`);
  } else {
    console.log(`\n🔍 Prerender — Chrome: puppeteer bundled\n`);
  }
} else {
  // Linux/Netlify: clear any env var pointing to a non-existent path
  delete env.PUPPETEER_EXECUTABLE_PATH;
  console.log(`\n🔍 Prerender — Chrome: puppeteer bundled Chromium (Linux)\n`);
}

try {
  execSync("npx react-snap", { stdio: "inherit", env });
  console.log("\n✅ Prerendering complete.\n");
} catch (err) {
  console.warn("\n⚠️  Prerendering failed — site will deploy as SPA.");
  console.warn("    Error:", err.message);
  process.exit(0);
}
