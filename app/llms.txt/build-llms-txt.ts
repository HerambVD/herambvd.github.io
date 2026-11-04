import { education, experience } from "@/entities/experience";
import { faqs, impactStats, profile, socialLinks } from "@/entities/profile";
import { projects } from "@/entities/project";
import { skillGroups } from "@/entities/skill";
import { BLOG_URL, SITE_URL } from "@/shared/config/site";

/**
 * Markdown summary of the site for AI assistants and LLM crawlers (https://llmstxt.org).
 * Built from the same data as the pages, so it never drifts from them.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${profile.name}`,
    "",
    `> ${profile.bio}`,
    "",
    `- Full name: ${profile.fullName}`,
    `- Also known as: ${profile.alternateNames.join(", ")}`,
    `- Role: ${profile.title} at ${profile.company}`,
    `- Focus: ${profile.focus.join(", ")}`,
    `- Availability: ${profile.availability}`,
    `- Key results: ${impactStats.map((s) => `${s.value} ${s.label}`).join("; ")}`,
    "",
    "## Experience",
    "",
    ...experience.flatMap((role) => [
      `### ${role.title}, ${role.organization} (${role.period})`,
      ...role.points.map((point) => `- ${point}`),
      "",
    ]),
    "## Education",
    "",
    ...education.map((d) => `- ${d.degree}, ${d.school} (${d.period})`),
    "",
    "## Projects",
    "",
    ...projects.map((p) => `- ${p.name}: ${p.description}${p.link ? ` (${p.link.href})` : ""}`),
    "",
    "## Skills",
    "",
    ...skillGroups.map((g) => `- ${g.title}: ${g.skills.map((s) => s.name).join(", ")}`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`### ${f.question}`, f.answer, ""]),
    "## Contact",
    "",
    `- Email: ${profile.email}`,
    ...socialLinks.map((l) => `- ${l.label}: ${l.href}`),
    `- Blog: ${BLOG_URL}`,
    "",
    "## Pages",
    "",
    `- [Home](${SITE_URL}/): profile, experience, projects, skills and FAQ`,
    `- [Projects](${SITE_URL}/projects)`,
    `- [Contact](${SITE_URL}/contact)`,
    `- [Resume (PDF)](${SITE_URL}${profile.resume.href})`,
    "",
  ];
  return lines.join("\n");
}
