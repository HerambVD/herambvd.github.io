import { renderToString } from "react-dom/server";
import { siPython, siReact } from "simple-icons";
import { describe, expect, it } from "vitest";
import IconCloud from "./icon-cloud";

describe("IconCloud", () => {
  it("server-renders only a placeholder, so hydration can't mismatch", () => {
    const html = renderToString(<IconCloud icons={[siPython, siReact]} />);
    expect(html).toContain('data-testid="icon-cloud-placeholder"');
    expect(html).not.toContain("<canvas");
    expect(html).not.toContain("canvas-container-");
  });
});
