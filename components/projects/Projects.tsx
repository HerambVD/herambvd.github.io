"use client";
import { FaGoogle } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';
import { BsGithub } from "react-icons/bs";
import { SeeMoreButton } from "../ui";
import { usePathname } from "next/navigation";
import Item from "./Item";
// import { Report } from "../";
import Responsive from "@/utils/googleADS/Responsive";

const Projects = () => {
  const pathName = usePathname();
  return (
    <>
          <section id="projects" className="pt-20 dark:bg-gray-900">
          <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
          <h1
            className={`font-orbitron text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
          >
            Notable Projects
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <Item
              name="Heart MRI Segmentation"
              headerImg="/assets/images/heart-mri-segmentation.webp"
              description="This heart segmentation project uses a U-Net model in PyTorch with Dice loss for segmenting heart structures in MRI images. Hyperparameter tuning (e.g., learning rates, batch sizes) optimizes model performance, aiming for high segmentation accuracy."
              seeMore={{ url: "https://colab.research.google.com/drive/1-KNXK1cRRBFpTZ3eIz6qlIyWsT1_WT6R?usp=sharing", text: "Visit Demo Colab Notebook..." }}
              techs={["Python", "OpenCV", "PyTorch", "Computer Vision", "Deep Learning"]}
              headerLinks={{
                github: {
                  url: "https://colab.research.google.com/drive/1-KNXK1cRRBFpTZ3eIz6qlIyWsT1_WT6R?usp=sharing",
                  icon: <FaGoogle />,
                },
              }}
            />

            <Item
              name="StockSearch WebApp"
              headerImg="/assets/images/stocksearch-webapp.webp"
              description="A full-stack web application with ReactJS for the front-end, allowing users to search stocks and view analytics through Highcharts. The app functions like a personalized version of Robinhood, enabling real-time stock tracking and data visualization."
              seeMore={{ url: "https://www.youtube.com/watch?v=SZao_OfwFYE", text: "DEMO VIDEO" }}
              techs={["Python", "Django", "ReactJS", "MySQL", "AWS RDS", "AWS EC2"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="StockSearch iOS App"
              headerImg="/assets/images/stocksearch-ios-app.webp"
              description="A stock search app built with SwiftUI for iOS, enabling users to search stocks, view detailed analytics, and track real-time market data. The app offers a personalized experience, similar to Robinhood, with smooth and interactive visualizations to help users make informed decisions."
              seeMore={{ url: "https://www.youtube.com/watch?v=puFIhENj5gU", text: "DEMO VIDEO" }}
              techs={["Swift", "SwiftUI","iOS App Development", "UIkit", "MVC"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="pip install spoken2written"
              headerImg="/assets/images/pip-install-spoken2written.jpg"
              description="Spoken2Written is an open-source Python package designed to convert spoken text into its corresponding written form, capturing nuances like informal speech patterns, contractions, and verbal fillers, making it suitable for transcription and text processing applications."
              seeMore={{ url: "https://pypi.org/project/spoken2written/", text: "Explore the open source package..." }}
              techs={["Python", "NLTK", "Spacy", "Natural Language Processing", "Open-Source"]}
              headerLinks={{
                github: {
                  url: "https://github.com/HerambVD/spoken2written",
                  icon: <BsGithub />,
                },
              }}
            />
          </div>
          {!pathName.startsWith("/experience") && (
          <div className="flex pt-10 justify-start">
            {/* <SeeMoreButton text="See full experience..." goTo="/experience" /> */}
          </div>
        )}
        </div>
      </section>
      {/* {pathName === "/projects/" && <Report report="projects/page" />} */}
    </>
  );
};

export default Projects;
