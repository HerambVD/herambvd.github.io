import "./globals.css";
import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import { profile, socialLinks } from "@/entities/profile";
import { Analytics } from "@/features/analytics";
import { ScrollToTop } from "@/features/scroll-to-top";
import { GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/shared/config/site";
import { Footer } from "@/widgets/footer";
import { Sidebar } from "@/widgets/sidebar";
import Providers from "./providers";

const TITLE = `${profile.name} | ${profile.title}`;
const DESCRIPTION = `Portfolio of ${profile.name}, ${profile.title} specializing in backend systems, distributed systems, cloud-native data platforms and Generative AI.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${TITLE} | Portfolio`,
  description: DESCRIPTION,
  keywords:
    "Heramb, Heramb Devbhankar, heramb.tech, Developer Heramb, Heramb USC, Heramb Apollo, Senior Software Engineer, backend engineer, distributed systems, cloud-native data platforms, Generative AI, LLM agents, FastAPI, Kubernetes, portfolio",
  authors: [{ name: profile.name, url: SITE_URL }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: SITE_NAME, type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  icons: { icon: "/favicon.ico" },
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent" },
  themeColor: "#000000",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: SITE_URL,
    jobTitle: profile.title,
    worksFor: { "@type": "Organization", name: profile.company },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Southern California" },
    sameAs: socialLinks.map((link) => link.href),
    description: `${profile.headline} ${profile.summary}`,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
  },
];

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
