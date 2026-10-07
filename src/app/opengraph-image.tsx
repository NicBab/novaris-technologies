import { ImageResponse } from "next/og";

//http://localhost:3001/opengraph-image

export const alt =
  "Novaris Technologies — Software, Systems, Automation & Intelligence";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#07090d",
          color: "#f5f7fa",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            top: -340,
            right: -120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(50,150,255,0.26) 0%, rgba(50,150,255,0) 68%)",
          }}
        />

        {/* Violet glow */}
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            bottom: -420,
            left: 180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(155,90,255,0.20) 0%, rgba(155,90,255,0) 68%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 82px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            {/* Simple Novaris-style mark */}
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 14,
                border: "1px solid rgba(90,170,255,0.45)",
                background:
                  "linear-gradient(135deg, rgba(60,160,255,0.16), rgba(150,80,255,0.12))",
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              N
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Novaris Technologies
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 950,
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: 24,
                fontSize: 18,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#7bbcff",
              }}
            >
              Software · Systems · Automation · Intelligence
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 66,
                lineHeight: 1.02,
                fontWeight: 700,
                letterSpacing: "-0.035em",
              }}
            >
              <span>Technology engineered</span>

              <span
                style={{
                  color: "#86bfff",
                }}
              >
                around your business.
              </span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 30,
                maxWidth: 850,
                fontSize: 22,
                lineHeight: 1.45,
                color: "#a8b0bd",
              }}
            >
              Custom software, SaaS platforms, AI integrations, automation,
              infrastructure, and connected technology.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 24,
              borderTop: "1px solid rgba(255,255,255,0.12)",
              fontSize: 16,
              color: "#8e97a5",
            }}
          >
            <span>novaristechus.com</span>

            <span>Engineering technology around real operations.</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}