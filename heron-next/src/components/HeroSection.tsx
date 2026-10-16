"use client";

import React, { useState, useEffect } from "react";

interface HeroProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
}

export default function HeroSection({
  badge = "[0,0] // REVIT & ARCHICAD NATIVE",
  title = "AN AI AGENT THAT WORKS INSIDE YOUR DESIGN TOOLS",
  subtitle = "Heron sees your model, spots problems, and suggests fixes as you design. When you approve, it makes the edit itself, all without leaving the software you already use.",
  primaryCtaText = "Book a demo",
  secondaryCtaText = "See how it works",
}: HeroProps) {
  const [scanProgress, setScanProgress] = useState(64);

  // Smooth oscillating datum scanline
  useEffect(() => {
    let animId: number;
    let start = performance.now();

    const loop = (now: number) => {
      const elapsed = (now - start) / 1000;
      // Oscillate between 15% and 88%
      const p = 51.5 + Math.sin(elapsed * 0.8) * 36.5;
      setScanProgress(p);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="hero-section" style={{ position: "relative", width: "100%", padding: "64px 24px 32px 24px", maxWidth: "1600px", margin: "0 auto" }}>
      {/* TOP DRAFTING METADATA STRIP */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px dashed rgba(0,0,0,0.12)", paddingBottom: "12px", marginBottom: "32px", fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "rgba(18, 32, 43, 0.6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fa3600", display: "inline-block" }}></span>
          <span>{badge}</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <span>LAT: 37.7749° N</span>
          <span>SCALE: 1:100</span>
          <span>BIM MODEL: ACTIVE</span>
        </div>
      </div>

      {/* HEADLINE & INTRODUCTION */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center", marginBottom: "48px" }}>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5.5vw, 5.25rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#0c161e",
            margin: "0 0 24px 0",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
            lineHeight: 1.6,
            color: "rgba(18, 32, 43, 0.75)",
            maxWidth: "760px",
            margin: "0 auto 32px auto",
          }}
        >
          {subtitle}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#contact"
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
              boxShadow: "0 4px 16px rgba(250, 54, 0, 0.25)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            <span style={{ padding: "12px 24px" }}>{primaryCtaText}</span>
            <span style={{ width: "1px", height: "24px", background: "rgba(255,255,255,0.3)" }}></span>
            <span style={{ padding: "12px 16px" }}>→</span>
          </a>

          <a
            href="#why-us"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "transparent",
              color: "#0c161e",
              textDecoration: "none",
              fontFamily: "monospace",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              border: "1px solid rgba(0,0,0,0.18)",
              padding: "12px 24px",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#0c161e";
              e.currentTarget.style.background = "rgba(0,0,0,0.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.18)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {secondaryCtaText}
          </a>
        </div>
      </div>

      {/* CENTRAL ARCHITECTURAL CAD ELEVATION & LASER DATUM SCANNER */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          background: "#0c161e",
          border: "1px solid rgba(237, 240, 238, 0.15)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        {/* CAD Grid Header Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 16px",
            background: "rgba(18, 32, 43, 0.95)",
            borderBottom: "1px solid rgba(237, 240, 238, 0.1)",
            fontFamily: "monospace",
            fontSize: "11px",
            color: "#edf0ee",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }}></span>
            <span>ELEVATION: LEVEL 04 — WEST SECTION</span>
          </div>
          <div style={{ display: "flex", gap: "16px", color: "rgba(237, 240, 238, 0.6)" }}>
            <span>GRID: 200mm</span>
            <span style={{ color: "#fa3600" }}>COMPLIANCE: 98%</span>
          </div>
        </div>

        {/* SVG Drawing Canvas */}
        <div style={{ position: "relative", width: "100%", height: "480px" }}>
          <svg viewBox="0 0 1000 480" style={{ width: "100%", height: "100%", display: "block" }}>
            <defs>
              <pattern id="hero-cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(237, 240, 238, 0.05)" strokeWidth="0.8" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect width="1000" height="480" fill="#0c161e" />
            <rect width="1000" height="480" fill="url(#hero-cad-grid)" />

            {/* Architectural Building Elevation Wireframe */}
            <g stroke="rgba(237, 240, 238, 0.4)" strokeWidth="1" fill="none">
              {/* Outer Building Structural Frame */}
              <rect x="180" y="60" width="640" height="380" stroke="#edf0ee" strokeWidth="1.5" />
              
              {/* Floor Levels */}
              <line x1="180" y1="140" x2="820" y2="140" stroke="rgba(237, 240, 238, 0.25)" strokeDasharray="4,4" />
              <line x1="180" y1="220" x2="820" y2="220" stroke="rgba(237, 240, 238, 0.25)" strokeDasharray="4,4" />
              <line x1="180" y1="300" x2="820" y2="300" stroke="rgba(237, 240, 238, 0.25)" strokeDasharray="4,4" />
              <line x1="180" y1="380" x2="820" y2="380" stroke="rgba(237, 240, 238, 0.25)" strokeDasharray="4,4" />

              {/* Window Bays & Mullions */}
              {[240, 320, 400, 480, 560, 640, 720, 780].map((x, i) => (
                <line key={i} x1={x} y1="60" x2={x} y2="440" stroke="rgba(237, 240, 238, 0.2)" />
              ))}

              {/* Roof Truss Detail */}
              <polygon points="180,60 500,20 820,60" stroke="#fa3600" strokeWidth="1.2" />
              <line x1="500" y1="20" x2="500" y2="60" stroke="#fa3600" strokeWidth="1" strokeDasharray="2,2" />

              {/* Structural Cross Bracing */}
              <line x1="180" y1="380" x2="320" y2="440" stroke="rgba(237, 240, 238, 0.25)" />
              <line x1="320" y1="380" x2="180" y2="440" stroke="rgba(237, 240, 238, 0.25)" />
              <line x1="680" y1="380" x2="820" y2="440" stroke="rgba(237, 240, 238, 0.25)" />
              <line x1="820" y1="380" x2="680" y2="440" stroke="rgba(237, 240, 238, 0.25)" />

              {/* Level Markers */}
              <text x="140" y="65" fill="#94a3b8" fontSize="10" fontFamily="monospace">LVL 05 +18.0M</text>
              <text x="140" y="145" fill="#94a3b8" fontSize="10" fontFamily="monospace">LVL 04 +14.4M</text>
              <text x="140" y="225" fill="#94a3b8" fontSize="10" fontFamily="monospace">LVL 03 +10.8M</text>
              <text x="140" y="305" fill="#94a3b8" fontSize="10" fontFamily="monospace">LVL 02 +07.2M</text>
              <text x="140" y="385" fill="#94a3b8" fontSize="10" fontFamily="monospace">LVL 01 +03.6M</text>
              <text x="140" y="445" fill="#fa3600" fontSize="10" fontFamily="monospace">GRADE ±0.0M</text>
            </g>

            {/* DYNAMIC OSCILLATING HORIZONTAL LASER DATUM SCANNER */}
            <g pointerEvents="none">
              <line
                x1="40"
                y1={(scanProgress / 100) * 440 + 20}
                x2="960"
                y2={(scanProgress / 100) * 440 + 20}
                stroke="#fa3600"
                strokeWidth="1.5"
                strokeDasharray="6,4"
              />
              <circle cx="950" cy={(scanProgress / 100) * 440 + 20} r="4" fill="#fa3600" />
              <rect
                x="840"
                y={(scanProgress / 100) * 440 + 8}
                width="100"
                height="22"
                fill="#fa3600"
                rx="2"
              />
              <text
                x="890"
                y={(scanProgress / 100) * 440 + 23}
                fill="#ffffff"
                fontSize="10"
                fontFamily="monospace"
                fontWeight="bold"
                textAnchor="middle"
              >
                DATUM: {Math.round(scanProgress)}%
              </text>
            </g>

            {/* Corner Registration Crosshairs */}
            {[[20, 20], [980, 20], [20, 460], [980, 460]].map(([cx, cy], i) => (
              <g key={i} stroke="rgba(237, 240, 238, 0.4)" strokeWidth="1">
                <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} />
                <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
