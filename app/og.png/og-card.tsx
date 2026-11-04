import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { impactStats, profile } from "@/entities/profile";

export const OG_SIZE = { width: 1200, height: 630 };

/** Social share card used by LinkedIn, X, Slack, iMessage and search previews. */
export async function renderOgCard(): Promise<ImageResponse> {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: "linear-gradient(135deg, #09090b 0%, #1e1b4b 55%, #0c4a6e 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- rendered by Satori into a PNG, not by the browser */}
        <img
          src={photoSrc}
          alt=""
          width={300}
          height={300}
          style={{ borderRadius: 9999, border: "6px solid #8b5cf6", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 20, letterSpacing: 3, color: "#22d3ee", textTransform: "uppercase" }}>
            {`${profile.title} · ${profile.company}`}
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, marginTop: 12, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 30, color: "#d4d4d8", marginTop: 20, lineHeight: 1.3 }}>{profile.headline}</div>
          <div style={{ display: "flex", gap: 36, marginTop: 36 }}>
            {impactStats.slice(0, 3).map(({ value, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: "#a78bfa" }}>{value}</div>
                <div style={{ fontSize: 20, color: "#a1a1aa" }}>{label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, color: "#71717a", marginTop: 32 }}>heramb.tech</div>
        </div>
      </div>
    ),
    OG_SIZE
  );
}
