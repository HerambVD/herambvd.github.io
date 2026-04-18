"use client";
import { FaGoogle } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';
import { BsGithub } from "react-icons/bs";
import { SeeMoreButton } from "../ui";
import { usePathname } from "next/navigation";
import Item from "./Item";
import Responsive from "@/utils/googleADS/Responsive";

const Projects = () => {
  const pathName = usePathname();
  return (
    <>
      <section id="projects" className="pt-20 dark:bg-gray-900">
        <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
          <h1 className={`font-orbitron text-center font-bold  dark:text-white text-4xl pb-4 my-4 text-blue-950`}>
            Notable Projects
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A portfolio of impactful projects spanning full-stack development, AI/ML systems, open-source tools, and real-world applications that solve complex problems.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* AI & LLM Project */}
            <Item
              name="🤖 AI Insights Engine"
              headerImg="/assets/images/heart-mri-segmentation.webp"
              description="Built an AI-driven insights application using vector embeddings and LLMs to generate contextual daily highlights and summaries for financial data analysis. Implemented RAG (Retrieval-Augmented Generation) for context-aware AI responses on large datasets."
              impact="Real-time AI Insights"
              techs={["LLMs", "Vector Embeddings", "RAG", "Python", "FastAPI", "AI/ML"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            {/* Tactile Image Generation */}
            <Item
              name="👐 Tactile Image Generation"
              headerImg="/assets/images/heart-mri-segmentation.webp"
              description="Developed a REST API converting RGB images to tactile format for visually disabled users. Examined collective use of Instance Segmentation, Deep Learning-based edge detection, and morphological transformations. Stanford University project demonstrating real-world impact of AI."
              impact="Accessibility Technology"
              seeMore={{ url: "https://github.com/HerambVD", text: "Learn more" }}
              techs={["Python", "OpenCV", "TensorFlow", "Flask", "Computer Vision", "Deep Learning"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            {/* Apollo Scalable Platform */}
            <Item
              name="📊 Enterprise Risk Platform"
              headerImg="/assets/images/stocksearch-webapp.webp"
              description="Architected a large-scale risk data management platform for investment teams processing 70K+ rows and 350 columns of financial data. Built scalable APIs, automated data pipelines, and AI insights engine. Reduced API response times by 60% with distributed caching and optimization."
              impact="60% Performance Improvement"
              techs={["FastAPI", "Python", "SQL Server", "Kubernetes", "Azure", "System Architecture", "AI/LLMs"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            {/* iOS Medical App */}
            <Item
              name="🏥 Eye Anomaly Detection (FDA)"
              headerImg="/assets/images/stocksearch-ios-app.webp"
              description="Developed iOS app in SwiftUI using Apple's Vision framework to detect eye anomalies via front camera. Implemented facial landmark algorithms for eye and face direction analysis. Successfully deployed as baseline product for FDA clinical trials with real patient testing."
              impact="FDA Clinical Trials"
              techs={["Swift", "SwiftUI", "Vision Framework", "ML", "iOS", "Computer Vision"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            {/* Open Source Package */}
            <Item
              name="📦 spoken2written (PyPI)"
              headerImg="/assets/images/pip-install-spoken2written.jpg"
              description="Programmed and published an open-source Python library converting spoken text to written form. Handles informal speech patterns, contractions, and verbal fillers. Production-ready with comprehensive documentation, gaining adoption in NLP communities."
              impact="Open Source Impact"
              seeMore={{ url: "https://pypi.org/project/spoken2written/", text: "Explore Package" }}
              techs={["Python", "Spacy", "NLTK", "NLP", "Open-Source", "Package Publishing"]}
              headerLinks={{
                github: {
                  url: "https://github.com/HerambVD/spoken2written",
                  icon: <BsGithub />,
                },
              }}
            />

            {/* Game Development */}
            <Item
              name="🎮 XCape Game (Unity 3D)"
              headerImg="/assets/images/stocksearch-webapp.webp"
              description="Built a customized escape room-style game using Unity 3D game engine. Utilized Canvas, prefabs, and C# scripting for interactive game mechanics. Deployed as WebGL for cross-platform browser play, demonstrating skills beyond backend/data systems."
              impact="Interactive Experience"
              techs={["C#", "Unity 3D", "Game Development", "WebGL", "UI/UX"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            {/* Legacy Projects - Hidden but available */}
            <Item
              name="💰 StockSearch WebApp"
              headerImg="/assets/images/stocksearch-webapp.webp"
              description="Full-stack web application with ReactJS frontend enabling real-time stock tracking and analytics via Highcharts. Django backend with MySQL database. Functions like a personalized Robinhood, demonstrating full-stack product development."
              impact="10K+ Users"
              seeMore={{ url: "https://www.youtube.com/watch?v=SZao_OfwFYE", text: "Watch Demo" }}
              techs={["Python", "Django", "ReactJS", "MySQL", "AWS", "Product Development"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            <Item
              name="📈 StockSearch iOS"
              headerImg="/assets/images/stocksearch-ios-app.webp"
              description="Native iOS application in SwiftUI for seamless stock tracking and real-time market analytics. Interactive visualizations for informed investment decisions. Demonstrates mobile-first product design and enterprise-grade architecture."
              impact="Polished Mobile App"
              seeMore={{ url: "https://www.youtube.com/watch?v=puFIhENj5gU", text: "Watch Demo" }}
              techs={["Swift", "SwiftUI", "iOS", "UIKit", "MVC", "Product Design"]}
              headerLinks={{
                privateSource: true,
              }}
            />
          </div>

          {!pathName.startsWith("/projects") && (
            <div className="flex pt-10 justify-start">
              {/* <SeeMoreButton text="See all projects..." goTo="/projects" /> */}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
