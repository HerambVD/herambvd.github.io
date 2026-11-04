import emailjs from "@emailjs/browser";
import type { ContactFields } from "../model/validation";
import { profile } from "@/entities/profile";

// EmailJS public identifiers (safe to ship to the browser).
const SERVICE_ID = "service_jebasxm";
const TEMPLATE_ID = "template_mduuz2e";
const PUBLIC_KEY = "9QHGoEPmDaBELUbZn";

export function toTemplateParams(values: ContactFields) {
  const name = values.name.trim();
  const email = values.email.trim();
  return {
    user_name: name,
    to_name: profile.name,
    from_name: name,
    from_subject: values.subject.trim(),
    from_email: email,
    reply_to: email,
    message: values.message.trim(),
  };
}

/** Sends the contact form through EmailJS. Rejects on failure. */
export async function sendContactMessage(values: ContactFields): Promise<void> {
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, toTemplateParams(values), PUBLIC_KEY);
}
