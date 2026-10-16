"use client";

import React, { useState } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Product", href: "#product" },
  { label: "Why Us", href: "#why-us" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "About us", href: "#about" },
];

export default function Navbar({ navItems = DEFAULT_NAV_ITEMS }: { navItems?: NavItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header" style={{ position: "sticky", top: 0, zIndex: 100, width: "100%", background: "var(--cl-bg, #FAF8F5)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", color: "#111" }}>
          <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.81268 5.8125L3.18768 8.125L16.0002 16.0625L20.0002 13.625L6.81268 5.8125Z" fill="#fa3600" />
              <path d="M15.8123 31.1245V16.1245L2.49982 8.68701V23.562L15.8123 31.1245Z" fill="#fa3600" />
              <path d="M19.8752 13.8745L16.0002 16.187V31.1245L20.1252 28.937V23.937L24.5627 21.437L25.0002 26.187L29.1877 23.562L28.6877 8.68701L24.5627 10.8745V16.187L20.1252 18.562L19.8752 13.8745Z" fill="#fa3600" />
              <path d="M15.6878 0.75L12.0628 3.0625L24.8128 10.9375L28.7503 8.3125L15.6878 0.75Z" fill="#fa3600" />
            </svg>
          </div>
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "16px", letterSpacing: "0.08em" }}>HERON AI</span>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav style={{ display: "none" }} className="desktop-nav">
          <ul style={{ display: "flex", listStyle: "none", gap: "32px", margin: 0, padding: 0 }}>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  style={{
                    color: "rgba(18, 32, 43, 0.75)",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fa3600")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(18, 32, 43, 0.75)")}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ACTION BUTTON & BADGES */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Site of the Day Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid rgba(0,0,0,0.12)", padding: "4px 10px", fontSize: "11px", fontFamily: "monospace", color: "#666" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fa3600" }}></span>
            <span>FWA / SOTD</span>
          </div>

          {/* Split Action Button */}
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
              letterSpacing: "0.04em",
              border: "1px solid #0c161e",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#fa3600";
              e.currentTarget.style.borderColor = "#fa3600";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0c161e";
              e.currentTarget.style.borderColor = "#0c161e";
            }}
          >
            <span style={{ padding: "8px 16px" }}>Book a demo</span>
            <span style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.2)" }}></span>
            <span style={{ padding: "8px 12px" }}>→</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              background: "none",
              border: "1px solid rgba(0,0,0,0.15)",
              padding: "8px",
              cursor: "pointer",
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            <span style={{ width: "18px", height: "2px", background: "#111" }}></span>
            <span style={{ width: "18px", height: "2px", background: "#111" }}></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <div style={{ padding: "16px 24px", background: "var(--cl-bg, #FAF8F5)", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: "#111", textDecoration: "none", fontSize: "16px", fontWeight: 500 }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
