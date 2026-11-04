// @vitest-environment node
import { existsSync, readdirSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { faqs, profile } from "@/entities/profile";
import { AI_CRAWLERS, ROUTES, SITE_URL } from "@/shared/config/site";
import { buildLlmsTxt } from "./llms.txt/build-llms-txt";
import robots from "./robots";
import sitemap from "./sitemap";

describe("sitemap", () => {
  const entries = sitemap();

  it("lists every route on the canonical domain", () => {
    expect(entries.map((e) => e.url)).toEqual([
      "https://www.heramb.tech",
      "https://www.heramb.tech/projects",
      "https://www.heramb.tech/contact",
      "https://www.heramb.tech/privacy-policy",
      "https://www.heramb.tech/copyright",
    ]);
  });

  it("attaches the profile photo to the home page for image search", () => {
    expect(entries[0].images).toEqual([`${SITE_URL}${profile.photo}`]);
  });

  it("does not include the removed My Story page", () => {
    expect(ROUTES.map((r) => r.path)).not.toContain("/my-story");
  });
});

describe("robots", () => {
  const { rules, sitemap: sitemapUrl } = robots();
  const ruleList = Array.isArray(rules) ? rules : [rules];

  it("allows every crawler and points to the sitemap", () => {
    expect(ruleList).toContainEqual({ userAgent: "*", allow: "/" });
    expect(sitemapUrl).toBe(`${SITE_URL}/sitemap.xml`);
  });

  it("explicitly allows the major AI crawlers", () => {
    expect(ruleList).toContainEqual({ userAgent: AI_CRAWLERS, allow: "/" });
    for (const bot of ["GPTBot", "OAI-SearchBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
      expect(AI_CRAWLERS).toContain(bot);
    }
  });

  it("disallows nothing", () => {
    for (const rule of ruleList) expect(rule).not.toHaveProperty("disallow");
  });
});

describe("llms.txt", () => {
  const text = buildLlmsTxt();

  it("starts with the name as a title and the bio as the summary", () => {
    expect(text.startsWith(`# ${profile.name}\n\n> ${profile.bio}`)).toBe(true);
  });

  it("includes every name variant, the FAQ and contact details", () => {
    for (const name of profile.alternateNames) expect(text).toContain(name);
    for (const { question } of faqs) expect(text).toContain(question);
    expect(text).toContain(profile.email);
  });

  it("links to the canonical pages and resume", () => {
    expect(text).toContain(`${SITE_URL}/contact`);
    expect(text).toContain(`${SITE_URL}${profile.resume.href}`);
  });
});

describe("IndexNow", () => {
  it("has exactly one key file in public/ for scripts/submit-indexnow.mjs", () => {
    const keys = readdirSync("public").filter((name) => /^[0-9a-f]{32}\.txt$/.test(name));
    expect(keys).toHaveLength(1);
    expect(existsSync("scripts/submit-indexnow.mjs")).toBe(true);
  });
});
