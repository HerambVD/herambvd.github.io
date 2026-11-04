import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { impactStats, profile, SocialLinks } from "@/entities/profile";
import { DownloadResumeButton } from "@/features/download-resume";

const BLOBS = [
  "top-1/4 left-1/4 bg-primary/20",
  "top-1/3 right-1/4 bg-violet-500/20 animation-delay-2000",
  "bottom-1/4 left-1/3 bg-blue-500/20 animation-delay-4000",
];

const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -inset-[10px] opacity-50">
      {BLOBS.map((position) => (
        <div
          key={position}
          className={`absolute h-96 w-96 rounded-full mix-blend-multiply blur-xl filter animate-blob dark:mix-blend-overlay ${position}`}
        />
      ))}
    </div>
  </div>
);

const Portrait = () => (
  <div className="group relative mx-auto w-fit">
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-violet-500 to-blue-500 opacity-75 blur transition duration-500 group-hover:opacity-100" />
    <div className="relative h-44 w-44 overflow-hidden rounded-full md:h-60 md:w-60">
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
      <img
        src={profile.photo}
        alt={`${profile.name}, ${profile.title}`}
        width={240}
        height={240}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  </div>
);

const ImpactStats = () => (
  <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
    {impactStats.map(({ value, label }) => (
      <div key={label} className="bg-background/80 px-4 py-4 text-center">
        <dt className="sr-only">{label}</dt>
        <dd>
          <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text font-orbitron text-2xl font-bold text-transparent md:text-3xl">
            {value}
          </span>
          <span className="mt-1 block text-xs text-muted-foreground">{label}</span>
        </dd>
      </div>
    ))}
  </dl>
);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/95 p-4">
      <BackgroundBlobs />

      <article className="relative mx-auto w-full max-w-6xl rounded-2xl border border-border bg-background/50 shadow-2xl backdrop-blur-sm dark:bg-background/20">
        <div className="grid items-center gap-10 p-8 md:grid-cols-[1fr,1.6fr] md:p-12">
          <div className="space-y-6">
            <Portrait />
            <SocialLinks
              withEmail
              className="justify-center"
              linkClassName="rounded-full bg-background/80 p-2.5 text-foreground hover:bg-blue-600 hover:text-white"
            />
          </div>

          <div className="space-y-6 text-center md:text-left">
            <header className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 dark:text-cyan-400">
                {profile.title} · {profile.company}
              </p>
              <h1 className="font-orbitron text-4xl md:text-6xl">
                <span className="bg-gradient-to-r from-primary via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl font-semibold text-foreground md:text-2xl">{profile.headline}</p>
              <p className="text-muted-foreground md:text-lg">{profile.summary}</p>
            </header>

            <ImpactStats />

            <div className="flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <DownloadResumeButton />
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-blue-500 hover:text-blue-600 dark:hover:text-cyan-400"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500" />
              {profile.availability}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
