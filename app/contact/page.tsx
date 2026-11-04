import type { Metadata } from "next";
import { pageMetadata } from "@/shared/lib/page-metadata";
import { ContactPage } from "@/views/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Heramb Devbhankar, Senior Software Engineer (backend, distributed systems, Generative AI).",
  path: "/contact",
});

export default ContactPage;
