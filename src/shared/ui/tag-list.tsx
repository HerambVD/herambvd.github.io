import { cn } from "@/shared/lib/cn";
import { Badge } from "./badge";

type TagListProps = {
  tags: readonly string[];
  className?: string;
};

/** A wrapping row of small grey badges, e.g. the technologies used in a role. */
export default function TagList({ tags, className }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="secondary" className="text-xs">
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
