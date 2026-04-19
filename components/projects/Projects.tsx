"use client";
import { usePathname } from "next/navigation";
import Item from "./Item";

const Projects = () => {
  const pathName = usePathname();
  return (
    <section id="projects" className="pt-16 pb-16 dark:bg-gray-800 bg-gray-100">
      <div className="container mx-auto px-8 md:px-10 lg:px-20 xl:px-32 pb-8">
        <h1 className="font-orbitron text-center font-bold dark:text-white text-4xl pb-4 text-blue-950 mb-4">
          Featured Projects
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected projects showcasing system design, AI integration, and real-world impact.
        </p>
        
        <div className="grid gap-8 md:grid-cols-2 pb-8">
          <Item
            name="Enterprise Risk Platform"
            headerImg="https://images.pexels.com/photos/34703257/pexels-photo-34703257.png"
            description="Large-scale data platform processing 70K+ rows of financial data. Built scalable APIs with FastAPI, automated Temporal workflows, and AI insights engine. Reduced API response times by 60%."
            impact="60% Performance Improvement"
            techs={["FastAPI", "Python", "SQL Server", "Kubernetes", "AI/LLMs"]}
            headerLinks={{
              privateSource: true,
            }}
          />

          <Item
            name="AI Insights Engine"
            headerImg="https://images.pexels.com/photos/37095564/pexels-photo-37095564.jpeg"
            description="AI-driven application using LLMs and vector embeddings to generate contextual insights. Implemented RAG for context-aware responses on large financial datasets."
            impact="Real-time Intelligence"
            techs={["LLMs", "Vector Embeddings", "RAG", "Python", "FastAPI"]}
            headerLinks={{
              privateSource: true,
            }}
          />

          <Item
            name="Eye Anomaly Detection"
            headerImg="https://images.pexels.com/photos/36159308/pexels-photo-36159308.jpeg"
            description="iOS app using SwiftUI and Vision framework to detect eye anomalies. Implemented facial landmark algorithms. Deployed for FDA clinical trials with real patient testing."
            impact="FDA Clinical Trials"
            techs={["Swift", "SwiftUI", "Vision Framework", "ML"]}
            headerLinks={{
              privateSource: true,
            }}
          />

          <Item
            name="spoken2written (PyPI)"
            headerImg="/assets/images/pip-install-spoken2written.jpg"
            description="Open-source Python library converting spoken text to written form with NLP. Handles speech patterns, contractions, and verbal fillers. Production-ready with community adoption."
            impact="Open Source"
            seeMore={{ url: "https://pypi.org/project/spoken2written/", text: "View on PyPI" }}
            techs={["Python", "Spacy", "NLTK", "NLP"]}
            headerLinks={{
              privateSource: true,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
