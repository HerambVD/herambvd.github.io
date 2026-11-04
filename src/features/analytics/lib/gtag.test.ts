// @vitest-environment node
import { describe, expect, it } from "vitest";
import { gaInitScript, gaScriptUrl } from "./gtag";

describe("Google Analytics helpers", () => {
  it("builds the gtag loader URL", () => {
    expect(gaScriptUrl("G-ABC123")).toBe("https://www.googletagmanager.com/gtag/js?id=G-ABC123");
  });

  it("URL-encodes the measurement ID", () => {
    expect(gaScriptUrl("G-A&B")).toContain("id=G-A%26B");
  });

  it("configures gtag with the measurement ID", () => {
    const script = gaInitScript("G-ABC123");
    expect(script).toContain("window.dataLayer = window.dataLayer || [];");
    expect(script).toContain(`gtag('config', "G-ABC123");`);
  });

  it("escapes the ID so it cannot break out of the string", () => {
    expect(gaInitScript(`x");alert(1);//`)).toContain(`gtag('config', "x\\");alert(1);//");`);
  });
});
