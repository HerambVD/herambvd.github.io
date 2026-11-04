import { cn } from "@/shared/lib/cn";

type SectionProps = {
  id: string;
  /** Small label above the title, e.g. "Experience". */
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Grey background, to alternate with the plain background between sections. */
  muted?: boolean;
  children: React.ReactNode;
};

/** Standard page section: anchor id, eyebrow label, centered heading, optional subtitle. */
export default function Section({ id, eyebrow, title, subtitle, muted = false, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-4 py-20", muted ? "bg-gray-100 dark:bg-gray-900/60" : "bg-background")}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-20 xl:px-32">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="font-orbitron text-3xl font-bold text-blue-950 md:text-4xl dark:text-white">
            {title}
          </h2>
          {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
