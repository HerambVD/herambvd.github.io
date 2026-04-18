"use client";

import { Badge } from "@/components/ui/badge";
import { Code2, Zap, Brain, Database, Layers, Lightbulb } from 'lucide-react';

const capabilities = [
  {
    icon: Layers,
    title: "Full-Stack Product Development",
    description: "Building complete products from architecture to deployment. End-to-end development across web, mobile (iOS), and backend systems with focus on user experience and scalability.",
    expertise: ["Product Architecture", "Cross-platform Development", "API Design", "CI/CD Automation"],
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Zap,
    title: "Scalable Systems & Infrastructure",
    description: "Designing and building high-performance, fault-tolerant systems capable of processing massive datasets and handling millions of requests. Infrastructure as Code and cloud-native approaches.",
    expertise: ["System Architecture", "Distributed Systems", "Kubernetes & Docker", "Database Optimization", "Performance Engineering"],
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Brain,
    title: "AI/ML & Intelligent Systems",
    description: "Building AI-powered solutions including LLM-based applications with RAG (Retrieval-Augmented Generation), computer vision systems, and ML pipelines for real-world problems.",
    expertise: ["LLMs & Prompt Engineering", "Vector Embeddings & RAG", "Computer Vision", "Deep Learning", "ML Pipelines"],
    bgColor: "bg-green-50 dark:bg-green-950/20",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Building data pipelines, ETL processes, and analytics systems for high-volume financial, medical, and operational data. Optimized query performance and real-time insights.",
    expertise: ["Data Pipeline Design", "SQL Optimization", "Data Warehouse Architecture", "ETL Automation", "Real-time Analytics"],
    bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-blue-500",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: Code2,
    title: "Problem-Solving & Innovation",
    description: "Approaching complex challenges with creative technical solutions. Published open-source tools, research-backed implementations, and novel approaches to domain-specific problems.",
    expertise: ["Algorithmic Thinking", "Research & Development", "Open-source Contributions", "Technical Writing", "Innovation Leadership"],
    bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Lightbulb,
    title: "Real-World Impact & Delivery",
    description: "Delivering solutions that create measurable business value and real-world impact. From FDA clinical trials to enterprise financial systems, proven ability to ship production systems.",
    expertise: ["FDA Compliance", "Enterprise Systems", "Performance at Scale", "Reliability Engineering", "User-Centric Design"],
    bgColor: "bg-red-50 dark:bg-red-950/20",
    gradientFrom: "from-red-500",
    gradientTo: "to-rose-500",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600 dark:text-red-400",
  }
];

export default function CapabilityMatrix() {
  return (
    <section id="capabilities" className="pt-20 dark:bg-gray-900">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-4xl font-bold dark:text-white text-blue-950 mb-4">
            Engineering Capabilities
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A problem-solving engineer who builds scalable products, implements cutting-edge AI solutions, and delivers measurable impact. Expertise spans full-stack development, system architecture, and intelligent systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-lg border border-border/50 ${item.bgColor} hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                <div className="relative">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`inline-block p-3 rounded-lg ${item.iconBg}`}>
                      <Icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground flex-1">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.expertise.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs bg-foreground/5 hover:bg-foreground/10 transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Technologies Section */}
        <div className="border-t border-border/50 pt-12">
          <h2 className="font-orbitron text-2xl font-bold text-center mb-8 text-foreground">
            Technical Foundation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">🔧 Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript/TypeScript", "Swift", "Java", "C++", "SQL", "React", "FastAPI", "Next.js"].map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-background/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">🚀 Infrastructure & AI</h3>
              <div className="flex flex-wrap gap-2">
                {["Kubernetes", "Docker", "AWS", "Azure", "LLMs", "Vector Embeddings", "RAG", "TensorFlow", "PyTorch"].map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-background/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
