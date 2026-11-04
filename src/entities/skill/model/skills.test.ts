// @vitest-environment node
import { describe, expect, it } from "vitest";
import { expertise, skillGroups, skillLogos } from "./skills";

describe("skills", () => {
  it("gives every skill a logo or a fallback icon", () => {
    for (const skill of skillGroups.flatMap((g) => g.skills)) {
      expect(Boolean(skill.logo || skill.icon), skill.name).toBe(true);
    }
  });

  it("has no duplicate skills or group titles", () => {
    const names = skillGroups.flatMap((g) => g.skills.map((s) => s.name));
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(skillGroups.map((g) => g.title)).size).toBe(skillGroups.length);
  });

  it("feeds every brand logo to the tech cloud", () => {
    const withLogos = skillGroups.flatMap((g) => g.skills).filter((s) => s.logo);
    expect(skillLogos).toHaveLength(withLogos.length);
    expect(skillLogos.map((l) => l.title)).toContain("Python");
  });

  it("has three expertise cards", () => {
    expect(expertise).toHaveLength(3);
  });
});
