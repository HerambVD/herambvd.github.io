import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import ThemeToggle from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("server-renders a theme-neutral label, so hydration can't mismatch", () => {
    expect(renderToString(<ThemeToggle />)).toContain('aria-label="Toggle theme"');
  });

  it("offers the opposite theme once mounted in the browser", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <ThemeToggle />
      </ThemeProvider>
    );
    expect(screen.getByRole("button", { name: "Switch to light mode" })).toBeInTheDocument();
  });
});
