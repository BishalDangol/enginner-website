"use client";

import React, { useState } from "react";

export default function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  return (
    <section style={{ width: "100%", maxWidth: "1600px", margin: "80px auto", padding: "0 24px" }}>
      {/* SECTION HEADER */}
      <div style={{ marginBottom: "40px" }}>
        <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", letterSpacing: "0.08em" }}>
          [THE SUITE]
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 800, textTransform: "uppercase", margin: "8px 0 0 0", color: "#0c161e", letterSpacing: "-0.02em" }}>
          HOW HERON INTEGRATES INTO YOUR WORKFLOW
        </h2>
      </div>

      {/* TWO-COLUMN INTERACTIVE SHOWCASE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        {/* LEFT COLUMN: TABS & EXPLANATION */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* TAB 01 */}
          <div
            onClick={() => setActiveTab(0)}
            style={{
              padding: "32px",
              background: activeTab === 0 ? "#ffffff" : "rgba(0,0,0,0.02)",
              border: activeTab === 0 ? "1px solid #0c161e" : "1px solid rgba(0,0,0,0.08)",
              borderLeft: activeTab === 0 ? "4px solid #fa3600" : "1px solid rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: activeTab === 0 ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, color: "#fa3600" }}>[01]</span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", margin: 0, color: "#0c161e" }}>
                Heron Chat Widget
              </h3>
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(18, 32, 43, 0.75)", margin: 0 }}>
              Lives right inside Autodesk Revit, ArchiCAD, and Rhino. Ask specific questions about your building and get answers that reflect your actual layout, occupancy type, and jurisdiction standards, not generic rule lookups.
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "20px", fontFamily: "monospace", fontSize: "11px", color: "rgba(18, 32, 43, 0.6)" }}>
              <span>• NATIVE FLOATING HUD</span>
              <span>• DIRECT MODEL EDITS</span>
            </div>
          </div>

          {/* TAB 02 */}
          <div
            onClick={() => setActiveTab(1)}
            style={{
              padding: "32px",
              background: activeTab === 1 ? "#ffffff" : "rgba(0,0,0,0.02)",
              border: activeTab === 1 ? "1px solid #0c161e" : "1px solid rgba(0,0,0,0.08)",
              borderLeft: activeTab === 1 ? "4px solid #fa3600" : "1px solid rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              boxShadow: activeTab === 1 ? "0 8px 30px rgba(0,0,0,0.06)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span style={{ fontFamily: "monospace", fontSize: "13px", fontWeight: 700, color: "#fa3600" }}>[02]</span>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, textTransform: "uppercase", margin: 0, color: "#0c161e" }}>
                Heron Dashboard
              </h3>
            </div>
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(18, 32, 43, 0.75)", margin: 0 }}>
              Firm-wide oversight across all active models. Track team compliance scores, automated code audits, open warnings, and hours saved across every project in real-time.
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "20px", fontFamily: "monospace", fontSize: "11px", color: "rgba(18, 32, 43, 0.6)" }}>
              <span>• 94% MODEL HEALTH SCORE</span>
              <span>• JURISDICTION ARCHIVE</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PINNED CAD SCHEMATIC VIEWPORT */}
        <div
          style={{
            background: "#0c161e",
            border: "1px solid rgba(237, 240, 238, 0.15)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 16px 40px rgba(0,0,0,0.2)",
            minHeight: "440px",
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              padding: "12px 18px",
              background: "rgba(18, 32, 43, 0.95)",
              borderBottom: "1px solid rgba(237, 240, 238, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "monospace",
              fontSize: "11px",
              color: "#edf0ee",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: activeTab === 0 ? "#fa3600" : "#10b981" }}></span>
              <span>{activeTab === 0 ? "CAD VIEWPORT // WIDGET OVERLAY" : "METRICS VIEWPORT // FIRM OVERVIEW"}</span>
            </div>
            <span style={{ color: "rgba(237, 240, 238, 0.6)" }}>REVIT 2026 // LIVE LINK</span>
          </div>

          {/* Interactive Visual Canvas */}
          <div style={{ flex: 1, padding: "24px", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {activeTab === 0 ? (
              /* CAD Floor Plan with Issue Pins */
              <svg viewBox="0 0 600 360" style={{ width: "100%", height: "100%", maxHeight: "360px" }}>
                {/* Grid */}
                <defs>
                  <pattern id="showcase-cad-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(237, 240, 238, 0.05)" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="600" height="360" fill="#0c161e" />
                <rect width="600" height="360" fill="url(#showcase-cad-grid)" />

                {/* Rooms Outline */}
                <g stroke="#edf0ee" strokeWidth="1.5" fill="none">
                  {/* Conference Room */}
                  <rect x="60" y="50" width="220" height="150" />
                  <text x="75" y="80" fill="#94a3b8" fontSize="10" fontFamily="monospace">MEETING ROOM A</text>
                  <text x="75" y="100" fill="#64748b" fontSize="8" fontFamily="monospace">AREA: 33 m²</text>

                  {/* Office B */}
                  <rect x="320" y="50" width="220" height="150" />
                  <text x="335" y="80" fill="#94a3b8" fontSize="10" fontFamily="monospace">OFFICE SUITE B</text>

                  {/* Corridor */}
                  <rect x="60" y="230" width="480" height="80" strokeDasharray="4,4" />
                  <text x="75" y="260" fill="#fa3600" fontSize="10" fontFamily="monospace">CORRIDOR 102 (EGRESS)</text>
                </g>

                {/* Animated Issue Marker Pins */}
                <g>
                  {/* Pin 1: Low sill */}
                  <circle cx="280" cy="80" r="14" fill="#fa3600" opacity="0.9" />
                  <text x="280" y="84" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">01</text>
                  <circle cx="280" cy="80" r="22" fill="none" stroke="#fa3600" strokeWidth="1" strokeDasharray="2,2" />

                  {/* Pin 2: Corridor width check */}
                  <circle cx="300" cy="270" r="14" fill="#fa3600" opacity="0.9" />
                  <text x="300" y="274" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">02</text>
                  <circle cx="300" cy="270" r="22" fill="none" stroke="#fa3600" strokeWidth="1" strokeDasharray="2,2" />
                </g>

                {/* Floating Widget Callout */}
                <g transform="translate(180, 110)">
                  <rect x="0" y="0" width="240" height="74" fill="rgba(18, 32, 43, 0.95)" stroke="#fa3600" strokeWidth="1" rx="4" />
                  <text x="12" y="22" fill="#fa3600" fontSize="10" fontFamily="monospace" fontWeight="bold">HERON AI INSPECTOR</text>
                  <text x="12" y="42" fill="#edf0ee" fontSize="9" fontFamily="monospace">IBC 1020.2: Min width 36" required</text>
                  <text x="12" y="60" fill="#10b981" fontSize="9" fontFamily="monospace">Suggested auto-fix: Widen to 44"</text>
                </g>
              </svg>
            ) : (
              /* Dashboard Analytics Screen */
              <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px", color: "#edf0ee", fontFamily: "monospace" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>ACTIVE AUDITS</div>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#fa3600", marginTop: "4px" }}>08</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>HEALTH SCORE</div>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#10b981", marginTop: "4px" }}>94%</div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div style={{ fontSize: "10px", color: "#94a3b8" }}>TIME SAVED</div>
                    <div style={{ fontSize: "28px", fontWeight: 800, color: "#edf0ee", marginTop: "4px" }}>16.8h</div>
                  </div>
                </div>

                <div style={{ background: "rgba(255,255,255,0.03)", padding: "18px", border: "1px solid rgba(255,255,255,0.08)", fontSize: "11px" }}>
                  <div style={{ color: "#fa3600", fontWeight: 700, marginBottom: "8px" }}>RECENT COMPLIANCE ACTIVITY</div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dashed rgba(255,255,255,0.1)" }}>
                    <span>IBC 1015.3 Low Sill Warning</span>
                    <span style={{ color: "#10b981" }}>REMEDIATED</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px dashed rgba(255,255,255,0.1)" }}>
                    <span>IBC 1011.5.2 Stair Riser Calculation</span>
                    <span style={{ color: "#fa3600" }}>NEEDS APPROVAL</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0" }}>
                    <span>Egress Clearance to Exit Door</span>
                    <span style={{ color: "#10b981" }}>VERIFIED</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
