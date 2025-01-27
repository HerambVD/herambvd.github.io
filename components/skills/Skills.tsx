"use client"
import { usePathname } from "next/navigation";

import {
  FaAppStore,
  FaChrome,
  FaFigma,
  FaGitAlt,
  FaInternetExplorer,
  FaJava,
  FaPaintBrush,
  FaReact,
  FaServer,
  FaApple,
  FaPython,
  FaAngular,
  FaCloud,
  FaAws,
  FaRobot,
  FaLink,
  FaDatabase,
  FaDocker,
  FaRegSnowflake,
  FaNode,
  FaWarehouse,
  FaBrain

} from "react-icons/fa";
import { IoAnalyticsOutline } from "react-icons/io5";
import { IoMdAnalytics, IoIosGitNetwork } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import { BsDatabaseAdd, BsWordpress } from "react-icons/bs";
import Item from "./Item";
import { FcLinux, FcSmartphoneTablet } from "react-icons/fc";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAndroidstudio,
  SiTorbrowser,
  SiMysql,
  SiKubernetes,
  SiTerraform,
  SiApache,
  SiDatabricks,
  SiPandas,
  SiOpencv,
  SiPytorch,
  SiFlask
} from "react-icons/si";

import { TbBrandReactNative, TbBrandVscode, TbSql } from "react-icons/tb";
import Responsive from "@/utils/googleADS/Responsive";

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
const Skills = (): JSX.Element => {
  const pathName = usePathname();
  return (
    <section id="projects" className="pt-10 dark:bg-gray-800 bg-gray-100">
    <div
      id="Skills"
      className="container mx-auto xl:px-32 text-black px-10 dark:text-white pt-10 flex items-center flex-col justify-center"
    >
      <div className="">
        <h1
          className={`font-orbitron text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
        >
          Skills
        </h1>
        <div className="grid gap-8  md:grid-cols-2">
        <div>
            <Item
              icon={{
                source: <FaRobot size={60} />,
                color: "text-gray-600",
                bg: "bg-gray-200",
              }}
              title="Machine Learning, AI and Data Science"
              desc="I develop AI solutions using Python, PyTorch, and TensorFlow, specializing in machine learning, data science, computer vision, and NLP."
              toolIcons={[
                {
                  name: 'Regression Techniques',
                  source: <IoMdAnalytics className={"text-3xl"} />,
                  color: "text-yellow-600",
                },

                {
                  name: 'Neural Networks',
                  source: <IoIosGitNetwork className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: 'OpenCV',
                  source: <SiOpencv className={"text-3xl"} />,
                  color: "text-orange-800",
                },
                {
                  name: 'Pytorch',
                  source: <SiPytorch className={"text-3xl"} />,
                  color: "text-sky-400",
                },
              ]}
            />
          </div>
          <div>
            <Item
              title="Backend, API, and Databases"
              desc="I deliver secure, efficient, and scalable backend REST API solutions using Python, Django, and Flask, ensuring seamless integration and robust performance for modern applications."
              icon={{
                source: <FaDatabase size={60} />,
                color: "text-red-600",
                bg: "bg-red-200",
              }}
              toolIcons={[
                {
                  name: 'Database',
                  source: <BsDatabaseAdd className={"text-3xl"} />,
                  color: "text-red-600",
                },
                {
                  name: 'Flask',
                  source: <SiFlask className={"text-3xl"} />,
                  color: "text-yellow-600",
                },

                {
                  name: 'MySQL',
                  source: <SiMysql className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  name: 'Server',
                  source: <FaServer className={"text-3xl"} />,
                  color: "text-gray-700",
                },
                {
                  name: 'Python',
                  source: <FaPython className={"text-3xl"} />,
                  color: "text-pink-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              title="Web App Development"
              desc="I specialize in providing functional web services that include custom website app development, WordPress development, e-commerce solutions, and more."
              icon={{
                source: <FaInternetExplorer size={60} />,
                color: "text-sky-600",
                bg: "bg-sky-200",
              }}
              toolIcons={[
                {
                  name: 'AngularJS',
                  source: <FaAngular className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: 'Git',
                  source: <FaGitAlt className={"text-3xl"} />,
                  color: "text-gray-900",
                },
                {
                  name: 'ReactJS',
                  source: <FaReact className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  name: 'NodeJS',
                  source: <FaNode className={"text-3xl"} />,
                  color: "text-green-700",
                },
                {
                  name: 'VSCode',
                  source: <TbBrandVscode className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FcSmartphoneTablet size={60} />,
                color: "text-green-600",
                bg: "bg-green-200",
              }}
              title="Mobile App"
              desc="I design and develop stunning, feature-rich apps for iOS, Android using SwiftUI and React Native, turning your vision into reality with exceptional quality and performance."
              toolIcons={[
                {
                  name: 'Android Studio',
                  source: <SiAndroidstudio className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: 'App Store',
                  source: <FaAppStore className={"text-3xl"} />,
                  color: "text-orange-700",
                },
                {
                  name: 'Java',
                  source: <FaJava className={"text-3xl"} />,
                  color: "text-yellow-900",
                },
                {
                  name: 'React Native',
                  source: <TbBrandReactNative className={"text-3xl"} />,
                  color: "text-green-700",
                },
                {
                  name: 'Apple',
                  source: <FaApple className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FaCloud size={60} />,
                color: "text-purple-600",
                bg: "bg-purple-200",
              }}
              title="AWS and Cloud Services"
              desc="Building scalable cloud architectures and AWS solutions using Infrastructure as Code (IaC) with Terraform and CloudFormation, ensuring automation, reliability, and seamless deployment."
              toolIcons={[
                {
                  name: 'Amazon Web Services',
                  source: <FaAws className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: 'Kubernetes',
                  source: <SiKubernetes className={"text-3xl"} />,
                  color: "text-orange-700",
                },
                {
                  name: 'Docker',
                  source: <FaDocker className={"text-3xl"} />,
                  color: "text-yellow-900",
                },
                {
                  name: 'Terraform',
                  source: <SiTerraform className={"text-3xl"} />,
                  color: "text-green-700",
                },
                {
                  name: 'Apache',
                  source: <SiApache className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FaLink size={60} />,
                color: "text-magenta-600",
                bg: "bg-magenta-200",
              }}
              title="Data Engineering and Analytics"
              desc="I design and build scalable data pipelines and analytics solutions using tools like Python, SQL, and Apache Spark, transforming raw data into actionable insights with efficiency and precision."
              toolIcons={[
                {
                  name: 'Databricks',
                  source: <SiDatabricks className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: 'Snowflake',
                  source: <FaRegSnowflake className={"text-3xl"} />,
                  color: "text-orange-700",
                },
                {
                  name: 'Data Warehousing',
                  source: <FaWarehouse className={"text-3xl"} />,
                  color: "text-yellow-900",
                },
                {
                  name: 'Pandas',
                  source: <SiPandas className={"text-3xl"} />,
                  color: "text-green-700",
                },
                {
                  name: 'Analytics',
                  source: <IoAnalyticsOutline className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
        </div>
        <Responsive />
      </div>
    </div>
    {!pathName.startsWith("/experience") && (
          <div className="flex pt-10 justify-start">
            {/* <SeeMoreButton text="See full experience..." goTo="/experience" /> */}
          </div>
        )}
    </section>
  );
};

export default Skills;
