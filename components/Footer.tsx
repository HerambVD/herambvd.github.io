"use client";
import { LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon, MailIcon, ArrowUp } from "lucide-react"; // Changed arrow icon
import { usePathname } from "next/navigation";
import Link from "next/link";

type ImportantLinksProps = {
  href: string;
  text: string;
};

const ImportantLinks = ({ href, text }: ImportantLinksProps) => (
  <li className="mr-6 hover:text-gray-500">
    {href.startsWith('/') ? (
      <Link href={href} className="flex text-base gap-2 items-center"> {/* Adjusted font size */}
        <ArrowUp size={20} /> {text} {/* Changed ArrowRight to ArrowUp */}
      </Link>
    ) : (
      <a className="flex text-base gap-2 items-center" href={href}> {/* Adjusted font size */}
        <ArrowUp size={20} /> {text} {/* Changed ArrowRight to ArrowUp */}
      </a>
    )}
  </li>
);

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="text-white bg-gray-900 py-6">
      <div className="container mx-auto px-8 md:px-20 flex justify-between items-center">
        {/* Left section: Social icons */}
        <div className="flex gap-4">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/heramb-devbhankar">
            <LinkedinIcon size={25} />
          </a>
          <a aria-label="Github account" href="https://github.com/HerambVD">
            <GithubIcon size={25} />
          </a>
          <a aria-label="Twitter account" href="https://twitter.com/heramb_">
            <TwitterIcon size={25} />
          </a>
          <a aria-label="Instgram account" href="https://www.instagram.com/heramb.17/">
            <InstagramIcon size={25} />
          </a>
        </div>

        {/* Center section: "Other Links" */}
        <div className="flex gap-6">
          <ul className="flex gap-6">
            <ImportantLinks href="#projects" text="Projects" />
            <ImportantLinks href="#skill" text="Skills" />
            <ImportantLinks href="/about" text="About Me" />
            <ImportantLinks href="/contact" text="Contact Me" />
            <ImportantLinks href="/resume" text="Resume" />
          </ul>
        </div>

        {/* Right section: Hire Me Button */}
        <div className="text-right">
          <a
            href="mailto:heramb1711@gmail.com"
            className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Bottom: Copyright and Version */}
      <div className="container mx-auto text-center text-sm text-gray-300 pt-4">
        <p className="mb-2">
          Copyright © {new Date().getFullYear()} Heramb Devbhankar. All rights reserved.
        </p>
        <p>Built with React, Next.js, and Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default Footer;