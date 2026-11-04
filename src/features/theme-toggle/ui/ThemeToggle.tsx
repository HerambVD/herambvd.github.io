"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useIsClient } from "@/shared/lib/use-is-client";
import { Button } from "@/shared/ui/button";

export default function ThemeToggle() {
  const isClient = useIsClient();
  const { resolvedTheme, setTheme } = useTheme();
  const next = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(next)}
      // The theme is only known in the browser, so the server renders a neutral label
      // (a theme-specific one would not match the server HTML during hydration).
      aria-label={isClient ? `Switch to ${next} mode` : "Toggle theme"}
      className="h-9 w-9"
    >
      {/* Icons switch with the `dark` class via CSS, so they always match. */}
      <Sun className="h-4 w-4 dark:hidden" aria-hidden="true" />
      <Moon className="h-4 w-4 hidden dark:block" aria-hidden="true" />
    </Button>
  );
}
