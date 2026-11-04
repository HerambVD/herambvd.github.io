import type { LucideIcon } from "lucide-react";
import { Binary, Boxes, Brain, Cloud, Code2, Cpu, Database, Layers, Server, Smartphone, Workflow } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siAngular,
  siCplusplus,
  siDocker,
  siFastapi,
  siFlask,
  siFlux,
  siGithubactions,
  siHelm,
  siJavascript,
  siKubernetes,
  siModelcontextprotocol,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siPython,
  siReact,
  siRedis,
  siRuby,
  siRubyonrails,
  siSpacy,
  siSwift,
  siTemporal,
  siTensorflow,
  siTerraform,
} from "simple-icons";

/** A skill shows its brand logo when one exists, otherwise a generic icon. */
export type Skill = { name: string; logo?: SimpleIcon; icon?: LucideIcon };

export type SkillGroup = { title: string; icon: LucideIcon; skills: Skill[] };

const s = (name: string, logo?: SimpleIcon, icon?: LucideIcon): Skill => ({ name, logo, icon });

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      s("Python", siPython),
      s("SQL", undefined, Database),
      s("JavaScript", siJavascript),
      s("Swift", siSwift),
      s("C++", siCplusplus),
      s("C#", undefined, Code2),
      s("Ruby", siRuby),
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    skills: [
      s("FastAPI", siFastapi),
      s("Flask", siFlask),
      s("Node.js", siNodedotjs),
      s("Ruby on Rails", siRubyonrails),
      s("SQL Server", undefined, Database),
      s("Redis", siRedis),
      s("Temporal", siTemporal),
      s("Protobuf", undefined, Binary),
      s("Microservices", undefined, Boxes),
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      s("Azure (AKS)", undefined, Cloud),
      s("AWS", undefined, Cloud),
      s("Docker", siDocker),
      s("Kubernetes", siKubernetes),
      s("Terraform", siTerraform),
      s("Helm", siHelm),
      s("GitHub Actions", siGithubactions),
      s("Flux CD", siFlux),
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      s("LLM Agents", undefined, Brain),
      s("MCP", siModelcontextprotocol),
      s("Text-to-SQL", undefined, Database),
      s("TensorFlow", siTensorflow),
      s("OpenCV", siOpencv),
      s("spaCy", siSpacy),
      s("NumPy", siNumpy),
      s("CNN · LSTM · GANs", undefined, Workflow),
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Smartphone,
    skills: [s("React", siReact), s("Angular", siAngular), s("SwiftUI", undefined, Smartphone), s("UIKit", undefined, Smartphone)],
  },
  {
    title: "Engineering",
    icon: Cpu,
    skills: [
      s("Distributed Systems", undefined, Layers),
      s("System Design", undefined, Layers),
      s("High Availability", undefined, Server),
      s("Performance Tuning", undefined, Cpu),
    ],
  },
];

/** Every brand logo used in the skill groups, for the 3D tech cloud. */
export const skillLogos: SimpleIcon[] = skillGroups.flatMap((group) =>
  group.skills.flatMap((skill) => (skill.logo ? [skill.logo] : []))
);

export type Expertise = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: "blue" | "purple" | "green";
};

/** Three headline strengths shown near the top of the home page. */
export const expertise: Expertise[] = [
  {
    icon: Server,
    title: "Backend at scale",
    description: "Python microservices and APIs that stay fast under heavy load.",
    tone: "blue",
  },
  {
    icon: Workflow,
    title: "Cloud-native data platforms",
    description: "Fault-tolerant pipelines on Kubernetes, shipped through CI/CD and GitOps.",
    tone: "purple",
  },
  {
    icon: Brain,
    title: "Generative AI in production",
    description: "LLM agents with MCP and text-to-SQL, tuned for latency and cost.",
    tone: "green",
  },
];
