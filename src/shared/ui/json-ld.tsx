import { serializeJsonLd } from "@/shared/lib/json-ld";

/** Embeds schema.org structured data (JSON-LD) in the page for search engines and AI crawlers. */
export default function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }} />;
}
