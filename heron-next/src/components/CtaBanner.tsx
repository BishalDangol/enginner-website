"use client";

import React from "react";

export default function CtaBanner() {
  return (
    <section id="contact" style={{ width: "100%", maxWidth: "1600px", margin: "100px auto", padding: "0 24px" }}>
      <div
        style={{
          background: "#0c161e",
          border: "1px solid rgba(237, 240, 238, 0.15)",
          padding: "80px 48px",
          textAlign: "center",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        {/* Corner registration crosshairs */}
        {[[16, 16], [984, 16], [16, 984], [984, 984]].map(([x, y], i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: `${x > 500 ? "auto" : "20px"}`,
              right: `${x > 500 ? "20px" : "auto"}`,
              top: `${y > 500 ? "auto" : "20px"}`,
              bottom: `${y > 500 ? "20px" : "auto"}`,
              color: "#fa3600",
              fontFamily: "monospace",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            +
          </span>
        ))}

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#fa3600", letterSpacing: "0.1em" }}>
            [DEPLOY INSIDE YOUR TOOLS]
          </span>

          <h2
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 4rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              lineHeight: 1.1,
              margin: "16px 0 20px 0",
              letterSpacing: "-0.02em",
            }}
          >
            SEE WHAT HERON CAN DO IN YOUR MODEL
          </h2>

          <p style={{ fontSize: "1.15rem", color: "rgba(237, 240, 238, 0.75)", marginBottom: "40px", lineHeight: 1.6 }}>
            Book a tailored 20-minute demonstration and we will run Heron live inside one of your own firm&apos;s active BIM projects.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:hello@heronaiapp.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#fa3600",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "monospace",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                border: "1px solid #fa3600",
                boxShadow: "0 4px 20px rgba(250, 54, 0, 0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <span style={{ padding: "14px 28px" }}>Request firm pilot</span>
              <span style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.3)" }}></span>
              <span style={{ padding: "14px 18px" }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
