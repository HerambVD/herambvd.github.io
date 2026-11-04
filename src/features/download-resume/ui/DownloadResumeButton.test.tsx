import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { profile } from "@/entities/profile";
import DownloadResumeButton from "./DownloadResumeButton";

describe("DownloadResumeButton", () => {
  it("downloads the resume PDF with a friendly file name", () => {
    render(<DownloadResumeButton />);
    const link = screen.getByRole("link", { name: /download resume/i });
    expect(link).toHaveAttribute("href", profile.resume.href);
    expect(link).toHaveAttribute("download", profile.resume.fileName);
  });
});
