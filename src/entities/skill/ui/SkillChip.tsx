import BrandLogo from "@/shared/ui/brand-logo";
import type { Skill } from "../model/skills";

/** Pill with a skill's logo (or fallback icon) and name. */
export default function SkillChip({ skill }: { skill: Skill }) {
  const { name, logo, icon: Icon } = skill;
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/60 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-blue-500/50">
      {logo ? (
        <BrandLogo icon={logo} />
      ) : Icon ? (
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
      ) : null}
      {name}
    </span>
  );
}
