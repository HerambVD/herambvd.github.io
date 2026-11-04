"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Briefcase, CircleUser, CodeXml, Mail, MenuIcon, Rss, Wrench } from "lucide-react";
import { ThemeToggle } from "@/features/theme-toggle";
import { BLOG_URL } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/button";

type NavItem = { name: string; href: string; icon: LucideIcon; external?: boolean };

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/#", icon: CircleUser },
  { name: "Experience", href: "/#experience", icon: Briefcase },
  { name: "Projects", href: "/#projects", icon: CodeXml },
  { name: "Tech Stack", href: "/#skills", icon: Wrench },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Blog", href: BLOG_URL, icon: Rss, external: true },
];

type NavLinkProps = { item: NavItem; index: number; open: boolean; onNavigate: () => void };

const NavLink = ({ item, index, open, onNavigate }: NavLinkProps) => {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={cn(
        "group flex items-center text-sm gap-3.5 font-medium p-2 rounded-md transition-colors duration-200",
        "hover:text-gray-100 hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        item.external && "mt-5"
      )}
    >
      <Icon size={20} className="shrink-0" aria-hidden="true" />
      <span
        className={cn("whitespace-pre transition-all duration-200", !open && "opacity-0 translate-x-28 overflow-hidden")}
        style={{ transitionDelay: `${(index + 7) * 10}ms` }}
      >
        {item.name}
      </span>
      {/* Hover label when the sidebar is collapsed */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden",
          "group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit",
          open && "hidden"
        )}
      >
        {item.name}
      </span>
    </Link>
  );
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="fixed z-50 flex gap-6 min-h-screen" aria-label="Main navigation">
      <div className={cn("bg-transparent px-4 transition-all duration-300", open ? "w-72 backdrop-blur" : "w-12 md:w-16")}>
        <div className="flex min-w-full justify-between py-3">
          <Link href="/" onClick={close} className={cn("flex items-center gap-2 transition-all duration-200", !open && "w-0")}>
            {open && <span className="text-2xl">{"{"}</span>}
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, no image optimizer */}
            <img src="/assets/images/logo.jpeg" alt="Heramb Devbhankar logo" width={25} height={25} className="rounded-xl" />
            {open && <span className="text-2xl">{"}"}</span>}
          </Link>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="p-3 h-9 w-9"
          >
            <MenuIcon size={50} />
          </Button>
        </div>

        <div className={cn("mt-4 flex flex-col gap-2 relative", !open && "hidden md:block")}>
          {NAV_ITEMS.map((item, index) => (
            <NavLink key={item.name} item={item} index={index} open={open} onNavigate={close} />
          ))}
          <div className={cn("mt-5", !open && "flex justify-center")}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
