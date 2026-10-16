"use client";

import React from "react";

const CLIENTS = [
  "GENSLER",
  "HOK",
  "PERKINS&WILL",
  "SKIDMORE, OWINGS & MERRILL",
  "ARUP",
  "FOSTER + PARTNERS",
  "ZHA",
  "BJARKE INGELS GROUP",
];

export default function ClientTicker() {
  return (
    <div
      style={{
        width: "100%",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        padding: "20px 0",
        background: "rgba(0,0,0,0.015)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", overflowX: "auto" }}>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "rgba(18, 32, 43, 0.4)", whiteSpace: "nowrap" }}>
            [TRUSTED BY DESIGN TEAMS]
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            {CLIENTS.map((client, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "rgba(18, 32, 43, 0.5)",
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fa3600")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(18, 32, 43, 0.5)")}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
