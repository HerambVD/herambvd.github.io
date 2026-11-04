import { render, screen } from "@testing-library/react";
import { Database } from "lucide-react";
import { siPython } from "simple-icons";
import { describe, expect, it } from "vitest";
import SkillChip from "./SkillChip";

describe("SkillChip", () => {
  it("draws the brand logo in its brand colour", () => {
    const { container } = render(<SkillChip skill={{ name: "Python", logo: siPython }} />);
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(container.querySelector("svg")).toHaveAttribute("fill", "#3776AB");
  });

  it("uses the fallback icon when there is no logo", () => {
    const { container } = render(<SkillChip skill={{ name: "SQL", icon: Database }} />);
    expect(screen.getByText("SQL")).toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
