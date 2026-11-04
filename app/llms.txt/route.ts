import { buildLlmsTxt } from "./build-llms-txt";

// Written once at build time to /llms.txt (required for `output: "export"`).
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
