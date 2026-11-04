import { ExperienceTimeline } from "@/widgets/experience-timeline";
import { Expertise } from "@/widgets/expertise";
import { Hero } from "@/widgets/hero";
import { ProjectsGrid } from "@/widgets/projects-grid";
import { TechStack } from "@/widgets/tech-stack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Expertise />
      <ExperienceTimeline />
      <ProjectsGrid />
      <TechStack />
    </>
  );
}
