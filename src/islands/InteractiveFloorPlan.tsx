import React, { useState, useEffect, useRef } from "react";

interface FloorPlanZone {
  id: string;
  stepNumber: string;
  code: string;
  title: string;
  subtitle: string;
  areaM2: string;
  thermalLoad: string;
  powerRating: string;
  standards: string;
  description: string;
  technicalSpecs: { label: string; value: string }[];
  svgHighlight: {
    x: number;
    y: number;
    width: number;
    height: number;
    labelX: number;
    labelY: number;
  };
  colorTheme: string;
}

const FLOOR_PLAN_ZONES: FloorPlanZone[] = [
  {
    id: "bts-room",
    stepNumber: "01",
    code: "RM-101 // BTS & TX",
    title: "Main Transceiver & Optical Transmission Room",
    subtitle: "Class 10,000 Cleanroom // Dual Inverter & Optical Distribution",
    areaM2: "32.4 m²",
    thermalLoad: "12.8 kW (Sensible)",
    powerRating: "48V DC / 300A Dual Bus",
    standards: "TIA-942 Tier III // ETSI EN 300 019",
    description:
      "Houses primary Base Transceiver Station (BTS) cabinet rows, high-density optical distribution frames (ODF), and multi-vendor IP microwave IDU modems. Conditioned with N+1 dual-redundant precision split air-conditioning units maintaining 21°C ± 1°C and positive pressure to prevent dust infiltration.",
    technicalSpecs: [
      { label: "Cabinet Capacity", value: "4x 19-inch 42U Telecom Racks" },
      { label: "Cooling Method", value: "N+1 Precision Dual Inverter Splits" },
      { label: "Cable Containment", value: "Overhead 400mm Wire Mesh Tray" },
      { label: "Flooring Spec", value: "Anti-Static Dissipative Vinyl (ESD < 10^8 Ω)" },
    ],
    svgHighlight: {
      x: 60,
      y: 60,
      width: 250,
      height: 200,
      labelX: 185,
      labelY: 160,
    },
    colorTheme: "#0ea5e9", // Cyan/Blue
  },
  {
    id: "battery-vault",
    stepNumber: "02",
    code: "RM-102 // BESS VAULT",
    title: "Battery Energy Storage & DC Power Plant",
    subtitle: "48V LiFePO4 / VRLA Backup // FM-200 Fire Suppression",
    areaM2: "18.6 m²",
    thermalLoad: "3.2 kW",
    powerRating: "2,400 Ah / 115 kWh Reserve",
    standards: "IEEE 1184 // NFPA 855 // UL 9540A",
    description:
      "Dedicated fire-isolated vault designed for 8-hour autonomous site operation during grid failure. Contains high-cycle lithium iron phosphate (LiFePO4) rack batteries connected to smart battery management systems (BMS). Protected with explosion-proof exhaust louvers and automated clean-agent FM-200 gas fire suppression.",
    technicalSpecs: [
      { label: "Autonomy Window", value: "8 Hours Continuous @ Full RF Load" },
      { label: "Fire Isolation", value: "2-Hour REI 120 Fire-Rated Partition Walls" },
      { label: "Gas Suppression", value: "FM-200 Total Flooding System with Optical Sniffers" },
      { label: "Ventilation", value: "ATEX Certified Dual Hydrogen Extraction Fans" },
    ],
    svgHighlight: {
      x: 330,
      y: 60,
      width: 170,
      height: 200,
      labelX: 415,
      labelY: 160,
    },
    colorTheme: "#eab308", // Amber/Gold
  },
  {
    id: "generator-shelter",
    stepNumber: "03",
    code: "RM-103 // GENSET & FUEL",
    title: "Backup Diesel Generator & Fuel Storage",
    subtitle: "30 kVA Sound-Attenuated Canopy // 500L Bunded Tank",
    areaM2: "22.5 m²",
    thermalLoad: "Radiator Exhaust Discharge",
    powerRating: "30 kVA / 24 kW @ 400V 3-Phase",
    standards: "ISO 8528-5 // CPCB-IV+ Emissions",
    description:
      "Acoustically insulated genset enclosure featuring a turbocharged, water-cooled prime diesel engine with an Automatic Transfer Switch (ATS) transitioning within 8.5 seconds of utility grid loss. Positioned over a double-walled fuel reservoir with an integrated 110% capacity concrete catchment bund to prevent soil contamination.",
    technicalSpecs: [
      { label: "Acoustic Attenuation", value: "65 dB(A) @ 1 Meter Distance" },
      { label: "Start Transition", value: "8.5 Seconds Auto-Crank & Load Transfer" },
      { label: "Fuel Reservoir", value: "500 L Double-Skin Day Tank (72h Runtime)" },
      { label: "Vibration Control", value: "Spring & Neoprene Inertia Base Dampers" },
    ],
    svgHighlight: {
      x: 520,
      y: 60,
      width: 200,
      height: 200,
      labelX: 620,
      labelY: 160,
    },
    colorTheme: "#e8501a", // Signal Orange
  },
  {
    id: "waveguide-bridge",
    stepNumber: "04",
    code: "ZONE-104 // RF INGRESS",
    title: "Waveguide Bridge & Feeder Gland Gantry",
    subtitle: "12-Way Coaxial Port // Lightning Arrestor Bar",
    areaM2: "14.2 m² Route",
    thermalLoad: "Ambient Exterior",
    powerRating: "RF Coaxial Ingress (1/2\" to 1-5/8\")",
    standards: "IEC 61312 // TIA-222-H Annex G",
    description:
      "Heavy-duty galvanized steel gantry bridging antenna transmission feed cables from the tower climbing leg into the shelter equipment room. Features a 12-hole aluminum entry gland plate with weatherproof neoprene boots, coaxial surge arrestors bonded directly to the external grounding busbar, and drip loops.",
    technicalSpecs: [
      { label: "Gantry Construction", value: "Hot-Dip Galvanized Unistrut / Steel Grating" },
      { label: "Gland Capacity", value: "12x Waveguide / Coaxial Feeder Ports" },
      { label: "Surge Protection", value: "Quarter-Wave Gas Discharge Tube Arrestors" },
      { label: "Fall-Arrest Clearance", value: "2.8m Headroom above Compound Grade" },
    ],
    svgHighlight: {
      x: 100,
      y: 280,
      width: 320,
      height: 70,
      labelX: 260,
      labelY: 315,
    },
    colorTheme: "#a855f7", // Purple/Violet
  },
  {
    id: "earthing-grid",
    stepNumber: "05",
    code: "ZONE-105 // EARTHING RING",
    title: "Sub-Surface Earthing & Master Ground Bus",
    subtitle: "Solid Copper Ring // < 2.0 Ω Bedrock Ground Impedance",
    areaM2: "Site-Wide Perimeter",
    thermalLoad: "Direct Dissipation to Earth",
    powerRating: "Fault Surge: 100 kA (10/350 µs)",
    standards: "IEEE 80 // IS 3043 // TIA-607-D",
    description:
      "Equipotential perimeter earthing ring formed by 50x3mm bare electrolytic copper tape buried 800mm below grade, interconnected with 4 corner chemical earthing electrodes in bentonite slurry backfill. All metal equipment frames, cable ladders, and the tower structure bond to the Master Ground Bar (MGB).",
    technicalSpecs: [
      { label: "Measured Resistance", value: "1.42 Ω (Certified < 2.0 Ω Target)" },
      { label: "Conductor Spec", value: "99.9% High-Conductivity Annealed Copper" },
      { label: "Joint Technique", value: "CADWELD Exothermic Molecular Fusion" },
      { label: "Testing Access", value: "4x Heavy-Duty Cast-Iron Inspection Test Pits" },
    ],
    svgHighlight: {
      x: 30,
      y: 30,
      width: 710,
      height: 340,
      labelX: 385,
      labelY: 385,
    },
    colorTheme: "#10b981", // Emerald Green
  },
  {
    id: "perimeter-security",
    stepNumber: "06",
    code: "ZONE-106 // PERIMETER",
    title: "Compound Perimeter & Security Hardening",
    subtitle: "2.4m Razor Fence // 24/7 PTZ IR CCTV & Turnstile",
    areaM2: "180 m² Total Compound",
    thermalLoad: "Exterior Weatherproof IP66",
    powerRating: "230V AC Perimeter Lighting & CCTV",
    standards: "ISO 27001 Physical Security // NTA Tier II",
    description:
      "Perimeter intrusion protection consisting of high-tensile 358 anti-climb welded wire mesh topped with concertina razor coils. Equipped with thermal PTZ night-vision IP surveillance cameras with analytics feeds reporting to the 24/7 Network Operations Center (NOC) and electronic biometric card access.",
    technicalSpecs: [
      { label: "Fence Barrier", value: "2.4m Anti-Cut / Anti-Climb 358 Mesh + Razor Wire" },
      { label: "Surveillance", value: "Dual PTZ 4K IR Cameras with AI Intrusion Tripwire" },
      { label: "Access Control", value: "RFID / Biometric Reader with NOC Log Telemetry" },
      { label: "Compound Ground", value: "100mm Washed Crushed Stone Over Geotextile Membrane" },
    ],
    svgHighlight: {
      x: 20,
      y: 20,
      width: 730,
      height: 380,
      labelX: 385,
      labelY: 35,
    },
    colorTheme: "#38bdf8", // Sky Blue
  },
];

