"use client";

import React, { useState } from "react";

const STEPS = [
  {
    id: "observe",
    number: "01",
    title: "Observe",
    subtitle: "Heron watches your model as you design",
    badge: "BACKGROUND MONITORING",
    codeTag: "IBC 1015.3",
    description: "Operates silently in your CAD workspace. It tracks geometry changes, room area schedules, and wall placements without triggering popups or lagging performance.",
    stat: "0 ms",
    statDesc: "LATENCY OVERHEAD ON MODEL",
  },
  {
    id: "advise",
    number: "02",
    title: "Advise",
    subtitle: "Flags issues and suggests fixes in plain language",
    badge: "AUTOMATED CODE AUDIT",
    codeTag: "IBC 1020.2 CORRIDOR WIDTH",
    description: "When a corridor is 2 inches too narrow or a window sill violates fall protection limits, Heron explains the rule, quotes the local building code clause, and offers compliant layout alternatives.",
    stat: "100%",
    statDesc: "JURISDICTION-ACCURATE RULES",
  },
  {
    id: "act",
    number: "03",
    title: "Act",
    subtitle: "With your approval, it makes the edit directly in the model",
    badge: "ONE-CLICK REMEDIATION",
    codeTag: "AUTO-EDIT VERIFIED",
    description: "You remain in complete control. Click 'Apply Fix' and Heron adjusts the wall boundary, repositions the door swing, or recalculates stair risers directly inside Revit or ArchiCAD.",
    stat: "1 Click",
    statDesc: "MODEL GEOMETRY EXECUTION",
  },
  {
    id: "learn",
    number: "04",
    title: "Learn",
    subtitle: "Picks up your firm's standards and gets smarter over time",
    badge: "FIRM STANDARD ADAPTATION",
    codeTag: "CUSTOM DESIGN SYSTEM",
    description: "Heron remembers your office's preferred door families, typical partition assemblies, and client guidelines. Every approval refines how it advises future projects.",
    stat: "Continuous",
    statDesc: "TEAM KNOWLEDGE RETENTION",
  },
];

export default function WhyUsSection() {
  const [activeStep, setActiveStep] = useState(1); // default to 'Advise'

  const current = STEPS[activeStep];

  return (
    <section id="why-us" style={{ width: "100%", maxWidth: "1600px", margin: "100px auto", padding: "0 24px" }}>
      {/* SECTION HEADER */}
      <div style={{ marginBottom: "48px" }}>
        <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", letterSpacing: "0.08em" }}>
          [WHY HERON]
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, textTransform: "uppercase", margin: "8px 0 0 0", color: "#0c161e", letterSpacing: "-0.02em" }}>
          BUILT TO WORK THE WAY YOU DO
        </h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(18, 32, 43, 0.75)", maxWidth: "700px", marginTop: "12px", lineHeight: 1.6 }}>
          Heron fits into your existing process instead of replacing it. It watches quietly, speaks up only when something needs attention, and never touches your model without your explicit sign-off.
        </p>
      </div>

      {/* 4-STEP INTERACTIVE WORKFLOW */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        {/* STEP BUTTONS */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                style={{
                  padding: "24px 28px",
                  background: isSelected ? "#ffffff" : "rgba(0,0,0,0.02)",
                  border: isSelected ? "1px solid #0c161e" : "1px solid rgba(0,0,0,0.08)",
                  borderLeft: isSelected ? "4px solid #fa3600" : "1px solid rgba(0,0,0,0.08)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontFamily: "monospace", fontSize: "11px", color: isSelected ? "#fa3600" : "rgba(0,0,0,0.4)", fontWeight: 700 }}>
                    PHASE {step.number}
                  </div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, textTransform: "uppercase", color: "#0c161e", margin: "4px 0" }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "rgba(18, 32, 43, 0.7)" }}>
                    {step.subtitle}
                  </div>
                </div>
                <span style={{ fontSize: "18px", color: isSelected ? "#fa3600" : "rgba(0,0,0,0.2)" }}>→</span>
              </div>
            );
          })}
        </div>

        {/* ACTIVE PHASE CAD AUDIT PREVIEW */}
        <div
          style={{
            background: "#0c161e",
            border: "1px solid rgba(237, 240, 238, 0.15)",
            padding: "36px",
            color: "#edf0ee",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
            minHeight: "420px",
          }}
        >
          {/* Header */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fa3600" }}></span>
                <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", letterSpacing: "0.08em" }}>
                  {current.badge}
                </span>
              </div>
              <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#94a3b8" }}>
                [{current.codeTag}]
              </span>
            </div>

            <h3 style={{ fontSize: "1.8rem", fontWeight: 800, textTransform: "uppercase", margin: "0 0 16px 0", color: "#ffffff" }}>
              {current.title}: {current.subtitle}
            </h3>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(237, 240, 238, 0.8)", margin: 0 }}>
              {current.description}
            </p>

            {/* Interactive Reticle Simulation Box */}
            <div
              style={{
                marginTop: "28px",
                background: "rgba(255,255,255,0.03)",
                border: "1px dashed rgba(250, 54, 0, 0.4)",
                padding: "20px",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(250, 54, 0, 0.15)", border: "1px solid #fa3600", display: "flex", alignItems: "center", justifyContent: "center", color: "#fa3600", fontWeight: "bold" }}>
                ✓
              </div>
              <div>
                <div style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", fontWeight: 700 }}>
                  ACTIVE PROTOCOL: {current.codeTag}
                </div>
                <div style={{ fontSize: "12px", color: "#edf0ee", marginTop: "2px" }}>
                  Real-time validation against 2024 International Building Code
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div style={{ borderTop: "1px dashed rgba(255,255,255,0.12)", paddingTop: "20px", marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fa3600" }}>{current.stat}</div>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#94a3b8" }}>{current.statDesc}</div>
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
              ISO 19650 BIM COMPLIANT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
