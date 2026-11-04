import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { education, experience } from "@/entities/experience";
import ExperienceTimeline from "./ExperienceTimeline";

describe("ExperienceTimeline", () => {
  it("renders every role and degree", () => {
    render(<ExperienceTimeline />);
    for (const role of experience) expect(screen.getByText(role.period)).toBeInTheDocument();
    for (const degree of education) expect(screen.getByText(degree.degree)).toBeInTheDocument();
  });
});
