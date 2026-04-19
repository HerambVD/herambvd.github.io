"use client";

import { Badge } from "@/components/ui/badge";
import { Code2, Brain, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering & Systems",
    description: "Full-stack development, scalable architectures, and cloud infrastructure. Building robust systems that handle millions of requests with fault-tolerant design.",
    expertise: ["System Architecture", "Distributed Systems", "API Design", "Cloud Infrastructure", "Performance Optimization"],
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Zap,
    title: "Workflow Orchestration & Automation",
    description: "Automating complex data pipelines and workflows. Building CI/CD systems, data ingestion automation, and enterprise-grade orchestration platforms.",
    expertise: ["Temporal Workflows", "Data Pipelines", "CI/CD Automation", "ETL Systems", "Infrastructure as Code"],
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Brain,
    title: "AI/LLMs & RAG Systems",
    description: "Building intelligent applications with LLMs, vector embeddings, and Retrieval-Augmented Generation. Creating AI-powered features that understand context and deliver insights.",
    expertise: ["LLMs & Prompt Engineering", "Vector Embeddings & RAG", "AI Insights Engines", "NLP Systems", "ML Pipelines"],
    bgColor: "bg-green-50 dark:bg-green-950/20",
    iconColor: "text-green-600 dark:text-green-400",
  }
];

export default function CapabilityMatrix() {
  return (
    <section id="capabilities" className="pb-16 dark:bg-gray-900">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pb-8">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-4xl font-bold dark:text-white text-blue-950 mb-4">
            Core Expertise
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Problem-solving engineer specializing in scalable systems, intelligent workflows, and AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 pb-8">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-lg border border-border/50 ${item.bgColor} hover:border-primary/50 hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-foreground/5`}>
                    <Icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.expertise.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
