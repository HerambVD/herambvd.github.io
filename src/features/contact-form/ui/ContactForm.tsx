"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { sendContactMessage } from "../api/send-message";
import { notify } from "@/shared/lib/notify";
import { validateContactForm, type ContactField, type ContactFields } from "../model/validation";
import Alert from "@/shared/ui/alert";
import Spinner from "@/shared/ui/spinner";
import FormField from "./FormField";

const EMPTY: ContactFields = { name: "", subject: "", email: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<ContactFields>(EMPTY);
  const [invalidField, setInvalidField] = useState<ContactField | null>(null);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInvalidField(null);
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const problem = validateContactForm(values);
    if (problem) {
      setInvalidField(problem.field);
      notify.error(problem.message);
      return;
    }

    setError("");
    setSending(true);
    try {
      await sendContactMessage(values);
      notify.success("Message sent!");
      setValues(EMPTY);
    } catch {
      setError("Sorry, the message could not be sent. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  const field = (name: ContactField) => ({
    name,
    value: values[name],
    invalid: invalidField === name,
    onChange,
  });

  return (
    <div>
      <h2 className="pb-5 text-2xl font-semibold text-foreground">Send a message</h2>
      {sending && <Spinner />}
      {error && <Alert message={error} />}

      <form onSubmit={onSubmit} noValidate>
        <FormField {...field("name")} label="Name" placeholder="Jane" autoComplete="name" />
        <FormField {...field("subject")} label="Subject" placeholder="Subject" />
        <FormField {...field("email")} label="Email" type="email" placeholder="Email" autoComplete="email" />
        <FormField {...field("message")} label="Message" placeholder="Message" multiline />
        <button
          type="submit"
          disabled={sending}
          className="flex items-center justify-center gap-2 bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{sending ? "Sending..." : "Send"}</span>
          <Send size={20} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
