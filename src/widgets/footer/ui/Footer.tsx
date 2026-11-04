import Link from "next/link";
import { profile, SocialLinks } from "@/entities/profile";

export const FOOTER_LINKS = [
  { href: "/#experience", text: "Experience" },
  { href: "/#projects", text: "Projects" },
  { href: "/#skills", text: "Tech Stack" },
  { href: "/contact", text: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/copyright", text: "Copyright" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-12 text-gray-300">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 md:px-20">
        <div className="text-center">
          <p className="font-orbitron text-xl font-bold text-white">Let&apos;s build something reliable.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block rounded-full bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Hire Me
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {FOOTER_LINKS.map(({ href, text }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="justify-center gap-5" linkClassName="text-gray-400 hover:text-white" />

        <div className="space-y-2 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="space-x-4">
            {LEGAL_LINKS.map(({ href, text }) => (
              <Link key={href} href={href} className="hover:text-gray-300">
                {text}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
