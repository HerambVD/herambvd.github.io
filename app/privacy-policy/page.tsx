import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const  PrivacyPolicy =  dynamic(() => import('../../components/PrivacyPolicy'), {ssr: false, loading: () => <SuspenseLoading />})

export const metadata: Metadata = {
  title: "Privacy policy - Heramb Devbhankar",
  description: "Privacy policy | Heramb Devbhankar",
};

const Page = () => {
  return <PrivacyPolicy />;
};

export default Page;