import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "GetSnapOnVeneers — Hiding your smile in photos?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f5f8f8",
          color: "#13233a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 800 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#13233a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 30, height: 30, borderRadius: "12px 12px 8px 8px", background: "#ffffff" }} />
          </div>
          <span>
            GetSnapOn<span style={{ color: "#0e7c7b" }}>Veneers</span>
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1 }}>
            Hiding your smile in photos?
          </div>
          <div style={{ fontSize: 30, color: "#586577" }}>Free 60-second quiz • No signup required • 18+ only</div>
        </div>
      </div>
    ),
    size,
  );
}
