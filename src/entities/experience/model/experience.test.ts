// @vitest-environment node
import { describe, expect, it } from "vitest";
import { education, experience } from "./experience";

describe("experience", () => {
  it("lists roles newest first", () => {
    expect(experience.map((r) => r.organization)).toEqual([
      "Apollo Global Management",
      "SAG-AFTRA Foundation",
      "Eye Labs Inc",
      "University of Southern California",
      "IOTric",
    ]);
  });

  it("keeps every role concise: at most 4 bullets and 6 tags", () => {
    for (const role of experience) {
      expect(role.points.length, role.organization).toBeGreaterThan(0);
      expect(role.points.length, role.organization).toBeLessThanOrEqual(4);
      expect(role.tags.length, role.organization).toBeLessThanOrEqual(6);
    }
  });

  it("keeps bullets to one line of reading (≤ 130 characters)", () => {
    for (const point of experience.flatMap((r) => r.points)) expect(point.length, point).toBeLessThanOrEqual(130);
  });

  it("includes both degrees", () => {
    expect(education.map((e) => e.school)).toEqual([
      "University of Southern California",
      "Dr. Babasaheb Ambedkar Technological University",
    ]);
  });
});
