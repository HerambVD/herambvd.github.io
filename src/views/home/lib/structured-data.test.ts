// @vitest-environment node
import { describe, expect, it } from "vitest";
import { faqs, profile, socialLinks } from "@/entities/profile";
import { SCHEMA_IDS } from "@/shared/config/site";
import { homeStructuredData, knowsAbout } from "./structured-data";

describe("home page structured data", () => {
  const [profilePage, faqPage] = homeStructuredData(new Date("2026-01-01T00:00:00Z"));
  const person = profilePage.mainEntity;

  it("is a ProfilePage whose main entity is Heramb", () => {
    expect(profilePage["@type"]).toBe("ProfilePage");
    expect(profilePage.dateModified).toBe("2026-01-01T00:00:00.000Z");
    expect(person).toMatchObject({ "@type": "Person", "@id": SCHEMA_IDS.person, name: "Heramb Devbhankar" });
  });

  it("lists every name variant people search for", () => {
    expect(person.alternateName).toEqual(expect.arrayContaining(["Heramb", "Devbhankar", "Heramb Vijay Devbhankar", "heramb.tech"]));
    expect(person.givenName).toBe("Heramb");
    expect(person.familyName).toBe("Devbhankar");
  });

  it("links every social profile and the bio", () => {
    expect(person.sameAs).toEqual(expect.arrayContaining(socialLinks.map((l) => l.href)));
    expect(person.description).toBe(profile.bio);
    expect(person.image).toMatch(/^https:\/\/www\.heramb\.tech\//);
  });

  it("includes both schools and de-duplicated topics", () => {
    expect(person.alumniOf).toHaveLength(2);
    const topics = knowsAbout();
    expect(new Set(topics).size).toBe(topics.length);
    expect(topics).toContain("Python");
  });

  it("publishes the same FAQ that is visible on the page", () => {
    expect(faqPage["@type"]).toBe("FAQPage");
    expect(faqPage.mainEntity.map((q) => q.name)).toEqual(faqs.map((f) => f.question));
  });
});
