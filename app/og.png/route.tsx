import { renderOgCard } from "./og-card";

// Written once at build time to /og.png. A real file extension matters: GitHub Pages picks the
// Content-Type from it, and social networks ignore preview images not served as image/png.
export const dynamic = "force-static";

export function GET() {
  return renderOgCard();
}
