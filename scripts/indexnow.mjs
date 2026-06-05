/**
 * IndexNow submitter — pings Bing/Yandex (and other IndexNow engines) with the
 * site's URLs so new/updated pages get crawled within minutes instead of days.
 *
 * Run this AFTER a deploy is live (the key file must be reachable):
 *   node scripts/indexnow.mjs
 *
 * It reads dist/sitemap.xml for the URL list. Safe to re-run; IndexNow dedupes.
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const HOST = "svnrglobal.com";
const KEY = "7d467b3848854e766b475ce5b4b0de9a";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function readSitemapUrls() {
  const xml = readFileSync(resolve(__dirname, "../dist/sitemap.xml"), "utf8");
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1].trim());
  return urls;
}

async function main() {
  const urlList = readSitemapUrls();
  if (urlList.length === 0) {
    console.error("No URLs found in dist/sitemap.xml — run `npm run build` first.");
    process.exit(1);
  }

  const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow submitted ${urlList.length} URLs — HTTP ${res.status}`);
  if (res.status === 200 || res.status === 202) {
    console.log("✅ Accepted. New pages will be picked up shortly.");
  } else {
    console.log("Response:", await res.text());
    console.log(
      "If 403/422: confirm the key file is live at " + KEY_LOCATION
    );
  }
}

main().catch((err) => {
  console.error("IndexNow ping failed:", err.message);
  process.exit(1);
});
