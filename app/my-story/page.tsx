import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  MyStory =  dynamic(() => import('../../components/story/MyStory'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "My Story - Heramb Devbhankar | Software Engineer Journey",
  description: "Passionate Software Engineer with strong Python programming skills, experienced in building APIs, Machine Learning, computer vision models, and mobile apps with Swift. Learn about Heramb Devbhankar's journey.",
  keywords: "Heramb story, Heramb Devbhankar story, software engineer journey, Python programmer, machine learning, computer vision, Swift, API development, Heramb USC, Heramb career",
};

const Page = () => {
  return <MyStory />;
};

export default Page;
