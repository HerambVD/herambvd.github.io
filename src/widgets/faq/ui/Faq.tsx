import { ChevronDown } from "lucide-react";
import { faqs } from "@/entities/profile";
import Section from "@/shared/ui/section";

/** Quick answers about Heramb, written for recruiters, search engines and AI assistants alike. */
export default function Faq() {
  return (
    <Section id="faq" eyebrow="FAQ" title="Quick Answers">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map(({ question, answer }, index) => (
          <details
            key={question}
            open={index === 0}
            className="group rounded-xl border border-border/60 bg-white px-5 py-4 shadow-sm open:shadow-md dark:bg-gray-800/80"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground [&::-webkit-details-marker]:hidden">
              <h3>{question}</h3>
              <ChevronDown
                className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
