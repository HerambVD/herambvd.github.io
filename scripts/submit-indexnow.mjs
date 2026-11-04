// Tells IndexNow search engines (Bing, Yandex, Naver, Seznam) that the site's pages changed.
// Bing's index also powers DuckDuckGo and ChatGPT search. Runs after each deploy.
//
// Usage: node scripts/submit-indexnow.mjs https://www.heramb.tech
// The key is the 32-hex-character .txt file in public/ (public by design).
import { readdirSync } from "node:fs";

const siteUrl = (process.argv[2] ?? "").replace(/\/$/, "");
if (!siteUrl) throw new Error("Usage: node scripts/submit-indexnow.mjs <site-url>");

const keyFile = readdirSync("public").find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
if (!keyFile) throw new Error("No IndexNow key file (32 hex characters + .txt) found in public/");
const key = keyFile.replace(".txt", "");

const sitemap = await (await fetch(`${siteUrl}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
if (urlList.length === 0) throw new Error("No URLs found in the live sitemap");

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(siteUrl).host, key, keyLocation: `${siteUrl}/${keyFile}`, urlList }),
});

// 200 = accepted, 202 = accepted (key verification pending).
console.log(`IndexNow: submitted ${urlList.length} URLs, HTTP ${response.status}`);
if (!response.ok) process.exitCode = 1;
