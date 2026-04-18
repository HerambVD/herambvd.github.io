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
    <>
      <section id="tech-stack" className="pt-20 dark:bg-gray-900">
        <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32">
          <h1 className={`font-orbitron text-center font-bold dark:text-white text-4xl pb-4 my-4 text-blue-950`}>
            Technology Stack
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure, machine learning, and emerging AI technologies.
          </p>

          {/* Tech Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {techCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group p-6 rounded-lg border border-border/50 bg-gradient-to-br from-background to-background/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-block p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10`}>
                      <Icon className={`h-6 w-6 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} />
                    </div>
                    <Badge className={`bg-gradient-to-r ${item.color} text-white text-xs`}>
                      {item.proficiency}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {item.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Icon Cloud */}
          <div>
            <h2 className="text-center font-orbitron font-bold text-2xl mb-8 text-foreground/80">
              Complete Tech Ecosystem
            </h2>
            <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-2">
              <IconCloud iconSlugs={slugs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
