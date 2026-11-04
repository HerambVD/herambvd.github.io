"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import { Cloud, renderSimpleIcon, type ICloud } from "react-icon-cloud";
import type { SimpleIcon } from "simple-icons";
import { useIsClient } from "@/shared/lib/use-is-client";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: { display: "flex", justifyContent: "center", alignItems: "center", width: "100%" },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

/**
 * Rotating 3D sphere of brand logos.
 *
 * Rendered in the browser only: the library generates random element IDs and the
 * colours depend on the theme, both of which would differ from server-rendered HTML.
 * A same-sized placeholder keeps the layout from shifting until it mounts.
 */
export default function IconCloud({ icons }: { icons: SimpleIcon[] }) {
  const isClient = useIsClient();
  const { resolvedTheme } = useTheme();
  const light = resolvedTheme === "light";

  const rendered = useMemo(
    () =>
      icons.map((icon) =>
        renderSimpleIcon({
          icon,
          bgHex: light ? "#f3f2ef" : "#080510",
          fallbackHex: light ? "#6e6e73" : "#ffffff",
          minContrastRatio: light ? 1.2 : 2,
          size: 45,
          aProps: { href: undefined, target: undefined, rel: undefined, onClick: (e) => e.preventDefault() },
        })
      ),
    [icons, light]
  );

  if (!isClient) return <div className="aspect-square w-full" data-testid="icon-cloud-placeholder" />;

  return (
    <Cloud {...cloudProps}>
      <>{rendered}</>
    </Cloud>
  );
}
