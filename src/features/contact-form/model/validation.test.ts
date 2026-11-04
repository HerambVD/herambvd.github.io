// @vitest-environment node
import { describe, expect, it } from "vitest";
import { validateContactForm, validateEmail, validateLength, type ContactFields } from "./validation";

describe("validateEmail", () => {
  it.each(["jane@example.com", "jane.doe+tag@mail.example.co.uk", "  padded@example.com  "])("accepts %s", (email) => {
    expect(validateEmail(email)).toEqual({ valid: true });
  });

  it.each([
    ["", "Email is required."],
    ["   ", "Email is required."],
    ["no-at-sign", "Invalid email address."],
    ["jane@", "Invalid email address."],
    ["jane@example", "Invalid email address."],
    ["jane doe@example.com", "Invalid email address."],
    ["jane@-example.com", "Domain name is invalid."],
    [`${"a".repeat(65)}@example.com`, "Username is too long."],
    [`jane@${"a".repeat(250)}.com`, "Email is too long."],
  ])("rejects %j", (email, message) => {
    expect(validateEmail(email)).toEqual({ valid: false, message });
  });
});

describe("validateLength", () => {
  it("ignores surrounding whitespace", () => {
    expect(validateLength("  ab  ", "Name", 2, 5)).toEqual({ valid: true });
  });

  it("enforces the minimum and maximum", () => {
    expect(validateLength("a", "Name", 2, 5)).toEqual({ valid: false, message: "Name should be at least 2 characters." });
    expect(validateLength("abcdef", "Name", 2, 5)).toEqual({
      valid: false,
      message: "Name should be no more than 5 characters.",
    });
  });

  it("accepts values exactly at the limits", () => {
    expect(validateLength("ab", "Name", 2, 5).valid).toBe(true);
    expect(validateLength("abcde", "Name", 2, 5).valid).toBe(true);
  });
});

describe("validateContactForm", () => {
  const valid: ContactFields = { name: "Al", subject: "Hi", email: "al@example.com", message: "Hello there" };

  it("returns null for a valid form", () => {
    expect(validateContactForm(valid)).toBeNull();
  });

  it("reports the first invalid field in form order", () => {
    expect(validateContactForm({ ...valid, name: "", email: "bad" })?.field).toBe("name");
    expect(validateContactForm({ ...valid, subject: "x" })?.field).toBe("subject");
    expect(validateContactForm({ ...valid, email: "bad" })?.field).toBe("email");
    expect(validateContactForm({ ...valid, message: "hey" })?.field).toBe("message");
  });

  it("rejects messages over 1000 characters", () => {
    expect(validateContactForm({ ...valid, message: "x".repeat(1001) })).toEqual({
      field: "message",
      message: "Message should be no more than 1000 characters.",
    });
  });
});
