import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  PrivacyPolicy =  dynamic(() => import('../../components/PrivacyPolicy'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Privacy Policy - Heramb Devbhankar | Portfolio",
  description: "Privacy Policy for Heramb Devbhankar's portfolio website. Learn how we collect, use, and protect your information.",
  keywords: "privacy policy, data protection, Heramb Devbhankar privacy, website privacy",
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;