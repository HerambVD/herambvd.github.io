export type Role = {
  title: string;
  organization: string;
  location: string;
  period: string;
  kind: "work" | "research";
  /** Headline results, shown as pills. Keep each to a few words. */
  impact: string[];
  /** What you did and why it mattered. One line each. */
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    organization: "Apollo Global Management",
    location: "El Segundo, CA",
    period: "Jan 2025 – Present",
    kind: "work",
    impact: ["60%+ lower API latency", "Pipelines 13 h → 4 h", "60% lower LLM cost"],
    points: [
      "Built FastAPI microservices on SQL Server with Redis caching and Protobuf, cutting latency 60%+ under heavy load.",
      "Re-architected data ingestion on Temporal: daily runs 13 h → 4 h, monthly cycles 4 days → 1.",
      "Rebuilt GenAI agents on MCP, tool calling and text-to-SQL, cutting LLM latency and token cost by 60%.",
      "Own a cloud-native data platform for real-time quant analytics (25M+ rows/year) on AKS, Terraform, Helm and GitOps.",
    ],
    tags: ["Python", "FastAPI", "Temporal", "Redis", "Azure AKS", "MCP"],
  },
  {
    title: "Software Development Engineer",
    organization: "SAG-AFTRA Foundation",
    location: "Los Angeles, CA",
    period: "May 2023 – Oct 2024",
    kind: "work",
    impact: ["Led monolith → microservices"],
    points: [
      "Led architecture and delivery of a Rails monolith to microservices migration across FastAPI, React and Swift iOS.",
      "Built the AWS backend and CI/CD (load balancing, async jobs), improving reliability and release frequency.",
    ],
    tags: ["Python", "FastAPI", "Ruby on Rails", "React", "AWS"],
  },
  {
    title: "Software Development Engineer",
    organization: "Eye Labs Inc",
    location: "Santa Clara, CA",
    period: "Sep 2022 – Apr 2023",
    kind: "work",
    impact: ["Baseline for FDA clinical trials"],
    points: [
      "Built gaze-tracking and facial-landmark algorithms adopted as the production baseline for FDA clinical trials.",
      "Shipped an iOS app (SwiftUI, Apple Vision) that detects eye anomalies from the front camera.",
    ],
    tags: ["Swift", "SwiftUI", "Apple Vision", "Computer Vision"],
  },
  {
    title: "Research Assistant",
    organization: "University of Southern California",
    location: "Los Angeles, CA",
    period: "Apr 2021 – Aug 2022",
    kind: "research",
    impact: ["Computer vision research"],
    points: [
      "Tracked movement and gene expression in fruit flies from GFP video; classified trajectories with LSTM and CNN models.",
      "Generated synthetic face-recognition training data with StarGAN, reducing the need for real-world data.",
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "GANs"],
  },
  {
    title: "Software Development Engineer",
    organization: "IOTric",
    location: "India",
    period: "Aug 2019 – Dec 2020",
    kind: "work",
    impact: [],
    points: ["Built an OCR web app that extracts text from distorted invoices and receipts."],
    tags: ["Python", "Object Detection", "OCR"],
  },
];

export type Degree = { degree: string; school: string; period: string };

export const education: Degree[] = [
  { degree: "M.S. Computer Science", school: "University of Southern California", period: "2021 – 2022" },
  { degree: "B.Tech", school: "Dr. Babasaheb Ambedkar Technological University", period: "2019" },
];
