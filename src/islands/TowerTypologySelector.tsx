import React, { useState } from "react";

export interface TowerTypology {
  id: string;
  name: string;
  category: string;
  heightRange: string;
  windRating: string;
  typicalTerrain: string;
  antennaCapacity: string;
  foundationType: string;
  description: string;
  svgDrawing: string;
}

export const TOWER_TYPES: TowerTypology[] = [
  {
    id: "typ-lattice-4leg",
    name: "4-Legged Angular Lattice Tower",
    category: "HEAVY STRUCTURAL // MULTI-TENANT",
    heightRange: "18m to 80m",
    windRating: "Up to 210 km/h (Class V)",
    typicalTerrain: "Valley basins, foothills, commercial yards",
    antennaCapacity: "Up to 18x Panel Sectors + 4x Solid Dishes",
    foundationType: "Pad & Chimney Reinforced Concrete Raft",
    description:
      "Engineered from high-tensile ASTM A572 Grade 50 steel angles. Designed with high torsional stiffness ensuring less than 0.5 degrees twist for mission-critical microwave and 5G Massive MIMO links.",
    svgDrawing: "lattice",
  },
  {
    id: "typ-guyed-mast",
    name: "High-Altitude Guyed Mast System",
    category: "ALPINE RIDGE RELAY // HIGH ELEVATION",
    heightRange: "45m to 120m",
    windRating: "180 km/h + Radial Ice Accretion",
    typicalTerrain: "Mountain peaks (> 2,500m ASL), high ridge crests",
    antennaCapacity: "8x Long-Haul Parabolic Dishes + 6x Sectors",
    foundationType: "Micro-Piles + Post-Tensioned Rock Anchors",
    description:
      "Cost-effective slender steel mast held stable by 3-way multi-tier prestressed guy strands. Ideal for remote ridge summits where ready-mix concrete batch transport is physically constrained.",
    svgDrawing: "guyed",
  },
  {
    id: "typ-monopole",
    name: "Polygonal Flanged Steel Monopole",
    category: "URBAN ARTERIAL // COMPACT FOOTPRINT",
    heightRange: "15m to 42m",
    windRating: "160 km/h (Class IV)",
    typicalTerrain: "Urban roadside, highway junctions, enterprise parks",
    antennaCapacity: "9x Cellular Sectors + 2x Compact Dishes",
    foundationType: "Single Deep Bored Cast-in-Situ Pier",
    description:
      "Manufactured from high-strength multi-sided tapered polygonal steel with internal cable management. Designed for installation within compact 6x6 meter compounds with minimal visual footprint.",
    svgDrawing: "monopole",
  },
  {
    id: "typ-rooftop-grillage",
    name: "Rooftop Ballasted Grillage & Stub",
    category: "METRO COMMERCIAL // ROOFTOP DAS",
    heightRange: "6m to 24m",
    windRating: "140 km/h Gusts",
    typicalTerrain: "Commercial concrete building rooftops",
    antennaCapacity: "6x Micro-Cell Sectors + 1x Microwave Link",
    foundationType: "Non-Penetrating Counter-Weight Ballast Frame",
    description:
      "Non-penetrating structural steel grillage with concrete ballast blocks engineered to avoid puncturing building waterproofing membranes, distributing load across primary structural columns.",
    svgDrawing: "rooftop",
  },
  {
    id: "typ-microwave-relay",
    name: "Long-Haul Microwave Backhaul Tower",
    category: "CROSS-COUNTRY BACKBONE // CARRIER-GRADE",
    heightRange: "30m to 60m",
    windRating: "180 km/h (Strict Angular Tilt < 0.3°)",
    typicalTerrain: "Inter-city line-of-sight hops, river crossings",
    antennaCapacity: "6x Solid 1.8m Parabolic Dishes (Dual Pol)",
    foundationType: "Heavy Deep Piled Footings",
    description:
      "Heavy-duty lattice mast with supplementary torque-arm stabilizing star frames engineered to prevent microwave beam squint during monsoon gale conditions, maintaining 99.999% link availability.",
    svgDrawing: "microwave",
  },
  {
    id: "typ-broadcast-tower",
    name: "Broadband & Broadcast Array Mast",
    category: "CIVIL BROADCAST // HIGH APERTURE",
    heightRange: "50m to 100m",
    windRating: "170 km/h Gusts",
    typicalTerrain: "Central transmission plateaus, regional hubs",
    antennaCapacity: "High-power FM/VHF dipole bays + DVB-T2 arrays",
    foundationType: "Mass Concrete Gravity Footings",
    description:
      "Engineered for high radio-frequency power transmission with specialized co-axial feedline ladders, high-capacity grounding rings (< 1.5 Ω), and ICAO dual-redundant obstacle strobe systems.",
    svgDrawing: "broadcast",
  },
];

