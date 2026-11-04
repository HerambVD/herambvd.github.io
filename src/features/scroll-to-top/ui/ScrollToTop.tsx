"use client";

import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";

/** Pixels scrolled before the button appears. */
export const SHOW_AFTER_PX = 712;

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Scroll to top"
      className="fixed right-2.5 bottom-2.5 z-[49] flex h-10 w-10 items-center justify-center rounded-full bg-[#00835a99] text-white"
    >
      <ChevronsUp size={25} aria-hidden="true" />
    </button>
  );
}
