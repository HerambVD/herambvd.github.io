import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The page you are looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-800 flex justify-center items-center px-4">
      <div className="text-center w-full md:w-3/4 py-20 px-5 bg-[#ffffffd6] shadow-lg">
        <h1 className="text-5xl lg:text-9xl inline-block bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-400">
          404
        </h1>
        <p className="text-3xl my-5 text-gray-900">OOPS! PAGE NOT FOUND</p>
        <p className="text-xl text-gray-900">The page you are looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-block mt-16 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
