import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Copyright - Heramb Devbhankar",
  description: "Copyright © 2025 Heramb Devbhankar. All rights reserved.",
};


const  Copyright =  dynamic(() => import('../../components/Copyright'), {ssr: false, loading: () => <SuspenseLoading />})

const Page = () => {
  return <Copyright />;
};

export default Page;
