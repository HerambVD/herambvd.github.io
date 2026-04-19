import SuspenseLoading from "@/components/ui/SuspenseLoading";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Copyright - Heramb Devbhankar | Portfolio",
  description: "Copyright © 2026 Heramb Devbhankar. All rights reserved. Learn about the intellectual property rights for this website.",
  keywords: "copyright, intellectual property, Heramb Devbhankar copyright, rights reserved",
};


const  Copyright =  dynamic(() => import('../../components/Copyright'), {ssr: false, loading: () => <SuspenseLoading />})

const Page = () => {
  return <Copyright />;
};

export default Page;
