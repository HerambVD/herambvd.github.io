import { BLOG_URL, SCHEMA_IDS, SITE_URL } from "@/shared/config/site";
import { faqs, profile, socialLinks } from "../model/profile";

type PersonSchemaInput = {
  /** Schools, from the experience entity. */
  alumniOf: string[];
  /** Topics and technologies, from the skill entity. */
  knowsAbout: string[];
};

/** schema.org Person: the main entity of the site, referenced from every page by @id. */
export function personSchema({ alumniOf, knowsAbout }: PersonSchemaInput) {
  return {
    "@type": "Person",
    "@id": SCHEMA_IDS.person,
    name: profile.name,
    alternateName: profile.alternateNames,
    givenName: profile.givenName,
    familyName: profile.familyName,
    url: SITE_URL,
    image: `${SITE_URL}${profile.photo}`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.title,
    description: profile.bio,
    worksFor: { "@type": "Organization", name: profile.company },
    alumniOf: alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
    knowsAbout,
    sameAs: [...socialLinks.map((link) => link.href), BLOG_URL],
  };
}

/** schema.org FAQPage built from the same Q&A that is visible on the page. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}
