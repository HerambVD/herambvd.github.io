import { ArrowUpRight, Code2 } from "lucide-react";
import { Card } from "@/shared/ui/card";
import TagList from "@/shared/ui/tag-list";
import type { Project } from "../model/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { name, image, description, impact, link, techs } = project;
  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20">
            <Code2 className="h-14 w-14 text-muted-foreground" aria-hidden="true" />
          </div>
        )}
        {impact && (
          <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {impact}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-bold text-foreground">{name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1 font-mono text-sm text-blue-600 hover:underline dark:text-cyan-400"
          >
            {link.text}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
        <TagList tags={techs} className="mt-auto pt-2" />
      </div>
    </Card>
  );
}
