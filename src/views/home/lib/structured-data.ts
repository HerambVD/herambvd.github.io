import { education } from "@/entities/experience";
import { faqSchema, personSchema } from "@/entities/profile";
import { expertise, skillGroups } from "@/entities/skill";
import { SCHEMA_IDS, SITE_URL } from "@/shared/config/site";

/** Topics for Person.knowsAbout: headline expertise first, then every listed skill. */
export function knowsAbout(): string[] {
  const topics = [...expertise.map((e) => e.title), ...skillGroups.flatMap((g) => g.skills.map((s) => s.name))];
  return [...new Set(topics)];
}

/** Structured data for the home page: a ProfilePage about Heramb, plus the FAQ. */
export function homeStructuredData(buildDate = new Date()) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: SITE_URL,
      dateModified: buildDate.toISOString(),
      isPartOf: { "@id": SCHEMA_IDS.website },
      mainEntity: personSchema({
        alumniOf: education.map((degree) => degree.school),
        knowsAbout: knowsAbout(),
      }),
    },
    faqSchema(),
  ] as const;
}
