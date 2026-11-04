import Script from "next/script";
import { gaInitScript, gaScriptUrl } from "../lib/gtag";

/** Loads Google Analytics 4. Renders nothing when no measurement ID is configured. */
export default function Analytics({ measurementId }: { measurementId: string }) {
  if (!measurementId) return null;
  return (
    <>
      <Script src={gaScriptUrl(measurementId)} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {gaInitScript(measurementId)}
      </Script>
    </>
  );
}
