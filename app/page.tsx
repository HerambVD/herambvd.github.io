// import BlogSection from "@/components/blog/BlogSection";
import Profile from "@/components/Profile";
import Skills from "@/components/skills/Skills";
import FAQ from "@/components/faq";
import CapabilityMatrix from "@/components/CapabilityMatrix";
import Projects from "@/components/projects/Projects";
// import Report from "@/components/Report";
import Experience from "@/components/Experience";

export default function page() {
  return (
    <>
      <Profile />
      <CapabilityMatrix />
      <Experience />
      <Projects />
      <Skills />
      {/* <BlogSection /> */}
      {/* <FAQ /> */}
      {/* <Report /> */}
    </>
  );
}
