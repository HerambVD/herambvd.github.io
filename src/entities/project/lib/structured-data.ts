import { SCHEMA_IDS, SITE_URL } from "@/shared/config/site";
import { projects } from "../model/projects";

const absolute = (src: string) => (src.startsWith("/") ? `${SITE_URL}${src}` : src);

/** schema.org ItemList of the featured projects, each credited to the site owner. */
export function projectsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured projects by Heramb Devbhankar",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        keywords: project.techs.join(", "),
        ...(project.image && { image: absolute(project.image) }),
        ...(project.link && { url: project.link.href }),
        author: { "@id": SCHEMA_IDS.person },
      },
    })),
  };
}
