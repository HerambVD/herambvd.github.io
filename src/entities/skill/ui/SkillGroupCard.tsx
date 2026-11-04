import type { SkillGroup } from "../model/skills";
import SkillChip from "./SkillChip";

export default function SkillGroupCard({ group }: { group: SkillGroup }) {
  const Icon = group.icon;
  return (
    <article className="rounded-xl border border-border/60 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800/80">
      <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold text-foreground">
        <span className="rounded-lg bg-blue-500/10 p-2 text-blue-600 dark:text-cyan-400">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {group.title}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li key={skill.name}>
            <SkillChip skill={skill} />
          </li>
        ))}
      </ul>
    </article>
  );
}
