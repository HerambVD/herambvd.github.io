import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  Contact =  dynamic(() => import('@/components/contact/Contact'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Contact Heramb Devbhankar | Get In Touch - Software Engineer",
  description: "Contact Heramb Devbhankar - Software Engineer from USA. Reach out for collaborations, inquiries, or professional opportunities.",
  keywords: "contact Heramb, contact Heramb Devbhankar, Heramb Kalyan contact, software engineer contact, reach out, collaboration",
};

const Page = () => {
  return <Contact />;
};

export default Page;
