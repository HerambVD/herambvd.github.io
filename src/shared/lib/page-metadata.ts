import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_OWNER } from "@/shared/config/site";

type PageMetadataInput = { title: string; description: string; path: string };

/**
 * Complete metadata for a sub-page. Next.js replaces (rather than merges) the layout's
 * openGraph/twitter objects when a page sets them, so each page needs the full set.
 */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  // The layout's title template doesn't apply to Open Graph / Twitter titles.
  const shareTitle = `${title} | ${SITE_OWNER}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", title: shareTitle, description, url: path, siteName: SITE_NAME, locale: "en_US", images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title: shareTitle, description, images: [OG_IMAGE.url] },
  };
}
