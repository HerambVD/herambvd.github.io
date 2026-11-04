import { GraduationCap } from "lucide-react";
import type { Degree } from "../model/experience";

export default function EducationCard({ degree }: { degree: Degree }) {
  return (
    <article className="flex items-start gap-3 rounded-xl border border-border/60 bg-white p-5 shadow-sm dark:bg-gray-800/80">
      <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
      <div>
        <h4 className="font-semibold dark:text-white">{degree.degree}</h4>
        <p className="text-sm text-muted-foreground">{degree.school}</p>
        <p className="text-xs text-muted-foreground">{degree.period}</p>
      </div>
    </article>
  );
}
