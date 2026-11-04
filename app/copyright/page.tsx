import type { Metadata } from "next";
import { pageMetadata } from "@/shared/lib/page-metadata";
import { CopyrightPage } from "@/views/copyright";

export const metadata: Metadata = pageMetadata({
  title: "Copyright",
  description: "Copyright and terms of use for heramb.tech.",
  path: "/copyright",
});

export default CopyrightPage;
