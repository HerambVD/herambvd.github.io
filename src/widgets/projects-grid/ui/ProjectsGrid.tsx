import { ProjectCard, projects } from "@/entities/project";
import Section from "@/shared/ui/section";

/** Pass headingLevel="h1" when the grid is the main content of its page. */
export default function ProjectsGrid({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work" headingLevel={headingLevel}>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
