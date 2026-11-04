/**
 * Serialize structured data for a <script type="application/ld+json"> tag.
 * "<" is escaped so that text like "</script>" inside the data can't end the tag early.
 */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
