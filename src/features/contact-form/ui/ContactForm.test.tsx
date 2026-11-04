import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { sendContactMessage, notify } = vi.hoisted(() => ({
  sendContactMessage: vi.fn(),
  notify: { success: vi.fn(), error: vi.fn() },
}));
vi.mock("../api/send-message", () => ({ sendContactMessage }));
vi.mock("@/shared/lib/notify", () => ({ notify }));

import ContactForm from "./ContactForm";

async function fillForm(overrides: Partial<Record<"Name" | "Subject" | "Email" | "Message", string>> = {}) {
  const user = userEvent.setup();
  const values = { Name: "Jane", Subject: "Hello", Email: "jane@example.com", Message: "Hi there!", ...overrides };
  for (const [label, value] of Object.entries(values)) {
    if (value) await user.type(screen.getByLabelText(`${label}:`), value);
  }
  await user.click(screen.getByRole("button", { name: /send/i }));
}

describe("ContactForm", () => {
  beforeEach(() => {
    // mockClear (not a full reset): each test sets its own behaviour.
    sendContactMessage.mockClear();
    notify.success.mockClear();
    notify.error.mockClear();
  });

  it("does not send and flags the field when input is invalid", async () => {
    render(<ContactForm />);
    await fillForm({ Email: "not-an-email" });

    expect(sendContactMessage).not.toHaveBeenCalled();
    expect(notify.error).toHaveBeenCalledWith("Invalid email address.");
    expect(screen.getByLabelText("Email:")).toHaveAttribute("aria-invalid", "true");
  });

  it("sends the message and clears the form on success", async () => {
    sendContactMessage.mockResolvedValue(undefined);
    render(<ContactForm />);
    await fillForm();

    expect(sendContactMessage).toHaveBeenCalledWith({
      name: "Jane",
      subject: "Hello",
      email: "jane@example.com",
      message: "Hi there!",
    });
    expect(notify.success).toHaveBeenCalledWith("Message sent!");
    expect(screen.getByLabelText("Name:")).toHaveValue("");
    expect(screen.getByLabelText("Message:")).toHaveValue("");
  });

  it("shows an error and keeps the input when sending fails", async () => {
    sendContactMessage.mockRejectedValue(new Error("network"));
    render(<ContactForm />);
    await fillForm();

    expect(await screen.findByRole("alert")).toHaveTextContent("could not be sent");
    expect(screen.getByLabelText("Name:")).toHaveValue("Jane");
    expect(screen.getByRole("button", { name: /send/i })).toBeEnabled();
  });
});
