import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { impactStats, profile } from "@/entities/profile";
import Hero from "./Hero";

describe("Hero", () => {
  it("leads with name, headline and impact numbers", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(profile.name);
    expect(screen.getByText(profile.headline)).toBeInTheDocument();
    for (const { value, label } of impactStats) {
      expect(screen.getByText(value)).toBeInTheDocument();
      expect(screen.getByText(label, { selector: "span" })).toBeInTheDocument();
    }
  });

  it("offers both calls to action", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /download resume/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "/contact");
  });

  it("opens external profiles in a new tab, but not email", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("target", "_blank");
    expect(screen.getByRole("link", { name: "Email" })).not.toHaveAttribute("target");
  });
});
