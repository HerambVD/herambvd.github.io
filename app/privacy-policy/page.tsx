import type { Metadata } from "next";
import { pageMetadata } from "@/shared/lib/page-metadata";
import { PrivacyPolicyPage } from "@/views/privacy-policy";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "What information heramb.tech collects (Google Analytics and the contact form) and how it is used.",
  path: "/privacy-policy",
});

export default PrivacyPolicyPage;
