import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { experience } from "../model/experience";
import RoleCard from "./RoleCard";

describe("RoleCard", () => {
  it("shows the key results, bullet points and period", () => {
    const role = experience[0];
    render(
      <ol>
        <RoleCard role={role} />
      </ol>
    );
    const results = screen.getByRole("list", { name: "Key results" });
    for (const result of role.impact) expect(within(results).getByText(result)).toBeInTheDocument();
    for (const point of role.points) expect(screen.getByText(point)).toBeInTheDocument();
    expect(screen.getByText(role.period)).toBeInTheDocument();
  });

  it("omits the results row when a role has none", () => {
    const role = experience.find((r) => r.impact.length === 0)!;
    render(
      <ol>
        <RoleCard role={role} />
      </ol>
    );
    expect(screen.queryByRole("list", { name: "Key results" })).not.toBeInTheDocument();
  });
});
