// @vitest-environment node
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { faqs, impactStats, profile, socialLinks } from "./profile";

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

  it("names Heramb in full in the bio, which AI assistants quote", () => {
    expect(profile.bio).toContain(profile.name);
    expect(profile.bio).toContain(profile.fullName);
    expect(profile.bio).toContain("heramb.tech");
  });

  it("keeps FAQ answers short and self-contained", () => {
    for (const { question, answer } of faqs) {
      expect(question.endsWith("?"), question).toBe(true);
      expect(answer.length, question).toBeLessThanOrEqual(240);
    }
  });

  it("shows exactly four impact stats", () => {
    expect(impactStats).toHaveLength(4);
  });

  it("has absolute https social links", () => {
    for (const link of socialLinks) expect(link.href).toMatch(/^https:\/\//);
  });
});
