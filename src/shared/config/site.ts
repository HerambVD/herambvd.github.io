import type { MetadataRoute } from "next";

/** Canonical origin of the site. heramb.tech redirects here. */
export const SITE_URL = "https://www.heramb.tech";
export const SITE_NAME = "Heramb Devbhankar Portfolio";

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
