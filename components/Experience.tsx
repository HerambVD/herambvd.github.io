"use client";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { usePathname } from "next/navigation";
import SeeMoreButton from "@/components/ui/SeeMoreButton";

const experiences = [
  {
    title: "Lead Software Engineer",
    company: "SAF-AFTRA Foundation",
    period: "May 2023 - Present",
    description: "Led backend development using Python-Django, optimizing data management with Django ORM and implementing email systems to enhance functionality. Streamlined integration with dynamic frontends (iOS and ReactJS), automated deployment pipelines, and implemented scalable solutions to ensure high availability under variable traffic conditions with.",
    icon: <FaBriefcase />,
  },
  {
    title: "Software Engineer",
    company: "Eye Labs Inc",
    period: "Sep 2022 - May 2023",
    description: "Developed an iOS application in SwiftUI utilizing the Vision framework and machine learning models to detect eye anomalies using the front camera. Integrated advanced UIKit features, implemented mathematical algorithms for facial and eye direction analysis, and established a baseline product for FDA clinical trials, successfully tested on eye patients.",
    icon: <FaBriefcase />,
  },
  {
    title: "Research Assistant | Master of Science in Computer Science",
    institution: "University of Southern California",
    period: "2021 - 2022",
    description:
      "Pursued a Master’s in Computer Science at USC, focusing on advanced topics like AI, data science, and software engineering, while gaining hands-on experience through projects and research assistanship. | Developed models for tracking Drosophila fly movement and gene expression using LSTM and CNN, and researched face recognition systems trained on synthetic data with StarGAN for data augmentation and multi-domain image translations.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Software Engineer - Machine Learning",
    institution: "IOTric",
    period: " May 2019 - Dec 2021",
    description: "Built a web application that extracts text from distorted invoice and receipt images using a three-stage pipeline (object detection, text detection, and extraction). Deployed the object detection model on AWS EC2 with a REST API and optimized the app to achieve a 100ms response time per document for efficient text extraction.",
    icon: <FaBriefcase />,
  }
];

const Experience = () => {
  const pathName = usePathname();

  return (
    <section id="experience" className="pt-20 dark:bg-gray-800 bg-gray-100">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32">
        <h1 className="font-orbitron text-center font-bold dark:text-white text-4xl pb-10 my-4 text-blue-950">
          Professional Experience
        </h1>
        <div className="relative border-l border-gray-200 dark:border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-600 dark:bg-blue-800 rounded-full flex items-center justify-center">
                {exp.icon}
              </div>
              <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.company || exp.institution}
                </p>
                <p className="text-xs text-gray-400">{exp.period}</p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
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