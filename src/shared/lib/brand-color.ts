/** Relative luminance (0 = black, 1 = white) of a 6-digit hex colour, per WCAG. */
export function luminance(hex: string): number {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.replace("#", "").slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Brand colour to draw a logo in, or "currentColor" when the brand colour is too dark
 * to see on the dark theme (e.g. GitHub's near-black), so the logo follows the text colour.
 */
export function logoColor(hex: string): string {
  return luminance(hex) < 0.05 ? "currentColor" : `#${hex.replace("#", "")}`;
}
