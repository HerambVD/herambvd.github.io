import { Briefcase, GraduationCap } from "lucide-react";
import TagList from "@/shared/ui/tag-list";
import type { Role } from "../model/experience";

/** One timeline entry. Must be rendered inside a relatively positioned <ol>. */
export default function RoleCard({ role }: { role: Role }) {
  const Icon = role.kind === "research" ? GraduationCap : Briefcase;
  return (
    <li className="relative mb-8 ml-8 last:mb-0">
      <span className="absolute -left-[2.85rem] top-6 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-gray-100 dark:bg-blue-700 dark:ring-gray-900">
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      </span>

      <article className="rounded-xl border border-border/60 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800/80">
        <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <div>
            <h3 className="text-lg font-semibold dark:text-white">{role.title}</h3>
            <p className="text-sm font-medium text-blue-700 dark:text-cyan-300">
              {role.organization} <span className="font-normal text-muted-foreground">· {role.location}</span>
            </p>
          </div>
          <p className="shrink-0 text-xs font-medium text-muted-foreground">{role.period}</p>
        </header>

        {role.impact.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key results">
            {role.impact.map((result) => (
              <li
                key={result}
                className="rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-cyan-300"
              >
                {result}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-600 marker:text-blue-500 dark:text-gray-300">
          {role.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <TagList tags={role.tags} className="mt-4" />
      </article>
    </li>
  );
}
