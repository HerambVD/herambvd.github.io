export type Project = {
  name: string;
  /** One sentence: what it is and why it matters. */
  description: string;
  impact?: string;
  image?: string;
  link?: { href: string; text: string };
  techs: string[];
};

export const projects: Project[] = [
  {
    name: "Cloud-Native Data Platform",
    image: "https://images.pexels.com/photos/34703257/pexels-photo-34703257.png",
    description:
      "Powers real-time quant analytics at Apollo: 78K × 370 matrices per run, fault-tolerant Temporal pipelines, high-throughput retrieval.",
    impact: "70% faster pipelines",
    techs: ["Python", "Temporal", "SQL Server", "Redis", "Azure AKS"],
  },
  {
    name: "GenAI Text-to-SQL Agents",
    image: "https://images.pexels.com/photos/37095564/pexels-photo-37095564.jpeg",
    description:
      "LLM agents that answer data questions in plain English, built on MCP and tool calling with grounding and eval guardrails.",
    impact: "60% lower latency & token cost",
    techs: ["LLMs", "MCP", "Text-to-SQL", "Python"],
  },
  {
    name: "spoken2written",
    image: "/assets/images/pip-install-spoken2written.jpg",
    description: "Open-source NLP library on PyPI that turns spoken-style text into clean written form.",
    impact: "Open source · PyPI",
    link: { href: "https://pypi.org/project/spoken2written/", text: "pip install spoken2written" },
    techs: ["Python", "spaCy", "NumPy", "NLP"],
  },
  {
    name: "Tactile Images for the Visually Impaired",
    description: "Flask API, built with Stanford, that converts photos into tactile graphics using segmentation and edge detection.",
    impact: "Stanford University",
    techs: ["Python", "OpenCV", "TensorFlow", "Flask"],
  },
];
