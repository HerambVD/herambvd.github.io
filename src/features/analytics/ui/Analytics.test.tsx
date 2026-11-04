import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Analytics from "./Analytics";

describe("Analytics", () => {
  it("renders nothing without a measurement ID", () => {
    const { container } = render(<Analytics measurementId="" />);
    expect(container).toBeEmptyDOMElement();
  });
});
