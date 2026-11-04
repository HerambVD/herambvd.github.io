import { ProjectCard, projects } from "@/entities/project";
import Section from "@/shared/ui/section";

export default function ProjectsGrid() {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
