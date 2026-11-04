import type { MetadataRoute } from "next";
import { profile } from "@/entities/profile";
import { ROUTES, SITE_URL } from "@/shared/config/site";

// Generated once at build time (required for `output: "export"`).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
    // The profile photo helps image results for the name point to this site.
    ...(path === "/" && { images: [`${SITE_URL}${profile.photo}`] }),
  }));
}
