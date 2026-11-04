import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Orbitron } from "next/font/google";
import { profile } from "@/entities/profile";
import { Analytics } from "@/features/analytics";
import { ScrollToTop } from "@/features/scroll-to-top";
import { GA_MEASUREMENT_ID, OG_IMAGE, SCHEMA_IDS, SITE_NAME, SITE_URL, SITE_VERIFICATION } from "@/shared/config/site";
import JsonLd from "@/shared/ui/json-ld";
import { Footer } from "@/widgets/footer";
import { Sidebar } from "@/widgets/sidebar";
import Providers from "./providers";

const TITLE = `${profile.name} | ${profile.title}`;
const DESCRIPTION = `${profile.name} (${profile.fullName}) is a ${profile.title} at ${profile.company} specializing in backend systems, distributed systems, cloud-native data platforms and Generative AI.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${profile.name}` },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    ...profile.alternateNames,
    profile.name,
    "Heramb Devbhankar software engineer",
    "Heramb Devbhankar Apollo",
    "Heramb Devbhankar USC",
    "Senior Software Engineer",
    "backend engineer",
    "distributed systems",
    "Generative AI",
    "LLM agents",
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    type: "profile",
    firstName: profile.givenName,
    lastName: profile.familyName,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    url: "/",
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, creator: "@heramb_", images: [OG_IMAGE.url] },
  verification: {
    ...(SITE_VERIFICATION.google && { google: SITE_VERIFICATION.google }),
    ...(SITE_VERIFICATION.bing && { other: { "msvalidate.01": SITE_VERIFICATION.bing } }),
  },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.json",
  appleWebApp: { capable: true, title: profile.name, statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

/** Site-wide structured data. The full Person record lives on the home page (ProfilePage). */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SCHEMA_IDS.website,
  name: SITE_NAME,
  alternateName: ["heramb.tech", profile.name],
  url: SITE_URL,
  description: DESCRIPTION,
  inLanguage: "en",
  author: { "@id": SCHEMA_IDS.person },
  publisher: { "@id": SCHEMA_IDS.person },
};

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <JsonLd data={websiteJsonLd} />
      </head>
      <body className={orbitron.variable}>
        <Providers>
          <Sidebar />
          <main>{children}</main>
          <ScrollToTop />
          <Footer />
        </Providers>
        <Analytics measurementId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
