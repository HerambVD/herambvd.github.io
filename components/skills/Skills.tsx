"use client"
import { FaRobot, FaPython, FaServer } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { SiKubernetes, SiTensorflow, SiApache } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import Item from "./Item";

const Skills = () => {
  return (
    <section id="skills" className="pt-16 pb-16 dark:bg-gray-800 bg-gray-100">
      <div className="container mx-auto xl:px-32 text-black px-10 dark:text-white pb-8 flex items-center flex-col justify-center">
        <h1 className="font-orbitron text-center font-bold dark:text-white text-4xl pb-10 text-blue-950">
          Skills & Technologies
        </h1>
        
        <div className="grid gap-8 md:grid-cols-3 pb-8">
          {/* Software Engineering */}
          <Item
            icon={{
              source: <FaServer size={60} />,
              color: "text-gray-600",
              bg: "bg-gray-200",
            }}
            title="Software Engineering"
            desc="Full-stack development, system design, distributed systems, and cloud infrastructure. Building scalable, maintainable solutions."
            toolIcons={[
              {
                name: 'Python',
                source: <FaPython className="text-3xl" />,
                color: "text-blue-600",
              },
              {
                name: 'TypeScript',
                source: <TbBrandVscode className="text-3xl" />,
                color: "text-blue-500",
              },
              {
                name: 'Kubernetes',
                source: <SiKubernetes className="text-3xl" />,
                color: "text-blue-700",
              },
              {
                name: 'Cloud Platforms',
                source: <FaServer className="text-3xl" />,
                color: "text-orange-600",
              },
            ]}
          />

          {/* Workflow Orchestration */}
          <Item
            icon={{
              source: <SiApache size={60} />,
              color: "text-red-600",
              bg: "bg-red-100",
            }}
            title="Workflow Orchestration"
            desc="Temporal workflows, data pipelines, CI/CD automation, and ETL systems. Automating complex processes reliably."
            toolIcons={[
              {
                name: 'Temporal',
                source: <div className="text-3xl font-bold">⚙️</div>,
                color: "text-purple-600",
              },
              {
                name: 'Data Pipelines',
                source: <IoMdAnalytics className="text-3xl" />,
                color: "text-green-600",
              },
              {
                name: 'CI/CD',
                source: <div className="text-3xl">🔄</div>,
                color: "text-blue-600",
              },
              {
                name: 'SQL Optimization',
                source: <div className="text-3xl">🗄️</div>,
                color: "text-orange-600",
              },
            ]}
          />

          {/* AI/LLMs & RAG */}
          <Item
            icon={{
              source: <FaRobot size={60} />,
              color: "text-purple-600",
              bg: "bg-purple-100",
            }}
            title="AI/LLMs & RAG Systems"
            desc="Large Language Models, vector embeddings, RAG implementation, and AI-powered features. Building intelligent applications."
            toolIcons={[
              {
                name: 'LLMs',
                source: <div className="text-3xl">🧠</div>,
                color: "text-purple-600",
              },
              {
                name: 'Vector DB',
                source: <div className="text-3xl">📊</div>,
                color: "text-blue-600",
              },
              {
                name: 'TensorFlow',
                source: <SiTensorflow className="text-3xl" />,
                color: "text-orange-600",
              },
              {
                name: 'ML Pipelines',
                source: <FaRobot className="text-3xl" />,
                color: "text-green-600",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Skills;
