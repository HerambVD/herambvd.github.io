import type { LucideIcon } from "lucide-react";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";
import { profile, SocialLinks } from "@/entities/profile";
import { ContactForm } from "@/features/contact-form";
import { DownloadResumeButton } from "@/features/download-resume";
import { Card } from "@/shared/ui/card";

type ContactItem = { icon: LucideIcon; label: string; value: string; href?: string };

export const CONTACT_ITEMS: ContactItem[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Briefcase, label: "Role", value: `${profile.title} · ${profile.company}` },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-20 md:px-10">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">Contact</p>
        <h1 className="font-orbitron text-4xl font-bold text-blue-950 md:text-5xl dark:text-white">Let&apos;s talk</h1>
        <p className="mt-4 text-muted-foreground">
          Hiring for a senior backend or AI role? I usually reply within 24 hours.
        </p>
      </header>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr,1.3fr]">
        <Card className="flex flex-col gap-6 p-6">
          <dl className="space-y-4">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
                  <dd className="text-foreground">
                    {href ? (
                      <a href={href} className="hover:underline">
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
            {profile.availability}
          </p>
          <SocialLinks linkClassName="text-muted-foreground hover:text-foreground" />
          <div className="mt-auto">
            <DownloadResumeButton />
          </div>
        </Card>

        <Card className="p-6">
          <ContactForm />
        </Card>
      </div>
    </div>
  );
}
