import { projectsSchema } from "@/entities/project";
import JsonLd from "@/shared/ui/json-ld";
import { ProjectsGrid } from "@/widgets/projects-grid";

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={projectsSchema()} />
      <ProjectsGrid headingLevel="h1" />
    </>
  );
}
