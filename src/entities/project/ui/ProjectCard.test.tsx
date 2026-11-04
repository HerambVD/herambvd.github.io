import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../model/projects";
import ProjectCard from "./ProjectCard";

describe("ProjectCard", () => {
  it("shows the impact badge and an external link when the project has one", () => {
    const project = projects.find((p) => p.link)!;
    render(<ProjectCard project={project} />);
    expect(screen.getByText(project.impact!)).toBeInTheDocument();
    const link = screen.getByRole("link", { name: project.link!.text });
    expect(link).toHaveAttribute("href", project.link!.href);
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("falls back to a placeholder when there is no image", () => {
    const project = projects.find((p) => !p.image)!;
    render(<ProjectCard project={project} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
    expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
  });
});
