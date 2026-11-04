import type { LucideIcon } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

export const profile = {
  name: "Heramb Devbhankar",
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
} as const;

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
