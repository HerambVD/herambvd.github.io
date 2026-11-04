import { education, EducationCard, experience, RoleCard } from "@/entities/experience";
import Section from "@/shared/ui/section";

export default function ExperienceTimeline() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've Made an Impact" muted>
      <div className="mx-auto max-w-4xl">
        <ol className="relative ml-3.5 border-l-2 border-blue-500/20">
          {experience.map((role) => (
            <RoleCard key={`${role.organization}-${role.period}`} role={role} />
          ))}
        </ol>

        <h3 className="mb-6 mt-14 text-center font-orbitron text-2xl font-bold text-blue-950 dark:text-white">Education</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((degree) => (
            <EducationCard key={degree.degree} degree={degree} />
          ))}
        </div>
      </div>
    </Section>
  );
}
