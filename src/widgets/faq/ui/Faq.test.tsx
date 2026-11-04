import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { faqs } from "@/entities/profile";
import Faq from "./Faq";

describe("Faq", () => {
  it("renders every question and its answer in the HTML (crawlable even when collapsed)", () => {
    const { container } = render(<Faq />);
    for (const { question, answer } of faqs) {
      expect(screen.getByRole("heading", { name: question })).toBeInTheDocument();
      expect(container).toHaveTextContent(answer);
    }
  });

  it("opens the first answer by default", () => {
    const { container } = render(<Faq />);
    const details = container.querySelectorAll("details");
    expect(details[0]).toHaveAttribute("open");
    expect(details[1]).not.toHaveAttribute("open");
  });
});
