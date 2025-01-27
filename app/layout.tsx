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
  title: "Heramb Devbhankar | Software Engineer | Personal portfolio",
  description: "Heramb Devbhankar personal portfolio",
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
        <meta
          name="keywords"
          content="Machine Learning, Data Science, web development, mobile app development, portfolio, Heramb Devbhankar"
        />
        <meta name="author" content="Heramb Devbhankar" />
        <meta property="og:title" content="Heramb- Web and Mobile Developer Portfolio" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Heramb Devbhankar Portfolio" />
        <meta property="og:description" content="Discover my work in Machine Learning, web and mobile app development, and more." />
        <meta name="twitter:title" content="Heramb - Web and Mobile Developer Portfolio" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
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
