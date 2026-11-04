import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer", () => {
  it("links to home-page sections and pages that exist", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "/#experience");
    expect(screen.getByRole("link", { name: "Tech Stack" })).toHaveAttribute("href", "/#skills");
    expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute("href", "/privacy-policy");
  });

  it("uses the resume email for Hire Me", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "Hire Me" })).toHaveAttribute("href", "mailto:heramb.hvd@gmail.com");
  });
});
