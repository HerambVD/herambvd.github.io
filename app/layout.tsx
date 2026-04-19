import "./globals.css";
import { Orbitron, Edu_NSW_ACT_Foundation } from 'next/font/google';
import Nav from "../components/navigation/Navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Theme from "../context/theme-provider";
// import HeadScript from "@/components/HeadScript";

const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const ScrollUp = dynamic(() => import("../components/ui/ScrollUp"), { ssr: false });


export const metadata: Metadata = {
  title: "Heramb Devbhankar | Software Engineer & Developer | Portfolio",
  description: "Portfolio of Heramb Devbhankar - Software Engineer from USA. Explore projects, skills, and achievements in full-stack development, AI, and cutting-edge technologies.",
  keywords: "Heramb, Heramb Devbhankar, heramb.tech, Developer Heramb, Heramb Kalyan, Heramb USC, Heramb at USC, Heramb Apollo, Heramb SAG AFTRA, Heramb in USA, software engineer, full-stack developer, portfolio, projects, skills, technology",
  openGraph: {
    title: "Heramb Devbhankar | Software Engineer & Developer",
    description: "Discover the portfolio of Heramb Devbhankar - experienced software engineer with expertise in full-stack development, AI, and modern technologies.",
    url: "https://heramb.tech",
    siteName: "Heramb Devbhankar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heramb Devbhankar | Software Engineer & Developer",
    description: "Portfolio of Heramb Devbhankar - Software Engineer from USA",
  },
  robots: "index, follow",
  authors: [{ name: "Heramb Devbhankar" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '500', '600', '700'],
});

export const eduNSW = Edu_NSW_ACT_Foundation({
  subsets: ['latin'],
  variable: '--font-edu-nsw',
  weight: ['400'], // Only one weight is available for this font
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Heramb, Heramb Devbhankar, heramb.tech, Developer Heramb, Heramb Kalyan, Heramb USC, Heramb at USC, Heramb Apollo, Heramb SAG AFTRA, Heramb in USA, software engineer, developer, full-stack development, web development, mobile development, AI, machine learning, data science, portfolio, projects, skills, experience, technology, innovation, coding, programming, tech stack, career, professional"
        />
        <meta name="author" content="Heramb Devbhankar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="description" content="Portfolio of Heramb Devbhankar - Software Engineer from USA. Explore projects, skills, and achievements in full-stack development, AI, and cutting-edge technologies." />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://heramb.tech" />
        <link rel="alternate" hrefLang="en" href="https://heramb.tech" />
        <meta property="og:title" content="Heramb Devbhankar | Software Engineer & Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://heramb.tech" />
        <meta property="og:site_name" content="Heramb Devbhankar Portfolio" />
        <meta property="og:description" content="Discover the portfolio of Heramb Devbhankar - experienced software engineer with expertise in full-stack development, AI, and modern technologies." />
        <meta name="twitter:title" content="Heramb Devbhankar | Software Engineer & Developer" />
        <meta name="twitter:description" content="Portfolio of Heramb Devbhankar - Software Engineer from USA" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Heramb Devbhankar",
              "url": "https://heramb.tech",
              "jobTitle": "Software Engineer",
              "sameAs": [
                "https://github.com",
                "https://linkedin.com",
                "https://twitter.com"
              ],
              "description": "Software Engineer from USA with expertise in full-stack development, AI, and modern technologies"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Heramb Devbhankar Portfolio",
              "url": "https://heramb.tech",
              "description": "Portfolio of Heramb Devbhankar - Software Engineer from USA",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://heramb.tech/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${orbitron.variable} ${eduNSW.variable}`}>
        <Theme>
          <Nav />
          <main>{children}</main>
          <ScrollUp />
          <Footer />
        </Theme>
        {/* <HeadScript /> */}
      </body>
    </html>
  );
}