type DiagramViewMode = "architectural" | "zoning" | "structural" | "cable_routing" | "safety_egress";

export default function InteractiveFloorPlan() {
  const [activeZoneIndex, setActiveZoneIndex] = useState(0);
  const [viewMode, setViewMode] = useState<DiagramViewMode>("architectural");
  const introCardRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isUserClickingRef = useRef(false);

  const activeZone = FLOOR_PLAN_ZONES[activeZoneIndex];

  // Scroll tracking to highlight corresponding zone and dissolve cards as they reach section top
  useEffect(() => {
    const handleScroll = () => {
      // 1. Highlight active zone
      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      if (!isUserClickingRef.current && closestIdx !== activeZoneIndex) {
        setActiveZoneIndex(closestIdx);
      }

      // 2. Dissolve left-side cards as they reach section top
      const topBoundary = 130;
      const fadeSpan = 150;

      const elementsToDissolve = [introCardRef.current, ...cardRefs.current];
      elementsToDissolve.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top < topBoundary) {
          const distancePast = topBoundary - rect.top;
          const progress = Math.min(Math.max(distancePast / fadeSpan, 0), 1);
          const opacity = Math.max(0, 1 - progress);
          const translateY = -distancePast * 0.22;
          const scale = 1 - progress * 0.05;

          el.style.opacity = `${opacity}`;
          el.style.transform = `translateY(${translateY}px) scale(${scale})`;
          el.style.filter = `blur(${progress * 4}px)`;
          el.style.pointerEvents = opacity < 0.1 ? "none" : "auto";
        } else {
          el.style.opacity = "1";
          el.style.transform = "translateY(0) scale(1)";
          el.style.filter = "none";
          el.style.pointerEvents = "auto";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeZoneIndex]);

  const handleCardClick = (idx: number) => {
    isUserClickingRef.current = true;
    setActiveZoneIndex(idx);

    // Smooth scroll card to position
    const cardEl = cardRefs.current[idx];
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    setTimeout(() => {
      isUserClickingRef.current = false;
    }, 800);
  };

  return (
    <div ref={containerRef} className="floorplan-story-container" id="compound-floor-plan">
      {/* TWO-COLUMN PINNED STORYTELLING LAYOUT */}
      <div className="floorplan-layout-grid">
        {/* LEFT COLUMN: SCROLLING EXPLANATORY CONTENT & TECHNICAL CARDS */}
        <div className="floorplan-content-scroll-col">
          <div ref={introCardRef} className="floorplan-intro-card">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="live-dot" aria-hidden="true"></span>
              <span className="label text-accent">ARCHITECTURAL CAD // PINNED TWO-COLUMN STORYTELLING</span>
            </div>
            <h2 id="floorplan-title" className="intro-main-title">
              Base Station Compound &amp; Equipment Shelter Layout
            </h2>
            <p className="intro-desc">
              Inspect the turnkey telecom compound engineering layout. As you scroll through the technical phases on the left, the architectural CAD schematic remains pinned to the right, progressively revealing equipment racks, battery energy storage vaults, backup diesel generators, overhead waveguide bridges, and equipotential earthing rings.
            </p>
            <div className="intro-stats-strip">
              <div className="stat-unit">
                <span className="label">TOTAL SHELTER:</span>
                <span className="data font-bold">73.5 m²</span>
              </div>
              <div className="stat-unit">
                <span className="label">SEISMIC ZONE:</span>
                <span className="data font-bold text-accent">CLASS IV (NBC 105)</span>
              </div>
              <div className="stat-unit">
                <span className="label">TIER RATING:</span>
                <span className="data font-bold">TIA-942 TIER III</span>
              </div>
            </div>
          </div>

          {/* Sequential Step Cards */}
          <div className="floorplan-cards-stack">
            {FLOOR_PLAN_ZONES.map((zone, idx) => {
              const isActive = activeZoneIndex === idx;
              return (
                <div
                  key={zone.id}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className={`floorplan-step-card ${isActive ? "card-active" : ""}`}
                  onClick={() => handleCardClick(idx)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleCardClick(idx);
                    }
                  }}
                >
                  <div className="card-top-bar">
                    <span className="step-counter label">[{zone.stepNumber}]</span>
                    <span className="code-pill label">{zone.code}</span>
                    <span
                      className="indicator-pip"
                      style={{ backgroundColor: isActive ? zone.colorTheme : "transparent" }}
                      aria-hidden="true"
                    />
                  </div>

                  <h4 className="card-title">{zone.title}</h4>
                  <p className="card-subtitle label">{zone.subtitle}</p>

                  <p className="card-body-text">{zone.description}</p>

                  {/* Technical Specifications Grid */}
                  <div className="card-specs-matrix">
                    {zone.technicalSpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="spec-item">
                        <span className="label spec-lbl">{spec.label}</span>
                        <span className="data spec-val">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Operational Telemetry Metrics */}
                  <div className="card-telemetry-row">
                    <div className="tel-cell">
                      <span className="label">USABLE AREA:</span>
                      <span className="data font-bold">{zone.areaM2}</span>
                    </div>
                    <div className="tel-cell">
                      <span className="label">THERMAL LOAD:</span>
                      <span className="data font-bold">{zone.thermalLoad}</span>
                    </div>
                    <div className="tel-cell">
                      <span className="label">POWER BUS:</span>
                      <span className="data font-bold text-accent">{zone.powerRating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: PINNED FIXED ARCHITECTURAL FLOOR PLAN & CAD DIAGRAM */}
        <div className="floorplan-pinned-diagram-col">
          <div className="floorplan-sticky-stage">
            {/* Diagram Control & Mode Bar */}
            <div className="diagram-header-bar">
              <div className="diagram-tag">
                <span className="live-status-dot" aria-hidden="true" />
                <span className="label text-vellum">AS-BUILT CAD: {activeZone.code}</span>
              </div>
              <div className="view-mode-tabs">
                <button
                  type="button"
                  className={`mode-btn label ${viewMode === "architectural" ? "active" : ""}`}
                  onClick={() => setViewMode("architectural")}
                  title="Standard Architectural Plan"
                >
                  ARCH CAD
                </button>
                <button
                  type="button"
                  className={`mode-btn label ${viewMode === "zoning" ? "active" : ""}`}
                  onClick={() => setViewMode("zoning")}
                  title="Thermal & Functional Zoning Heatmap"
                >
                  ZONING
                </button>
                <button
                  type="button"
                  className={`mode-btn label ${viewMode === "structural" ? "active" : ""}`}
                  onClick={() => setViewMode("structural")}
                  title="Reinforced Concrete & Partition Walls"
                >
                  STRUCTURAL
                </button>
                <button
                  type="button"
                  className={`mode-btn label ${viewMode === "cable_routing" ? "active" : ""}`}
                  onClick={() => setViewMode("cable_routing")}
                  title="Overhead Cable Ladders & DC Feeds"
                >
                  CABLE TRAY
                </button>
              </div>
            </div>

            {/* Pinned SVG Architectural Diagram Frame */}
            <div className="floorplan-svg-viewport">
              <svg
                viewBox="0 0 770 420"
                className="floorplan-cad-svg"
                role="img"
                aria-label={`Architectural Floor Plan: Highlighted zone ${activeZone.title}`}
              >
                <defs>
                  {/* Grid Pattern */}
                  <pattern id="cad-grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(237, 240, 238, 0.05)" strokeWidth="0.8" />
                  </pattern>

                  {/* Hatch Pattern for Concrete Walls */}
                  <pattern id="concrete-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="8" stroke="rgba(237, 240, 238, 0.15)" strokeWidth="1" />
                  </pattern>

                  {/* Cable Tray Striped Pattern */}
                  <pattern id="tray-stripes" width="10" height="10" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="5" x2="10" y2="5" stroke="#a855f7" strokeWidth="1.5" />
                    <line x1="5" y1="0" x2="5" y2="10" stroke="#a855f7" strokeWidth="0.8" />
                  </pattern>

                  {/* Active Zone Glow Filter */}
                  <filter id="active-zone-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor={activeZone.colorTheme} floodOpacity="0.5" />
                  </filter>
                </defs>

                {/* Background CAD Grid */}
                <rect width="770" height="420" fill="#0c161e" />
                <rect width="770" height="420" fill="url(#cad-grid-pattern)" />

                {/* Outer Compound Ground Perimeter (Zone 06) */}
                <rect
                  x="20"
                  y="20"
                  width="730"
                  height="380"
                  fill={activeZoneIndex === 5 ? "rgba(56, 189, 248, 0.08)" : "none"}
                  stroke={activeZoneIndex === 5 ? "#38bdf8" : "rgba(237, 240, 238, 0.2)"}
                  strokeWidth={activeZoneIndex === 5 ? "2" : "1"}
                  strokeDasharray="6,4"
                  className="transition-all"
                />

                {/* Sub-Surface Earthing Ring (Zone 05) */}
                <rect
                  x="30"
                  y="30"
                  width="710"
                  height="360"
                  fill="none"
                  stroke={activeZoneIndex === 4 ? "#10b981" : "rgba(16, 185, 129, 0.35)"}
                  strokeWidth={activeZoneIndex === 4 ? "2.5" : "1.2"}
                  filter={activeZoneIndex === 4 ? "url(#active-zone-glow)" : undefined}
                />
                {/* Corner Earth Test Pits */}
                {[[30, 30], [740, 30], [740, 390], [30, 390]].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r={activeZoneIndex === 4 ? 6 : 4} fill="#10b981" />
                    <circle cx={cx} cy={cy} r={activeZoneIndex === 4 ? 10 : 7} fill="none" stroke="#10b981" strokeWidth="1" />
                    <text x={cx} y={cy + 16} fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle">
                      PIT-{i + 1}
                    </text>
                  </g>
                ))}

                {/* Master Ground Bar (MGB) on Wall */}
                <rect x="52" y="100" width="8" height="36" fill="#10b981" />
                <text x="45" y="122" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="end">
                  MGB &lt;2Ω
                </text>

                {/* Shelter Exterior Perimeter Walls (250mm Reinforced Masonry) */}
                <rect
                  x="50"
                  y="50"
                  width="670"
                  height="220"
                  fill={viewMode === "structural" ? "url(#concrete-hatch)" : "rgba(18, 32, 43, 0.85)"}
                  stroke="rgba(237, 240, 238, 0.8)"
                  strokeWidth="3"
                />

                {/* Internal Partition Walls */}
                <line x1="320" y1="50" x2="320" y2="270" stroke="rgba(237, 240, 238, 0.8)" strokeWidth="3" />
                <line x1="510" y1="50" x2="510" y2="270" stroke="rgba(237, 240, 238, 0.8)" strokeWidth="3" />

                {/* ROOM 101: BTS & TRANSMISSION ROOM */}
                <g
                  className="zone-group cursor-pointer"
                  onClick={() => handleCardClick(0)}
                  filter={activeZoneIndex === 0 ? "url(#active-zone-glow)" : undefined}
                >
                  <rect
                    x="60"
                    y="60"
                    width="250"
                    height="200"
                    fill={
                      activeZoneIndex === 0
                        ? "rgba(14, 165, 233, 0.18)"
                        : viewMode === "zoning"
                        ? "rgba(14, 165, 233, 0.08)"
                        : "rgba(12, 22, 30, 0.4)"
                    }
                    stroke={activeZoneIndex === 0 ? "#0ea5e9" : "rgba(237, 240, 238, 0.15)"}
                    strokeWidth={activeZoneIndex === 0 ? 2 : 1}
                  />

                  {/* 19" Equipment Racks (Rack 1 to 4) */}
                  {[0, 1, 2, 3].map((rIdx) => (
                    <g key={rIdx}>
                      <rect
                        x={80 + rIdx * 50}
                        y="80"
                        width="36"
                        height="55"
                        fill={activeZoneIndex === 0 ? "#182b3a" : "rgba(58, 73, 84, 0.5)"}
                        stroke={activeZoneIndex === 0 ? "#0ea5e9" : "rgba(237, 240, 238, 0.3)"}
                        strokeWidth="1.2"
                      />
                      <line x1={80 + rIdx * 50} y1="95" x2={116 + rIdx * 50} y2="95" stroke="rgba(237, 240, 238, 0.2)" />
                      <line x1={80 + rIdx * 50} y1="110" x2={116 + rIdx * 50} y2="110" stroke="rgba(237, 240, 238, 0.2)" />
                      <text
                        x={98 + rIdx * 50}
                        y="125"
                        fill={activeZoneIndex === 0 ? "#0ea5e9" : "var(--vellum-300)"}
                        fontSize="8"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        R-0{rIdx + 1}
                      </text>
                    </g>
                  ))}

                  {/* Optical ODF & Rectifier Panel */}
                  <rect x="80" y="160" width="86" height="40" fill="#182b3a" stroke="#0ea5e9" strokeWidth="1" />
                  <text x="123" y="184" fill="#6ee7b7" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    RECTIFIER 300A
                  </text>

                  <rect x="180" y="160" width="86" height="40" fill="#182b3a" stroke="#0ea5e9" strokeWidth="1" />
                  <text x="223" y="184" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    ODF 144-CORE
                  </text>

                  {/* Dual AC Inverter Split Units */}
                  <rect x="62" y="62" width="40" height="12" fill="#0284c7" />
                  <text x="82" y="71" fill="#fff" fontSize="6" fontFamily="monospace" textAnchor="middle">
                    AC-1
                  </text>
                  <rect x="268" y="62" width="40" height="12" fill="#0284c7" />
                  <text x="288" y="71" fill="#fff" fontSize="6" fontFamily="monospace" textAnchor="middle">
                    AC-2
                  </text>

                  {/* Room Label */}
                  <text x="185" y="245" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    RM-101 // BTS &amp; TRANSMISSION
                  </text>
                  <text x="185" y="257" fill="#6ee7b7" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    AREA: 32.4 m² // 21°C ± 1°C
                  </text>
                </g>

                {/* ROOM 102: BATTERY ENERGY STORAGE VAULT */}
                <g
                  className="zone-group cursor-pointer"
                  onClick={() => handleCardClick(1)}
                  filter={activeZoneIndex === 1 ? "url(#active-zone-glow)" : undefined}
                >
                  <rect
                    x="330"
                    y="60"
                    width="170"
                    height="200"
                    fill={
                      activeZoneIndex === 1
                        ? "rgba(234, 179, 8, 0.18)"
                        : viewMode === "zoning"
                        ? "rgba(234, 179, 8, 0.08)"
                        : "rgba(12, 22, 30, 0.4)"
                    }
                    stroke={activeZoneIndex === 1 ? "#eab308" : "rgba(237, 240, 238, 0.15)"}
                    strokeWidth={activeZoneIndex === 1 ? 2 : 1}
                  />

                  {/* LiFePO4 Battery String Cabinets */}
                  <rect x="345" y="80" width="60" height="70" fill="#182b3a" stroke="#eab308" strokeWidth="1.2" />
                  <rect x="425" y="80" width="60" height="70" fill="#182b3a" stroke="#eab308" strokeWidth="1.2" />
                  <text x="375" y="118" fill="#eab308" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    BATT-A
                  </text>
                  <text x="375" y="130" fill="var(--vellum-300)" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    1200Ah
                  </text>
                  <text x="455" y="118" fill="#eab308" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    BATT-B
                  </text>
                  <text x="455" y="130" fill="var(--vellum-300)" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    1200Ah
                  </text>

                  {/* FM-200 Fire Suppression Gas Cylinder */}
                  <circle cx="475" cy="185" r="14" fill="#ef4444" stroke="#fff" strokeWidth="1" />
                  <text x="475" y="188" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    FM200
                  </text>

                  {/* Room Label */}
                  <text x="415" y="245" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    RM-102 // BESS VAULT
                  </text>
                  <text x="415" y="257" fill="#eab308" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    48V / 2400Ah // 8H AUTONOMY
                  </text>
                </g>

                {/* ROOM 103: DIESEL GENERATOR & FUEL SHELTER */}
                <g
                  className="zone-group cursor-pointer"
                  onClick={() => handleCardClick(2)}
                  filter={activeZoneIndex === 2 ? "url(#active-zone-glow)" : undefined}
                >
                  <rect
                    x="520"
                    y="60"
                    width="190"
                    height="200"
                    fill={
                      activeZoneIndex === 2
                        ? "rgba(232, 80, 26, 0.18)"
                        : viewMode === "zoning"
                        ? "rgba(232, 80, 26, 0.08)"
                        : "rgba(12, 22, 30, 0.4)"
                    }
                    stroke={activeZoneIndex === 2 ? "#e8501a" : "rgba(237, 240, 238, 0.15)"}
                    strokeWidth={activeZoneIndex === 2 ? 2 : 1}
                  />

                  {/* 30 kVA Diesel Genset Block */}
                  <rect x="540" y="80" width="100" height="60" fill="#2d3748" stroke="#e8501a" strokeWidth="1.5" />
                  <text x="590" y="112" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    GENSET 30kVA
                  </text>
                  <text x="590" y="124" fill="#e8501a" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    TURBO DIESEL
                  </text>

                  {/* Automatic Transfer Switch (ATS) */}
                  <rect x="655" y="80" width="40" height="35" fill="#182b3a" stroke="#e8501a" strokeWidth="1" />
                  <text x="675" y="100" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    ATS
                  </text>

                  {/* 500L Double-Walled Day Tank & Bund */}
                  <rect x="540" y="160" width="150" height="40" fill="#182b3a" stroke="#b8380f" strokeWidth="1.2" />
                  <text x="615" y="184" fill="#f97316" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    500L BUNDED DAY TANK (72h)
                  </text>

                  {/* Room Label */}
                  <text x="615" y="245" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    RM-103 // DIESEL GENSET
                  </text>
                  <text x="615" y="257" fill="#f97316" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    30 kVA / 400V // 65 dB(A)
                  </text>
                </g>

                {/* ZONE 104: WAVEGUIDE BRIDGE & FEEDER ROUTE */}
                <g
                  className="zone-group cursor-pointer"
                  onClick={() => handleCardClick(3)}
                  filter={activeZoneIndex === 3 ? "url(#active-zone-glow)" : undefined}
                >
                  {/* Waveguide Bridge Steel Gantry */}
                  <rect
                    x="100"
                    y="270"
                    width="260"
                    height="80"
                    fill={activeZoneIndex === 3 ? "rgba(168, 85, 247, 0.2)" : "url(#tray-stripes)"}
                    stroke={activeZoneIndex === 3 ? "#a855f7" : "rgba(168, 85, 247, 0.4)"}
                    strokeWidth={activeZoneIndex === 3 ? 2 : 1}
                  />

                  {/* 12-Hole Feeder Gland Plate on Wall */}
                  <rect x="180" y="265" width="100" height="10" fill="#a855f7" />
                  <text x="230" y="273" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    12-WAY FEEDER GLAND
                  </text>

                  {/* RF Coaxial Lines running out towards tower base */}
                  {[0, 1, 2, 3].map((lIdx) => (
                    <line
                      key={lIdx}
                      x1={195 + lIdx * 20}
                      y1="275"
                      x2={195 + lIdx * 20}
                      y2="345"
                      stroke={activeZoneIndex === 3 ? "#c084fc" : "rgba(168, 85, 247, 0.7)"}
                      strokeWidth="2"
                      strokeDasharray={activeZoneIndex === 3 ? "4,2" : undefined}
                    />
                  ))}

                  <text x="230" y="325" fill="#c084fc" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    WAVEGUIDE BRIDGE TO TOWER MAST
                  </text>
                  <text x="230" y="338" fill="var(--vellum-300)" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    FEEDER RUN (1/2" TO 1-5/8" COAX)
                  </text>
                </g>

                {/* TOWER FOOTPRINT BASE MARKER */}
                <g transform="translate(190, 360)">
                  <polygon
                    points="0,35 40,0 80,35"
                    fill="none"
                    stroke={activeZoneIndex === 3 ? "#e8501a" : "rgba(232, 80, 26, 0.6)"}
                    strokeWidth="2"
                  />
                  <text x="40" y="28" fill="#e8501a" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    TOWER MAST
                  </text>
                </g>

                {/* DOORS & SWING ARCS */}
                {/* Shelter Main Entrance Door */}
                <path d="M 60 270 A 30 30 0 0 0 90 270" fill="none" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="60" y1="270" x2="60" y2="240" stroke="#6ee7b7" strokeWidth="1.5" />
                <text x="75" y="260" fill="#6ee7b7" fontSize="7" fontFamily="monospace">
                  D-01 (ESD)
                </text>

                {/* Generator Louver / Double Access Door */}
                <path d="M 670 270 A 40 40 0 0 0 710 270" fill="none" stroke="#f97316" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="670" y1="270" x2="670" y2="230" stroke="#f97316" strokeWidth="1.5" />
                <text x="690" y="260" fill="#f97316" fontSize="7" fontFamily="monospace">
                  D-03
                </text>

                {/* ACTIVE ZONE TARGET RETICLE / CALLOUT */}
                <rect
                  x={activeZone.svgHighlight.x}
                  y={activeZone.svgHighlight.y}
                  width={activeZone.svgHighlight.width}
                  height={activeZone.svgHighlight.height}
                  fill="none"
                  stroke={activeZone.colorTheme}
                  strokeWidth="2"
                  strokeDasharray="8,6"
                  className="animate-pulse"
                />

                {/* Corner drafting ticks on active highlight */}
                {[
                  [activeZone.svgHighlight.x, activeZone.svgHighlight.y],
                  [activeZone.svgHighlight.x + activeZone.svgHighlight.width, activeZone.svgHighlight.y],
                  [activeZone.svgHighlight.x, activeZone.svgHighlight.y + activeZone.svgHighlight.height],
                  [activeZone.svgHighlight.x + activeZone.svgHighlight.width, activeZone.svgHighlight.y + activeZone.svgHighlight.height],
                ].map(([tx, ty], i) => (
                  <circle key={i} cx={tx} cy={ty} r="3" fill={activeZone.colorTheme} />
                ))}

                {/* Dimension Annotations Overlay */}
                <g className="cad-dimension-lines" stroke="rgba(237, 240, 238, 0.4)" strokeWidth="0.8">
                  {/* Overall Width Dimension */}
                  <line x1="50" y1="42" x2="720" y2="42" />
                  <line x1="50" y1="38" x2="50" y2="46" />
                  <line x1="720" y1="38" x2="720" y2="46" />
                  <text x="385" y="38" fill="var(--vellum-200)" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    SHELTER OVERALL: 13,400 mm
                  </text>
                </g>
              </svg>
            </div>

            {/* Pinned Diagram Live Telemetry Footer Strip */}
            <div className="diagram-footer-telemetry">
              <div className="telemetry-chip">
                <span className="label tel-lbl">ACTIVE ZONE:</span>
                <span className="data font-bold" style={{ color: activeZone.colorTheme }}>
                  {activeZone.code}
                </span>
              </div>
              <div className="telemetry-chip">
                <span className="label tel-lbl">FLOOR FINISH:</span>
                <span className="data">{activeZone.technicalSpecs[3]?.value.slice(0, 22) || "Standard Epoxy"}</span>
              </div>
              <div className="telemetry-chip">
                <span className="label tel-lbl">STANDARDS:</span>
                <span className="data text-accent">{activeZone.standards.split("//")[0]}</span>
              </div>
              <div className="telemetry-chip">
                <span className="label tel-lbl">CAD SCALE:</span>
                <span className="data">1:50 @ A1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
