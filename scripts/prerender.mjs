/**
 * Cross-platform prerender script.
 * Finds Chrome/Chromium, sets PUPPETEER_EXECUTABLE_PATH, then runs react-snap.
 */
import { execSync } from "child_process";
import { existsSync } from "fs";
import { platform } from "os";

const candidates =
  platform() === "darwin"
    ? [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
      ]
    : [
        "/usr/bin/google-chrome-stable",
        "/usr/bin/google-chrome",
        "/usr/bin/chromium-browser",
        "/usr/bin/chromium",
      ];

const chromePath = candidates.find((p) => existsSync(p)) ?? null;
console.log(`\n🔍 Prerender — Chrome: ${chromePath ?? "puppeteer bundled"}\n`);

const env = { ...process.env };
if (chromePath) env.PUPPETEER_EXECUTABLE_PATH = chromePath;

execSync("npx react-snap", { stdio: "inherit", env });
