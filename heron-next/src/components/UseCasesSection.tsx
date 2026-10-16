"use client";

import React, { useState } from "react";

const USE_CASES = [
  {
    role: "Architects",
    desc: "Hand the repetitive modelling to Heron and keep your focus on design.",
    tag: "REVIT / ARCHICAD",
    bullet: "Automated wall junctions, room schedule compliance, and envelope checks",
  },
  {
    role: "Interior Designers",
    desc: "Get quick help with layouts, fixtures, and clearances without leaving your model.",
    tag: "FIXTURES & CLEARANCE",
    bullet: "ADA accessibility verification, door swing arcs, and furniture circulation",
  },
  {
    role: "Landscape Architects",
    desc: "Sort grading, site elements, and layouts without the manual grind.",
    tag: "SITE & TOPOGRAPHY",
    bullet: "Boundary setbacks, slope limits, and curb cut clearances",
  },
  {
    role: "Engineers",
    desc: "Run discipline-specific checks and edits in the model, so coordination issues surface earlier.",
    tag: "MEP & STRUCTURAL",
    bullet: "Duct vs. beam clash mitigation, floor penetration clearances, and fire dampers",
  },
  {
    role: "BIM Managers",
    desc: "Keep models clean and on-standard with an agent that knows your firm's rules.",
    tag: "STANDARDS ENFORCEMENT",
    bullet: "Family naming compliance, unplaced room purges, and parameter verification",
  },
  {
    role: "Drafters",
    desc: "Skip the tedious drawing cleanup and let Heron handle the repeatable parts.",
    tag: "DOCUMENTATION SPEED",
    bullet: "Auto-dimensioning, sheet indexing, and elevation tag alignment",
  },
  {
    role: "Design Leads",
    desc: "Keep quality and standards consistent across everyone's work.",
    tag: "CROSS-PROJECT QA/QC",
    bullet: "Firm-wide audit logs, review turnaround reduction, and error analytics",
  },
  {
    role: "Small Firms",
    desc: "Get the output of a bigger team without adding headcount.",
    tag: "FIRM LEVERAGE",
    bullet: "2x faster project turnarounds with senior-level code compliance confidence",
  },
];

export default function UseCasesSection() {
  const [activeRoleIdx, setActiveRoleIdx] = useState(0);

  const current = USE_CASES[activeRoleIdx];

  return (
    <section id="use-cases" style={{ width: "100%", maxWidth: "1600px", margin: "100px auto", padding: "0 24px" }}>
      {/* SECTION HEADER */}
      <div style={{ marginBottom: "40px" }}>
        <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", letterSpacing: "0.08em" }}>
          [DISCIPLINES]
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, textTransform: "uppercase", margin: "8px 0 0 0", color: "#0c161e", letterSpacing: "-0.02em" }}>
          MADE FOR THE PEOPLE IN THE MODEL
        </h2>
      </div>

      {/* INTERACTIVE ROLES SPLIT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        {/* ROLE SELECTION LIST */}
        <div style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(0,0,0,0.1)", background: "#ffffff" }}>
          {USE_CASES.map((uc, idx) => {
            const isSelected = activeRoleIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveRoleIdx(idx)}
                style={{
                  padding: "18px 24px",
                  borderBottom: idx !== USE_CASES.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  background: isSelected ? "#0c161e" : "transparent",
                  color: isSelected ? "#ffffff" : "#0c161e",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontFamily: "monospace", fontSize: "11px", color: isSelected ? "#fa3600" : "rgba(0,0,0,0.4)" }}>
                    0{idx + 1}
                  </span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase" }}>
                    {uc.role}
                  </span>
                </div>
                <span style={{ color: isSelected ? "#fa3600" : "rgba(0,0,0,0.2)" }}>
                  {isSelected ? "●" : "+"}
                </span>
              </div>
            );
          })}
        </div>

        {/* ACTIVE ROLE DETAIL PREVIEW */}
        <div
          style={{
            background: "#FAF8F5",
            border: "1px solid rgba(0,0,0,0.1)",
            padding: "48px 36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <div>
            <div style={{ display: "inline-block", background: "rgba(250, 54, 0, 0.1)", color: "#fa3600", fontFamily: "monospace", fontSize: "11px", fontWeight: 700, padding: "4px 10px", marginBottom: "20px" }}>
              {current.tag}
            </div>

            <h3 style={{ fontSize: "2.2rem", fontWeight: 800, textTransform: "uppercase", color: "#0c161e", margin: "0 0 16px 0" }}>
              {current.role}
            </h3>

            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, color: "rgba(18, 32, 43, 0.8)", margin: "0 0 32px 0" }}>
              {current.desc}
            </p>

            <div style={{ borderTop: "1px dashed rgba(0,0,0,0.15)", paddingTop: "24px" }}>
              <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", fontWeight: 700, marginBottom: "8px" }}>
                CORE AUTOMATION:
              </div>
              <div style={{ fontSize: "1rem", color: "#0c161e", fontWeight: 600 }}>
                {current.bullet}
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#0c161e",
                color: "#ffffff",
                textDecoration: "none",
                fontFamily: "monospace",
                fontSize: "13px",
                fontWeight: 600,
                padding: "12px 24px",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#fa3600")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0c161e")}
            >
              <span>See {current.role} workflow</span>
              <span style={{ marginLeft: "8px" }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
