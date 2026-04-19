"use client";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { usePathname } from "next/navigation";
import SeeMoreButton from "@/components/ui/SeeMoreButton";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Lightbulb, Award, Brain } from 'lucide-react';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Apollo Global Management",
    location: "El Segundo, CA",
    period: "Apr 2025 - Present",
    description: "Led architecture and development of enterprise-scale risk data management platform processing 70K+ financial datasets with 350+ columns. Engineered high-performance FastAPI services with advanced serialization techniques including Protocol Buffers for efficient data transmission and Redis distributed caching, achieving 60%+ reduction in API response times from 2.5s to under 1s. Migrated legacy monolithic systems to modern CI/CD pipelines on Azure Kubernetes Service, implementing GitOps with Flux for automated deployments, Docker containerization, and GitHub Actions for comprehensive testing and release automation. Built Temporal workflow orchestration for resilient data pipelines integrating quantitative models, position data, and risk metrics with fault-tolerant execution, scheduled polling, and automated retry mechanisms. Developed AI-powered insights engine using vector embeddings and LLMs with Retrieval-Augmented Generation (RAG) for contextual summarization of financial data, enabling intelligent daily highlights and trend analysis. Optimized SQL Server stored procedures and query performance, implementing advanced indexing strategies and query plan analysis to handle complex financial calculations at scale.",
    badges: [
      { icon: Zap, text: "60%+ API Performance" },
      { icon: Brain, text: "AI Summarization Engine" },
      { icon: Award, text: "Enterprise Migration" }
    ],
    tags: ["Python", "FastAPI", "Protocol Buffers", "Redis", "Temporal", "Kubernetes", "Azure", "GitOps", "LLMs", "RAG", "SQL Server", "CI/CD"],
    icon: <FaBriefcase />
  },
  {
    title: "Software Development Engineer",
    company: "SAG-AFTRA Foundation",
    location: "Los Angeles, CA",
    period: "May 2023 - Jan 2025",
    description: "Led an Agile team developing iOS (Swift) and Rails applications for actor profiling and resource management, overseeing full development lifecycle. Automated CI/CD pipelines with AWS load balancing. Enhanced backend efficiency through Rails Active Record and mailer systems, ensuring 99.9% uptime and seamless multi-platform integration.",
    badges: [
      { icon: TrendingUp, text: "99.9% Uptime" },
      { icon: Lightbulb, text: "Multi-platform" },
      { icon: Award, text: "Team Leadership" }
    ],
    tags: ["Swift", "Rails", "Python-Django", "AWS", "CI/CD", "Product Development"],
    icon: <FaBriefcase />,
  },
  {
    title: "Software Development Engineer",
    company: "Eye Labs Inc",
    location: "Santa Clara, CA",
    period: "Sep 2022 - Apr 2023",
    description: "Developed an iOS application using SwiftUI and Apple's Vision framework to detect eye anomalies via iPhone front camera. Implemented facial landmark algorithms for eye and face direction analysis. Delivered baseline product for FDA clinical trials successfully tested with real patients.",
    badges: [
      { icon: Award, text: "FDA Clinical Trials" },
      { icon: Brain, text: "Computer Vision" },
      { icon: TrendingUp, text: "Real Patient Impact" }
    ],
    tags: ["SwiftUI", "Vision Framework", "ML", "iOS", "UIKit", "Medical Device"],
    icon: <FaBriefcase />,
  },
  {
    title: "Research Assistant | M.S. Computer Science",
    institution: "University of Southern California",
    location: "Los Angeles, CA",
    period: "Apr 2021 - Aug 2022",
    description: "Researched and programmed approaches for tracking movements and gene expression in free-moving flies using GFP video. Trained and compared LSTM and CNN models for movement trajectory classification. Researched state-of-the-art face recognition using pure synthetic data, training StarGAN for data augmentation and multi-domain image translations.",
    badges: [
      { icon: Award, text: "Advanced Research" },
      { icon: Brain, text: "Deep Learning" },
      { icon: TrendingUp, text: "Computer Vision" }
    ],
    tags: ["LSTM", "CNN", "StarGAN", "Python", "TensorFlow", "Research"],
    icon: <FaGraduationCap />,
  },
  {
    title: "Software Development Engineer",
    institution: "IOTric",
    location: "India",
    period: "Aug 2019 - Dec 2020",
    description: "Created a web application for extracting text from distorted invoice/receipt images. Built a three-stage pipeline for object detection, text detection, and text extraction. Optimized model deployment achieving high accuracy in real-world document processing scenarios.",
    badges: [
      { icon: Zap, text: "Multi-stage Pipeline" },
      { icon: Brain, text: "OCR & Detection" },
      { icon: Award, text: "Production Deployment" }
    ],
    tags: ["Python", "OpenCV", "Object Detection", "Flask", "REST API", "ML"],
    icon: <FaBriefcase />,
  }
];

const Experience = () => {
  const pathName = usePathname();

  return (
    <section id="experience" className="pt-16 pb-8 dark:bg-gray-800 bg-gray-100">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pb-8">
        <h1 className="font-orbitron text-center font-bold dark:text-white text-4xl pb-4 my-4 text-blue-950">
          Professional Experience
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A track record of building scalable products, solving complex engineering challenges, and delivering measurable impact across fintech, healthcare, entertainment, and research.
        </p>
        <div className="relative border-l border-gray-200 dark:border-gray-700 pb-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 dark:bg-blue-800 rounded-full flex items-center justify-center">
                {exp.icon}
              </div>
              <div className="p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.company || exp.institution}
                    </p>
                    <p className="text-xs text-gray-400">{exp.location}</p>
                  </div>
                  <p className="text-xs text-gray-400 whitespace-nowrap">{exp.period}</p>
                </div>
                
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Impact Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.badges.map((badge, i) => {
                    const IconComponent = badge.icon;
                    return (
                      <div
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full border border-blue-200/30 dark:border-blue-800/30"
                      >
                        <span className="text-blue-600 dark:text-cyan-400"><IconComponent className="w-3 h-3" /></span>
                        <span className="text-xs font-semibold text-blue-700 dark:text-cyan-300">{badge.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Tech/Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {!pathName.startsWith("/experience") && (
          <div className="flex pt-10 justify-start">
            {/* <SeeMoreButton text="See full experience..." goTo="/experience" /> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
