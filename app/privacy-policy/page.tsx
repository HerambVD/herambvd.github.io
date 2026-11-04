import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/views/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Heramb Devbhankar",
  description: "What information heramb.tech collects (Google Analytics and the contact form) and how it is used.",
  alternates: { canonical: "/privacy-policy" },
};

export default PrivacyPolicyPage;
