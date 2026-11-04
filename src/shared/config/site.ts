import type { MetadataRoute } from "next";

/** Canonical origin of the site. heramb.tech redirects here. */
export const SITE_URL = "https://www.heramb.tech";
export const SITE_OWNER = "Heramb Devbhankar";
export const SITE_NAME = `${SITE_OWNER} Portfolio`;

/** Social share image, generated at build time by app/og.png/route.tsx. */
export const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Heramb Devbhankar, Senior Software Engineer",
};

/**
 * Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"), injected at build time.
 * When it is not set (local development), no analytics code is loaded.
 */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const BLOG_URL = "https://medium.com/@Heramb";

type Route = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

/** Every statically exported page, used for the sitemap. */
export const ROUTES: Route[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/copyright", changeFrequency: "yearly", priority: 0.3 },
];

/** Stable schema.org @id values, so every page's structured data refers to the same entities. */
export const SCHEMA_IDS = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
} as const;

/**
 * Search-engine ownership verification codes (not secret), injected at build time.
 * Get them from Google Search Console and Bing Webmaster Tools ("HTML tag" method).
 */
export const SITE_VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
};

/**
 * AI and answer-engine crawlers, allowed explicitly so the site can be cited by
 * ChatGPT, Claude, Perplexity, Gemini, Copilot, Apple Intelligence and others.
 */
export const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Amazonbot",
  "DuckAssistBot",
  "CCBot",
];
