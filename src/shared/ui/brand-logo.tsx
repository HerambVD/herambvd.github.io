import type { SimpleIcon } from "simple-icons";
import { logoColor } from "@/shared/lib/brand-color";
import { cn } from "@/shared/lib/cn";

type BrandLogoProps = { icon: SimpleIcon; className?: string };

/** A Simple Icons brand logo drawn in its brand colour (readable in both themes). */
export default function BrandLogo({ icon, className }: BrandLogoProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" aria-hidden="true" className={cn("h-4 w-4 shrink-0", className)} fill={logoColor(icon.hex)}>
      <path d={icon.path} />
    </svg>
  );
}
