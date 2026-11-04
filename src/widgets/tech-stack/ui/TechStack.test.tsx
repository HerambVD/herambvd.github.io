import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { skillGroups } from "@/entities/skill";

// The 3D cloud draws on <canvas>, which jsdom doesn't implement.
vi.mock("@/shared/ui/icon-cloud", () => ({ default: () => null }));

import TechStack from "./TechStack";

describe("TechStack", () => {
  it("renders every skill group with its skills", () => {
    render(<TechStack />);
    for (const group of skillGroups) {
      expect(screen.getByRole("heading", { name: group.title })).toBeInTheDocument();
    }
    expect(screen.getByText("Kubernetes")).toBeInTheDocument();
    expect(screen.getByText("FastAPI")).toBeInTheDocument();
  });
});
