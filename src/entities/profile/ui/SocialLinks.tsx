import { cn } from "@/shared/lib/cn";
import { emailLink, socialLinks } from "../model/profile";

type SocialLinksProps = {
  /** Include the email link after the social profiles. */
  withEmail?: boolean;
  className?: string;
  linkClassName?: string;
  iconClassName?: string;
};

/**
 * Row of icon links to social profiles. External links open in a new tab and carry
 * rel="me", which tells crawlers these profiles belong to the owner of this site.
 */
export default function SocialLinks({ withEmail = false, className, linkClassName, iconClassName }: SocialLinksProps) {
  const links = withEmail ? [...socialLinks, emailLink] : socialLinks;
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {links.map(({ label, href, icon: Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={external ? "_blank" : undefined}
              rel={external ? "me noopener noreferrer" : undefined}
              className={cn("block transition-colors", linkClassName)}
            >
              <Icon className={cn("h-5 w-5", iconClassName)} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
