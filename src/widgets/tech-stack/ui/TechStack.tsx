import { SkillGroupCard, skillGroups, skillLogos } from "@/entities/skill";
import IconCloud from "@/shared/ui/icon-cloud";
import Section from "@/shared/ui/section";

export default function TechStack() {
  return (
    <Section id="skills" eyebrow="Tech Stack" title="Tools I Ship With" muted>
      <div className="mx-auto mb-12 max-w-md" aria-hidden="true">
        <IconCloud icons={skillLogos} />
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
