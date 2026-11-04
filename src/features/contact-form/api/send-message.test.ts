// @vitest-environment node
import { describe, expect, it, vi } from "vitest";

const { send } = vi.hoisted(() => ({ send: vi.fn() }));
vi.mock("@emailjs/browser", () => ({ default: { send } }));

import { sendContactMessage, toTemplateParams } from "./send-message";

const values = { name: " Jane ", subject: " Hello ", email: " jane@example.com ", message: " Hi! " };

describe("toTemplateParams", () => {
  it("trims every field and fills the EmailJS template variables", () => {
    expect(toTemplateParams(values)).toEqual({
      user_name: "Jane",
      to_name: "Heramb Devbhankar",
      from_name: "Jane",
      from_subject: "Hello",
      from_email: "jane@example.com",
      reply_to: "jane@example.com",
      message: "Hi!",
    });
  });
});

describe("sendContactMessage", () => {
  it("sends the template params through EmailJS", async () => {
    send.mockResolvedValue({ status: 200 });
    await sendContactMessage(values);
    expect(send).toHaveBeenCalledWith(expect.any(String), expect.any(String), toTemplateParams(values), expect.any(String));
  });

  it("rejects when EmailJS fails", async () => {
    send.mockRejectedValue(new Error("network"));
    await expect(sendContactMessage(values)).rejects.toThrow("network");
  });
});
