export type ValidationResult = { valid: true } | { valid: false; message: string };

const ok: ValidationResult = { valid: true };
const fail = (message: string): ValidationResult => ({ valid: false, message });

const EMAIL_PATTERN = /^[^\s@"<>()[\]\\,;:]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

export function validateEmail(email: string): ValidationResult {
  const value = email.trim();
  if (!value) return fail("Email is required.");
  if (value.length > 254) return fail("Email is too long.");
  if (!EMAIL_PATTERN.test(value)) return fail("Invalid email address.");

  const [user, domain] = value.split("@");
  if (user.length > 64) return fail("Username is too long.");
  if (domain.split(".").some((label) => label.length > 63 || label.startsWith("-") || label.endsWith("-"))) {
    return fail("Domain name is invalid.");
  }
  return ok;
}

export function validateLength(value: string, label: string, min: number, max: number): ValidationResult {
  const length = value.trim().length;
  if (length < min) return fail(`${label} should be at least ${min} characters.`);
  if (length > max) return fail(`${label} should be no more than ${max} characters.`);
  return ok;
}

export type ContactFields = { name: string; subject: string; email: string; message: string };
export type ContactField = keyof ContactFields;

export const LIMITS = {
  name: { min: 2, max: 100 },
  subject: { min: 2, max: 150 },
  message: { min: 5, max: 1000 },
} as const;

/** Returns the first invalid field with its message, or null when the form is valid. */
export function validateContactForm(values: ContactFields): { field: ContactField; message: string } | null {
  const checks: [ContactField, ValidationResult][] = [
    ["name", validateLength(values.name, "Name", LIMITS.name.min, LIMITS.name.max)],
    ["subject", validateLength(values.subject, "Subject", LIMITS.subject.min, LIMITS.subject.max)],
    ["email", validateEmail(values.email)],
    ["message", validateLength(values.message, "Message", LIMITS.message.min, LIMITS.message.max)],
  ];
  for (const [field, result] of checks) {
    if (!result.valid) return { field, message: result.message };
  }
  return null;
}
