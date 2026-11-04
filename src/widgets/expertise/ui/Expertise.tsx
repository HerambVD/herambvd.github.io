import { expertise, type Expertise as ExpertiseItem } from "@/entities/skill";
import Section from "@/shared/ui/section";

const TONES: Record<ExpertiseItem["tone"], string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  green: "bg-green-500/10 text-green-600 dark:text-green-400",
};

export default function Expertise() {
  return (
    <Section id="expertise" eyebrow="What I do" title="Core Expertise">
      <div className="grid gap-6 md:grid-cols-3">
        {expertise.map(({ icon: Icon, title, description, tone }) => (
          <article
            key={title}
            className="rounded-xl border border-border/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg"
          >
            <span className={`mb-4 inline-flex rounded-lg p-2.5 ${TONES[tone]}`}>
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
