import dynamic from "next/dynamic";
import { Metadata } from "next";
import SuspenseLoading from "@/components/ui/SuspenseLoading";

const  Projects =  dynamic(() => import('../../components/projects/Projects'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Heramb Devbhankar - Projects",
  description: "Notable projects | Heramb Devbhankar",
};

const Page = () => {
  return <Projects />;
};

export default Page;
