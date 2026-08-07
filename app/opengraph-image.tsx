import { ImageResponse } from "next/og";

export const dynamic = "force-static";

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
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #022c22 0%, #065f46 60%, #0f766e 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#fbbf24",
          }}
        >
          Quepos, Costa Rica
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 800,
            marginTop: 16,
          }}
        >
          Fischer Tropitel
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            marginTop: 20,
            color: "#d1fae5",
            maxWidth: 900,
          }}
        >
          Three jungle casas above a waterfall — in the sportfishing capital of
          the world.
        </div>
      </div>
    ),
    size
  );
}
