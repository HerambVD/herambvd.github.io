import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ScrollToTop, { SHOW_AFTER_PX } from "./ScrollToTop";

describe("ScrollToTop", () => {
  it("appears only after scrolling down", () => {
    render(<ScrollToTop />);
    expect(screen.queryByRole("button", { name: "Scroll to top" })).not.toBeInTheDocument();
    act(() => {
      window.scrollY = SHOW_AFTER_PX;
      window.dispatchEvent(new Event("scroll"));
    });
    expect(screen.getByRole("button", { name: "Scroll to top" })).toBeInTheDocument();
  });
});
