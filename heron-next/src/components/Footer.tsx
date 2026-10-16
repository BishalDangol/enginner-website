"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{ background: "#FAF8F5", borderTop: "1px solid rgba(0,0,0,0.1)", padding: "80px 24px 40px 24px" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
        
        {/* TOP ROW: NEWSLETTER & BIG STATEMENT */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", paddingBottom: "64px", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
          <div>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "#fa3600", letterSpacing: "0.08em" }}>
              [MISSION]
            </span>
            <h3 style={{ fontSize: "2rem", fontWeight: 800, textTransform: "uppercase", color: "#0c161e", margin: "12px 0 16px 0", letterSpacing: "-0.01em" }}>
              AN AI AGENT THAT WORKS INSIDE YOUR DESIGN TOOLS
            </h3>
            <p style={{ fontSize: "1rem", color: "rgba(18, 32, 43, 0.7)", lineHeight: 1.6, maxWidth: "500px", margin: 0 }}>
              Bridging parametric computational geometry with continuous building code compliance.
            </p>
          </div>

          <div>
            <span style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(18, 32, 43, 0.5)", letterSpacing: "0.08em" }}>
              [NEWSLETTER]
            </span>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "12px 0 16px 0", color: "#0c161e" }}>
              Receive engineering updates and code compliance briefs.
            </h4>

            {subscribed ? (
              <div style={{ padding: "12px 16px", background: "rgba(16, 185, 129, 0.1)", border: "1px solid #10b981", color: "#065f46", fontFamily: "monospace", fontSize: "13px" }}>
                ✓ Thank you. We will keep you updated.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", maxWidth: "440px" }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    background: "#ffffff",
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: "14px",
                    fontFamily: "monospace",
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "12px 20px",
                    background: "#0c161e",
                    color: "#ffffff",
                    border: "none",
                    fontFamily: "monospace",
                    fontSize: "13px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#fa3600")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#0c161e")}
                >
                  Join →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MIDDLE ROW: LINKS & ADDRESS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px", padding: "48px 0", borderBottom: "1px solid rgba(0,0,0,0.08)", fontSize: "14px" }}>
          <div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>PRODUCT</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><a href="#product" style={{ color: "#0c161e", textDecoration: "none" }}>Revit Add-In</a></li>
              <li><a href="#product" style={{ color: "#0c161e", textDecoration: "none" }}>ArchiCAD Extension</a></li>
              <li><a href="#product" style={{ color: "#0c161e", textDecoration: "none" }}>Rhino Integration</a></li>
              <li><a href="#why-us" style={{ color: "#0c161e", textDecoration: "none" }}>Compliance Engine</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>COMPANY</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><Link href="/" style={{ color: "#0c161e", textDecoration: "none" }}>Home</Link></li>
              <li><a href="#why-us" style={{ color: "#0c161e", textDecoration: "none" }}>About us</a></li>
              <li><a href="#contact" style={{ color: "#0c161e", textDecoration: "none" }}>Contact</a></li>
              <li><a href="mailto:careers@heronaiapp.com" style={{ color: "#0c161e", textDecoration: "none" }}>Careers</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>ADDRESS</div>
            <p style={{ margin: 0, color: "rgba(18, 32, 43, 0.75)", lineHeight: 1.6 }}>
              60 Martin Pl, Sydney<br />
              NSW 2000, Australia
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "monospace", fontSize: "11px", color: "rgba(0,0,0,0.4)", marginBottom: "16px" }}>CONNECT</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              <li><a href="mailto:hello@heronaiapp.com" style={{ color: "#fa3600", textDecoration: "none" }}>hello@heronaiapp.com</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: "#0c161e", textDecoration: "none" }}>LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#0c161e", textDecoration: "none" }}>X / Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "32px", fontSize: "12px", fontFamily: "monospace", color: "rgba(18, 32, 43, 0.5)", flexWrap: "wrap", gap: "16px" }}>
          <div>© 2026 HERON AI. All rights reserved.</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <span>PRIVACY POLICY</span>
            <span>TERMS &amp; CONDITIONS</span>
            <span>COOKIE POLICY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
