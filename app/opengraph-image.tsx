import { ImageResponse } from "next/og";

export const alt = "Moazzem Labs — Built for the ummah, not for the algorithm";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          color: "#ffffff",
          background: "radial-gradient(ellipse at 50% 110%, #0d2440 0%, #05080f 55%, #000000 100%)",
        }}
      >
        <div style={{ fontSize: 30, fontWeight: 600 }}>Moazzem Labs</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1.02, letterSpacing: -2 }}>
          <div style={{ display: "flex" }}>
            Built for the <span style={{ color: "#a9dcff", marginLeft: 22 }}>ummah,</span>
          </div>
          <div>not for the algorithm.</div>
        </div>
        <div style={{ fontSize: 28, color: "#c9d3e2" }}>A community technology lab</div>
      </div>
    ),
    size,
  );
}
