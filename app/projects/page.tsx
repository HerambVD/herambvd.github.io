import type { Metadata } from "next";
import { pageMetadata } from "@/shared/lib/page-metadata";
import { ProjectsPage } from "@/views/projects";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Featured work by Heramb Devbhankar: cloud-native data platforms, GenAI text-to-SQL agents and open-source NLP.",
  path: "/projects",
});

export default ProjectsPage;
