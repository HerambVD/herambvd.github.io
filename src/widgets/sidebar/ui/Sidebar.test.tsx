import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Sidebar, { NAV_ITEMS } from "./Sidebar";

describe("Sidebar", () => {
  it("opens with the menu button and closes with Escape", () => {
    render(<Sidebar />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("links to the home-page sections and the contact page", () => {
    expect(NAV_ITEMS.filter((item) => !item.external).map((item) => item.href)).toEqual([
      "/#",
      "/#experience",
      "/#projects",
      "/#skills",
      "/contact",
    ]);
  });
});
