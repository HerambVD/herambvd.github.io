import type { LucideIcon } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export const profile = {
  name: "Heramb Devbhankar",
  fullName: "Heramb Vijay Devbhankar",
  givenName: "Heramb",
  familyName: "Devbhankar",
  /** Every way people search for the name; used in structured data and metadata. */
  alternateNames: ["Heramb", "Devbhankar", "Heramb Vijay Devbhankar", "Heramb V. Devbhankar", "HerambVD", "heramb.tech"],
  title: "Senior Software Engineer",
  company: "Apollo Global Management",
  headline: "I build fast, reliable backend systems and AI platforms that run in production.",
  summary:
    "5+ years shipping Python microservices, cloud-native data platforms and LLM agents, from FDA clinical trials to quant finance.",
  focus: ["Backend", "Distributed Systems", "Data Platforms", "Generative AI"],
  availability: "Open to full-time roles · Relocating to India",
  location: "Relocating to India from USA",
  email: "heramb.hvd@gmail.com",
  phone: "+91-8097204338",
  photo: "/assets/images/heramb.jpeg",
  resume: {
    href: "/assets/pdf/Heramb_Devbhankar_Senior_Software_Engineer_Resume_.pdf",
    fileName: "Heramb_Devbhankar_Resume.pdf",
  },
  /**
   * Plain, factual third-person bio. Search engines and AI assistants quote text like this
   * when answering "Who is Heramb Devbhankar?", so keep it accurate and self-contained.
   */
  bio: "Heramb Devbhankar (Heramb Vijay Devbhankar) is a Senior Software Engineer at Apollo Global Management specializing in backend systems, distributed systems, cloud-native data platforms and Generative AI. He holds an M.S. in Computer Science from the University of Southern California and has 5+ years of experience building production software in Python, FastAPI, Kubernetes and Azure. His personal website is heramb.tech.",
} as const;

export type Faq = { question: string; answer: string };

/** Short, factual Q&A shown on the home page and published as FAQPage structured data. */
export const faqs: Faq[] = [
  {
    question: "Who is Heramb Devbhankar?",
    answer:
      "Heramb Devbhankar is a Senior Software Engineer at Apollo Global Management who builds backend systems, cloud-native data platforms and Generative AI agents. His website is heramb.tech.",
  },
  {
    question: "What does Heramb Devbhankar specialize in?",
    answer:
      "Python backend microservices (FastAPI), distributed systems, data pipelines with Temporal, Kubernetes on Azure and AWS, and LLM agents using Model Context Protocol and text-to-SQL.",
  },
  {
    question: "What has Heramb Devbhankar achieved?",
    answer:
      "At Apollo he cut API latency by 60%+, made data pipelines 70% faster (13 hours to 4) and lowered LLM inference cost by 60%. At Eye Labs his algorithms became the baseline for FDA clinical trials.",
  },
  {
    question: "Where did Heramb Devbhankar study?",
    answer:
      "He earned an M.S. in Computer Science from the University of Southern California (2022) and a B.Tech from Dr. Babasaheb Ambedkar Technological University in India (2019).",
  },
  {
    question: "How can I contact Heramb Devbhankar?",
    answer:
      "Email heramb.hvd@gmail.com, connect on LinkedIn (linkedin.com/in/heramb-devbhankar), or use the contact form at heramb.tech/contact. He is open to full-time roles and relocating to India.",
  },
];

export type ImpactStat = { value: string; label: string };

/** Headline numbers shown in the hero. */
export const impactStats: ImpactStat[] = [
  { value: "60%+", label: "lower API latency" },
  { value: "70%", label: "faster data pipelines" },
  { value: "60%", label: "lower LLM cost" },
  { value: "5+ yrs", label: "in production" },
];

export type SocialLink = { label: string; href: string; icon: LucideIcon };

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/heramb-devbhankar", icon: LinkedinIcon },
  { label: "GitHub", href: "https://github.com/HerambVD", icon: GithubIcon },
  { label: "Twitter", href: "https://twitter.com/heramb_", icon: TwitterIcon },
  { label: "Instagram", href: "https://www.instagram.com/heramb.17/", icon: InstagramIcon },
];

export const emailLink: SocialLink = { label: "Email", href: `mailto:${profile.email}`, icon: MailIcon };
