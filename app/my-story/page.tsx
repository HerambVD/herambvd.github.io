import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  MyStory =  dynamic(() => import('../../components/story/MyStory'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "My story - Heramb Devbhankar",
  description:
    "Passionate Software Engineer with strong Python programming skills, experienced in building APIs, Machine Learning computer vision models, and mobile apps with Swift. | Heramb",
};

const Page = () => {
  return <MyStory />;
};

export default Page;
