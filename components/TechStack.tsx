"use client";

import Responsive from "@/utils/googleADS/Responsive";
import IconCloud from "@/components/ui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "django",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "nginx",
  "python",
  "mysql",
  "databricks",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "xcode",
  "pyspark",
  "figma",
  "swiftui",
  "flask",
  "opencv",
  "ios",
  "terraform",
  "cplusplus",
  "swift",
  "tensorflow",
  "llm",
  "gpt"
];

const TechStack = () => {
  return (
    <>
      <section id="tech-stack" className="pt-20 dark:bg-gray-900">

          <h1
            className={`font-orbitron text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
          >
            Technology Stack
          </h1>
          <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-2">
            <IconCloud iconSlugs={slugs} />
          </div>
          </section>
    </>
  );
};

export default TechStack;
