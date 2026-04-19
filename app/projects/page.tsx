import dynamic from "next/dynamic";
import { Metadata } from "next";
import SuspenseLoading from "@/components/ui/SuspenseLoading";

const  Projects =  dynamic(() => import('../../components/projects/Projects'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Heramb Devbhankar - Featured Projects & Work | Software Engineer",
  description: "Explore the notable projects of Heramb Devbhankar - a software engineer from USA. Full-stack development, AI applications, and enterprise solutions.",
  keywords: "Heramb projects, Heramb Devbhankar projects, software engineer projects, full-stack development, AI projects, enterprise solutions, portfolio projects",
};

const Page = () => {
  return <Projects />;
};

export default Page;
