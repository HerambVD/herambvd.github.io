"use client";

import Responsive from "@/utils/googleADS/Responsive";
import IconCloud from "@/components/ui/icon-cloud";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Brain, Hammer, Database } from 'lucide-react';

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

const techCategories = [
  {
    icon: Code2,
    category: "🔙 Backend",
    proficiency: "Expert",
    color: "from-blue-500 to-cyan-500",
    techs: ["Python", "FastAPI", "Django", "Java", "Node.js", "Express", "C++"]
  },
  {
    icon: Code2,
    category: "🎨 Frontend",
    proficiency: "Expert",
    color: "from-purple-500 to-pink-500",
    techs: ["React", "TypeScript", "Next.js", "JavaScript", "Swift", "SwiftUI", "Flutter"]
  },
  {
    icon: Cloud,
    category: "☁️ Cloud & DevOps",
    proficiency: "Advanced",
    color: "from-orange-500 to-red-500",
    techs: ["AWS", "Docker", "Kubernetes", "Nginx", "Terraform", "GitHub Actions"]
  },
  {
    icon: Brain,
    category: "🤖 ML & AI",
    proficiency: "Advanced",
    color: "from-green-500 to-emerald-500",
    techs: ["TensorFlow", "PyTorch", "OpenCV", "PySpark", "LSTM", "CNN", "LLM", "GPT"]
  },
  {
    icon: Database,
    category: "📊 Data & Databases",
    proficiency: "Expert",
    color: "from-indigo-500 to-blue-500",
    techs: ["PostgreSQL", "MySQL", "SQL Server", "Prisma", "Redis", "Databricks"]
  },
  {
    icon: Hammer,
    category: "🛠️ Tools & Dev",
    proficiency: "Advanced",
    color: "from-yellow-500 to-orange-500",
    techs: ["Git", "GitHub", "GitLab", "Jira", "VSCode", "Xcode", "Figma", "Cypress"]
  }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="dark:bg-gray-900 pt-20 pb-20">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32">
        <div>
          <h2 className="text-center font-orbitron font-bold text-2xl mb-8 text-foreground/80">
            Complete Tech Ecosystem
          </h2>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border/30 bg-background/80 p-8 shadow-xl shadow-black/5">
            <div className="flex items-center justify-center">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