export default function TowerTypologySelector() {
  const [selectedId, setSelectedId] = useState<string>(TOWER_TYPES[0].id);

  const selected = TOWER_TYPES.find((t) => t.id === selectedId) || TOWER_TYPES[0];

  return (
    <div className="tower-typology-component" aria-labelledby="typology-heading">
      {/* Top Banner */}
      <div className="typology-top-bar">
        <div>
          <span className="label text-accent">TOWER CATALOGUE // AS-BUILT STRUCTURAL CLASSIFICATIONS</span>
          <h2 id="typology-heading" className="typology-title">Telecommunication Tower Typologies</h2>
        </div>
        <span className="label count-tag">6 CLASSIFICATIONS DEPLOYED</span>
      </div>

      {/* Tabs */}
      <div className="typology-tab-list" role="tablist" aria-label="Select Tower Type">
        {TOWER_TYPES.map((item) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={`typology-tab-btn ${isSelected ? "tab-active" : ""}`}
              onClick={() => setSelectedId(item.id)}
            >
              <span className="label tab-cat">{item.heightRange}</span>
              <span className="tab-name">{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Detailed Spec Inspection Frame */}
      <div className="typology-detail-frame">
        <div className="typology-detail-grid">
          {/* Left: Vector Schematic Artwork */}
          <div className="typology-drawing-pane">
            <div className="drawing-header label">
              <span>SCHEMATIC ELEVATION // {selected.id.toUpperCase()}</span>
              <span>SCALE: 1:200</span>
            </div>

            <div className="svg-wrapper" aria-hidden="true">
              <svg viewBox="0 0 340 380" className="typology-svg" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <pattern id="typGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c9d1cf" strokeWidth="0.5" strokeDasharray="2,2"/>
                  </pattern>
                </defs>
                <rect width="340" height="380" fill="#edf0ee" />
                <rect width="340" height="380" fill="url(#typGrid)" />

                {/* Center Datum Line */}
                <line x1="170" y1="20" x2="170" y2="350" stroke="#e8501a" strokeWidth="1" strokeDasharray="5,2" opacity="0.6"/>

                {/* 1. Lattice */}
                {selected.svgDrawing === "lattice" && (
                  <g>
                    <line x1="130" y1="50" x2="80" y2="330" stroke="#12202b" strokeWidth="2.5"/>
                    <line x1="210" y1="50" x2="260" y2="330" stroke="#12202b" strokeWidth="2.5"/>
                    <line x1="170" y1="50" x2="170" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    {Array.from({ length: 7 }).map((_, i) => (
                      <g key={i}>
                        <line x1={130 - i * 7} y1={50 + i * 40} x2={210 + i * 7} y2={50 + i * 40} stroke="#12202b" strokeWidth="1.5"/>
                        <line x1={130 - i * 7} y1={50 + i * 40} x2={210 + (i + 1) * 7} y2={50 + (i + 1) * 40} stroke="#5b6b76" strokeWidth="1"/>
                        <line x1={210 + i * 7} y1={50 + i * 40} x2={130 - (i + 1) * 7} y2={50 + (i + 1) * 40} stroke="#5b6b76" strokeWidth="1"/>
                      </g>
                    ))}
                    {/* Antennas */}
                    <ellipse cx="140" cy="120" rx="18" ry="24" stroke="#12202b" strokeWidth="2" fill="#ffffff"/>
                    <rect x="120" y="40" width="6" height="30" fill="#e8501a"/>
                    <rect x="214" y="40" width="6" height="30" fill="#e8501a"/>
                    {/* Footing */}
                    <rect x="60" y="330" width="220" height="20" fill="#3a4954"/>
                    <line x1="20" y1="350" x2="320" y2="350" stroke="#12202b" strokeWidth="2"/>
                  </g>
                )}

                {/* 2. Guyed Mast */}
                {selected.svgDrawing === "guyed" && (
                  <g>
                    <rect x="165" y="40" width="10" height="290" fill="#ffffff" stroke="#12202b" strokeWidth="2"/>
                    <line x1="170" y1="80" x2="40" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    <line x1="170" y1="80" x2="300" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    <line x1="170" y1="160" x2="70" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    <line x1="170" y1="160" x2="270" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    <line x1="170" y1="240" x2="100" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    <line x1="170" y1="240" x2="240" y2="330" stroke="#3a4954" strokeWidth="1.5"/>
                    {/* Top Strobe */}
                    <circle cx="170" cy="35" r="4" fill="#e8501a"/>
                    {/* Base Ball Socket */}
                    <circle cx="170" cy="330" r="8" fill="#12202b"/>
                    <rect x="150" y="338" width="40" height="12" fill="#3a4954"/>
                  </g>
                )}

                {/* 3. Monopole */}
                {selected.svgDrawing === "monopole" && (
                  <g>
                    <polygon points="162,50 178,50 188,330 152,330" fill="#e1e6e4" stroke="#12202b" strokeWidth="2"/>
                    <line x1="170" y1="50" x2="170" y2="330" stroke="#3a4954" strokeWidth="1"/>
                    <line x1="158" y1="140" x2="182" y2="140" stroke="#12202b" strokeWidth="3"/>
                    <line x1="155" y1="230" x2="185" y2="230" stroke="#12202b" strokeWidth="3"/>
                    {/* Sector Ring */}
                    <rect x="135" y="70" width="70" height="6" fill="#12202b"/>
                    <rect x="138" y="58" width="5" height="24" fill="#e8501a"/>
                    <rect x="197" y="58" width="5" height="24" fill="#e8501a"/>
                    {/* Caisson Pier */}
                    <rect x="145" y="330" width="50" height="30" fill="#3a4954"/>
                  </g>
                )}

                {/* 4. Rooftop */}
                {selected.svgDrawing === "rooftop" && (
                  <g>
                    {/* Building Slab */}
                    <rect x="40" y="270" width="260" height="60" fill="#c9d1cf" stroke="#12202b" strokeWidth="2"/>
                    <line x1="20" y1="330" x2="320" y2="330" stroke="#12202b" strokeWidth="2"/>
                    {/* Ballast Base Grillage */}
                    <rect x="120" y="255" width="100" height="15" fill="#3a4954"/>
                    <rect x="105" y="250" width="20" height="20" fill="#12202b"/>
                    <rect x="215" y="250" width="20" height="20" fill="#12202b"/>
                    {/* Stub Mast */}
                    <line x1="170" y1="80" x2="170" y2="255" stroke="#12202b" strokeWidth="4"/>
                    <line x1="170" y1="120" x2="120" y2="255" stroke="#5b6b76" strokeWidth="1.5"/>
                    <line x1="170" y1="120" x2="220" y2="255" stroke="#5b6b76" strokeWidth="1.5"/>
                    {/* Antennas */}
                    <rect x="160" y="80" width="5" height="28" fill="#e8501a"/>
                    <rect x="175" y="80" width="5" height="28" fill="#e8501a"/>
                  </g>
                )}

                {/* 5. Microwave Relay */}
                {selected.svgDrawing === "microwave" && (
                  <g>
                    {/* High Rigidity Lattice Mast */}
                    <line x1="140" y1="40" x2="110" y2="330" stroke="#12202b" strokeWidth="3"/>
                    <line x1="200" y1="40" x2="230" y2="330" stroke="#12202b" strokeWidth="3"/>
                    {/* Dual Huge Dishes */}
                    <ellipse cx="120" cy="110" rx="30" ry="38" fill="#ffffff" stroke="#12202b" strokeWidth="2.5"/>
                    <ellipse cx="120" cy="110" rx="10" ry="14" fill="#edf0ee" stroke="#e8501a" strokeWidth="1.5"/>
                    <line x1="120" y1="110" x2="150" y2="110" stroke="#12202b" strokeWidth="2.5"/>
                    {/* Lower Dish */}
                    <ellipse cx="220" cy="180" rx="26" ry="34" fill="#ffffff" stroke="#12202b" strokeWidth="2.5"/>
                    <ellipse cx="220" cy="180" rx="9" ry="12" fill="#edf0ee" stroke="#3a4954" strokeWidth="1.5"/>
                    <line x1="190" y1="180" x2="220" y2="180" stroke="#12202b" strokeWidth="2.5"/>
                    {/* Heavy Foundation */}
                    <rect x="80" y="330" width="180" height="20" fill="#3a4954"/>
                  </g>
                )}

                {/* 6. Broadcast Array */}
                {selected.svgDrawing === "broadcast" && (
                  <g>
                    {/* Tall Broadcast Mast */}
                    <line x1="150" y1="30" x2="110" y2="330" stroke="#12202b" strokeWidth="2.5"/>
                    <line x1="190" y1="30" x2="230" y2="330" stroke="#12202b" strokeWidth="2.5"/>
                    {/* High-Gain Dipole Arrays */}
                    {Array.from({ length: 6 }).map((_, i) => (
                      <g key={i}>
                        <line x1="130" y1={60 + i * 36} x2="115" y2={60 + i * 36} stroke="#e8501a" strokeWidth="2"/>
                        <line x1="115" y1={52 + i * 36} x2="115" y2={68 + i * 36} stroke="#e8501a" strokeWidth="2"/>
                        <line x1="210" y1={60 + i * 36} x2="225" y2={60 + i * 36} stroke="#e8501a" strokeWidth="2"/>
                        <line x1="225" y1={52 + i * 36} x2="225" y2={68 + i * 36} stroke="#e8501a" strokeWidth="2"/>
                      </g>
                    ))}
                    {/* Top Broadcast Beacon */}
                    <circle cx="170" cy="24" r="5" fill="#e8501a"/>
                    {/* Foundation */}
                    <rect x="80" y="330" width="180" height="20" fill="#3a4954"/>
                  </g>
                )}
              </svg>
            </div>

            <div className="drawing-footer label">
              <span>DESIGN CODE: TIA-222-H // AS-BUILT CERTIFIED</span>
            </div>
          </div>

          {/* Right: Technical Data Card */}
          <div className="typology-specs-pane">
            <span className="label tag-category">{selected.category}</span>
            <h3 className="selected-name">{selected.name}</h3>
            <p className="selected-desc">{selected.description}</p>

            <div className="specs-table-box">
              <div className="spec-row-item">
                <span className="label">ENGINEERING HEIGHT RANGE</span>
                <span className="data font-bold">{selected.heightRange}</span>
              </div>
              <div className="spec-row-item">
                <span className="label">DESIGN WIND SPEED RATING</span>
                <span className="data font-bold text-accent">{selected.windRating}</span>
              </div>
              <div className="spec-row-item">
                <span className="label">TYPICAL GEOGRAPHIC TERRAIN</span>
                <span className="data">{selected.typicalTerrain}</span>
              </div>
              <div className="spec-row-item">
                <span className="label">MAX ANTENNA &amp; DISH CAPACITY</span>
                <span className="data">{selected.antennaCapacity}</span>
              </div>
              <div className="spec-row-item">
                <span className="label">CIVIL FOUNDATION CLASS</span>
                <span className="data">{selected.foundationType}</span>
              </div>
            </div>

            <div className="pane-action-bar">
              <a href="/contact" className="rfq-direct-btn label">
                REQUEST A QUOTE FOR THIS TOWER CLASSIFICATION →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
