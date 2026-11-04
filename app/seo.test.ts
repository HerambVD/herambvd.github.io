// @vitest-environment node
import { describe, expect, it } from "vitest";
import { ROUTES, SITE_URL } from "@/shared/config/site";
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

  it("does not include the removed My Story page", () => {
    expect(ROUTES.map((r) => r.path)).not.toContain("/my-story");
  });

  it("keeps priorities between 0 and 1", () => {
    for (const entry of entries) {
      expect(entry.priority).toBeGreaterThan(0);
      expect(entry.priority).toBeLessThanOrEqual(1);
    }
  });
});

describe("robots", () => {
  it("allows crawling and points to the sitemap", () => {
    expect(robots()).toEqual({ rules: { userAgent: "*", allow: "/" }, sitemap: `${SITE_URL}/sitemap.xml` });
  });
});
