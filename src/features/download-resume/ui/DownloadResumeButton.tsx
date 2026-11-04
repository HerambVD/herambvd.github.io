import { Download } from "lucide-react";
import { profile } from "@/entities/profile";
import ShimmerLink from "@/shared/ui/shimmer-link";

export default function DownloadResumeButton() {
  return (
    <ShimmerLink href={profile.resume.href} download={profile.resume.fileName} className="px-8">
      <span className="flex items-center gap-2 font-medium">
        <Download className="h-4 w-4" aria-hidden="true" />
        Download Resume
      </span>
    </ShimmerLink>
  );
}
