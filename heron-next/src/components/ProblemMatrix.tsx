"use client";

import React from "react";

interface ProblemItem {
  number: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const DEFAULT_PROBLEMS: ProblemItem[] = [
  {
    number: "[01]",
    title: "MANUAL",
    description: "Modelling repetitive elements eats up the hours that should belong to creative design and client coordination.",
    stat: "42%",
    statLabel: "TIME LOST IN DRAWING CLEANUP",
  },
  {
    number: "[02]",
    title: "DISJOINTED",
    description: "Code and zoning checks happen at the end of design phases, forcing expensive rework right before submittal deadlines.",
    stat: "3.2x",
    statLabel: "COST OF LATE STAGE REDESIGN",
  },
  {
    number: "[03]",
    title: "BLIND",
    description: "Complex egress, stair riser, and corridor clearance issues slip through because human reviewers cannot verify every dimension.",
    stat: "68%",
    statLabel: "PERMIT DELAYS DUE TO MISSED CODES",
  },
  {
    number: "[04]",
    title: "SLOW",
    description: "Switching back and forth between CAD/BIM software, code PDFs, and emails breaks design flow and slows execution.",
    stat: "14h",
    statLabel: "AVERAGE TIME SAVED PER PROJECT",
  },
];

export default function ProblemMatrix({ items = DEFAULT_PROBLEMS }: { items?: ProblemItem[] }) {
  return (
    <section id="product" style={{ width: "100%", maxWidth: "1600px", margin: "80px auto", padding: "0 24px" }}>
      {/* SECTION HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", borderBottom: "1px solid rgba(0,0,0,0.1)", paddingBottom: "24px" }}>
        <div>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#fa3600", letterSpacing: "0.08em" }}>
            [THE BOTTLENECK]
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, textTransform: "uppercase", margin: "8px 0 0 0", color: "#0c161e", letterSpacing: "-0.02em" }}>
            DESIGN SOFTWARE SHOULD DO MORE THAN JUST RECORD YOUR CLICKS
          </h2>
        </div>
        <span style={{ fontFamily: "monospace", fontSize: "12px", color: "rgba(18, 32, 43, 0.5)", display: "none" }} className="matrix-counter">
          04 CORE CHALLENGES
        </span>
      </div>

      {/* 4-COLUMN GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          background: "rgba(0,0,0,0.1)",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "#FAF8F5",
              padding: "36px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "360px",
              transition: "background 0.25s ease, transform 0.25s ease",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FAF8F5";
            }}
          >
            {/* Top Bar: Number & Registration Mark */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontFamily: "monospace", fontSize: "14px", fontWeight: 700, color: "#fa3600" }}>{item.number}</span>
                <span style={{ fontFamily: "monospace", fontSize: "12px", color: "rgba(0,0,0,0.3)" }}>+</span>
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, textTransform: "uppercase", margin: "0 0 16px 0", color: "#0c161e", letterSpacing: "0.02em" }}>
                {item.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "rgba(18, 32, 43, 0.75)", margin: 0 }}>
                {item.description}
              </p>
            </div>

            {/* Bottom Stat Telemetry */}
            <div style={{ borderTop: "1px dashed rgba(0,0,0,0.12)", paddingTop: "20px", marginTop: "32px" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0c161e", lineHeight: 1 }}>{item.stat}</div>
              <div style={{ fontFamily: "monospace", fontSize: "9px", color: "rgba(18, 32, 43, 0.6)", marginTop: "4px", letterSpacing: "0.04em" }}>
                {item.statLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
