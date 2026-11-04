// @vitest-environment node
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { impactStats, profile, socialLinks } from "./profile";

const inPublic = (path: string) => existsSync(join(process.cwd(), "public", path));

describe("profile", () => {
  it("points to a resume PDF and photo that exist in /public", () => {
    expect(inPublic(profile.resume.href)).toBe(true);
    expect(inPublic(profile.photo)).toBe(true);
  });

  it("uses the contact details from the resume", () => {
    expect(profile.email).toBe("heramb.hvd@gmail.com");
    expect(profile.title).toBe("Senior Software Engineer");
  });

  it("keeps the hero copy short enough to scan", () => {
    expect(profile.headline.length).toBeLessThanOrEqual(90);
    expect(profile.summary.length).toBeLessThanOrEqual(140);
  });

  it("shows exactly four impact stats", () => {
    expect(impactStats).toHaveLength(4);
  });

  it("has absolute https social links", () => {
    for (const link of socialLinks) expect(link.href).toMatch(/^https:\/\//);
  });
});
