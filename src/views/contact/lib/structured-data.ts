import { profile } from "@/entities/profile";
import { SCHEMA_IDS, SITE_URL } from "@/shared/config/site";

/** schema.org ContactPage pointing at the Person defined on the home page. */
export function contactStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: `Contact ${profile.name}`,
    isPartOf: { "@id": SCHEMA_IDS.website },
    about: { "@id": SCHEMA_IDS.person },
    mainEntity: {
      "@id": SCHEMA_IDS.person,
      "@type": "Person",
      name: profile.name,
      email: `mailto:${profile.email}`,
    },
  };
}
