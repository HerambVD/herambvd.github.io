import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  Contact =  dynamic(() => import('@/components/contact/Contact'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Contact us - Heramb Devbhankar",
  description: "Software Engineer | Heramb Devbhankar",
};

const Page = () => {
  return <Contact />;
};

export default Page;
