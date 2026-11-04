import JsonLd from "@/shared/ui/json-ld";
import { ExperienceTimeline } from "@/widgets/experience-timeline";
import { Expertise } from "@/widgets/expertise";
import { Faq } from "@/widgets/faq";
import { Hero } from "@/widgets/hero";
import { ProjectsGrid } from "@/widgets/projects-grid";
import { TechStack } from "@/widgets/tech-stack";
import { homeStructuredData } from "../lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeStructuredData()} />
      <Hero />
      <Expertise />
      <ExperienceTimeline />
      <ProjectsGrid />
      <TechStack />
      <Faq />
    </>
  );
}
