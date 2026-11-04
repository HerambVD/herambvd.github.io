// @vitest-environment node
import { describe, expect, it } from "vitest";
import { serializeJsonLd } from "./json-ld";

describe("serializeJsonLd", () => {
  it("produces valid JSON", () => {
    expect(JSON.parse(serializeJsonLd({ name: "Heramb" }))).toEqual({ name: "Heramb" });
  });

  it("escapes < so data can't close the <script> tag", () => {
    const out = serializeJsonLd({ text: "</script><script>alert(1)</script>" });
    expect(out).not.toContain("</script>");
    expect(JSON.parse(out).text).toBe("</script><script>alert(1)</script>");
  });
});
