import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
          borderRadius: "14px",
          color: "white",
          display: "flex",
          fontFamily: "Arial",
          fontSize: 30,
          fontWeight: 800,
          height: "100%",
          justifyContent: "center",
          letterSpacing: -2,
          width: "100%",
        }}
      >
        WT
      </div>
    ),
    size,
  );
}
