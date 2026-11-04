// @vitest-environment node
import { describe, expect, it } from "vitest";
import { logoColor, luminance } from "./brand-color";

describe("luminance", () => {
  it("is 0 for black and 1 for white", () => {
    expect(luminance("000000")).toBe(0);
    expect(luminance("#FFFFFF")).toBeCloseTo(1);
  });
});

describe("logoColor", () => {
  it("keeps bright brand colours", () => {
    expect(logoColor("3776AB")).toBe("#3776AB"); // Python
    expect(logoColor("#FF4438")).toBe("#FF4438"); // Redis
  });

  it("falls back to the text colour for near-black brands", () => {
    expect(logoColor("181717")).toBe("currentColor"); // GitHub
    expect(logoColor("000000")).toBe("currentColor"); // Temporal
  });
});
