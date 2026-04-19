// import BlogSection from "@/components/blog/BlogSection";
import Profile from "@/components/Profile";
import Skills from "@/components/skills/Skills";
import FAQ from "@/components/faq";
import CapabilityMatrix from "@/components/CapabilityMatrix";
import Projects from "@/components/projects/Projects";
import TechStack from "@/components/TechStack";
// import Report from "@/components/Report";
import Experience from "@/components/Experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heramb Devbhankar | Software Engineer & Developer | Portfolio",
  description: "Portfolio of Heramb Devbhankar - Software Engineer from USA. Explore projects, skills, and achievements in full-stack development, AI, and cutting-edge technologies.",
  keywords: "Heramb, Heramb Devbhankar, heramb.tech, Developer Heramb, Heramb Kalyan, Heramb USC, Heramb at USC, Heramb Apollo, Heramb SAG AFTRA, Heramb in USA, software engineer, developer, portfolio",
};

export default function page() {
  return (
    <>
      <Profile />
      <CapabilityMatrix />
      <Experience />
      <Projects />
      <TechStack />
      <Skills />
      {/* <BlogSection /> */}
      {/* <FAQ /> */}
      {/* <Report /> */}
    </>
  );
}
