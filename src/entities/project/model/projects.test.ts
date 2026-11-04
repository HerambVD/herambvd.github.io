// @vitest-environment node
import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { projects } from "./projects";

describe("projects", () => {
  it("has unique names (used as React keys)", () => {
    expect(new Set(projects.map((p) => p.name)).size).toBe(projects.length);
  });

  it("only references local images that exist", () => {
    for (const { image } of projects) {
      if (image?.startsWith("/")) expect(existsSync(join(process.cwd(), "public", image)), image).toBe(true);
    }
  });

  it("describes each project in one sentence (≤ 140 characters)", () => {
    for (const p of projects) expect(p.description.length, p.name).toBeLessThanOrEqual(140);
  });
});
