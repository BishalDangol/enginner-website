import React, { useState, useEffect } from "react";

interface ProcessStep {
  step: string;
  tabTitle: string;
  headline: string;
  subheadline: string;
  description: string;
  towerType: string;
  specs: { label: string; value: string }[];
  card: {
    tag: string;
    title: string;
    metric1Label: string;
    metric1Value: string;
    metric2Label: string;
    metric2Value: string;
    actionLabel: string;
  };
  svgType: "survey" | "lattice" | "guyed" | "monopole" | "dish" | "asbuilt";
}

const STEPS: ProcessStep[] = [
  {
    step: "01",
    tabTitle: "SITE SURVEY",
    headline: "GEOTECHNICAL & LIDAR TOPOGRAPHY",
    subheadline: "Ridge-line scan, borehole soil density, and RF line-of-sight validation.",
    description:
      "Before engineering steel, our survey crews deploy RTK drone LiDAR scanning across proposed site coordinates. We log rock core RQD, soil load-bearing capacity (SPT N-values), and establish the geodetic benchmark.",
    towerType: "GEOTECHNICAL BENCHMARK // TOPOGRAPHIC GRID",
    specs: [
      { label: "LIDAR SCAN ACCURACY", value: "± 15 mm RTK" },
      { label: "BOREHOLE CORE DEPTH", value: "8–12 m Bedrock" },
      { label: "SEISMIC ZONE FACTOR", value: "Zone IV (Z = 0.36)" },
      { label: "RF LINE-OF-SIGHT", value: "Clear Fresnel Zone" },
    ],
    card: {
      tag: "GEOTECHNICAL AUDIT",
      title: "Soil Bearing Capacity Report",
      metric1Label: "BEARING STRENGTH",
      metric1Value: "385 kN/m²",
      metric2Label: "ROCK RQD",
      metric2Value: "88% Sound Gneiss",
      actionLabel: "APPROVE SURVEY LOG",
    },
    svgType: "survey",
  },
  {
    step: "02",
    tabTitle: "STRUCTURAL FEA",
    headline: "3D TOWER & WIND DRAG SIMULATION",
    subheadline: "Nonlinear P-Delta stress analysis under TIA-222-H and IS 875 (Part 3).",
    description:
      "Our structural engineers build 3D finite element models simulating extreme gust velocities up to 210 km/h with radial ice accretion. Every angular member, diagonal brace, and gusset plate is verified below allowable stress ratios.",
    towerType: "4-LEGGED ANGULAR LATTICE // SELF-SUPPORTING",
    specs: [
      { label: "GOVERNING CRITERIA", value: "TIA-222-H Class IV" },
      { label: "DESIGN WIND SPEED", value: "180 km/h Gusts" },
      { label: "MAX TORSION SWAY", value: "< 0.42° @ Antenna Tier" },
      { label: "STEEL GRADE", value: "ASTM A572 Gr 50" },
    ],
    card: {
      tag: "FINITE ELEMENT ANALYSIS",
      title: "Member Stress Verification",
      metric1Label: "MAX STRESS RATIO",
      metric1Value: "0.78 / 1.00 SAFE",
      metric2Label: "DISP AT CROWN",
      metric2Value: "182 mm (< H/300)",
      actionLabel: "STAMP CALCULATIONS",
    },
    svgType: "lattice",
  },
  {
    step: "03",
    tabTitle: "PERMITTING",
    headline: "AVIATION CLEARANCE & RIGHT-OF-WAY",
    subheadline: "Civil Aviation obstacle lighting permits, frequency filings, and easements.",
    description:
      "We secure statutory civil aviation approvals for structures exceeding 30 meters or near flight paths. Dual medium-intensity red beacons and daylight orange marking bands are filed and certified with national transport authorities.",
    towerType: "REGULATORY CONE // OBSTACLE CLEARANCE",
    specs: [
      { label: "AVIATION PERMIT", value: "CAA/ICAO Annex 14" },
      { label: "BEACON TYPE", value: "Medium-Intensity Dual LED" },
      { label: "MUNICIPAL CLEARANCE", value: "Zoning Approved" },
      { label: "NTA ALLOCATION", value: "License #IN-042" },
    ],
    card: {
      tag: "STATUTORY APPROVAL",
      title: "ICAO Aviation Clearance",
      metric1Label: "OBSTACLE CONE",
      metric1Value: "Exceeds Margin by 45m",
      metric2Label: "STROBE BACKUP",
      metric2Value: "24-hr UPS + Solar",
      actionLabel: "CLEAR FOR ERECTION",
    },
    svgType: "monopole",
  },
  {
    step: "04",
    tabTitle: "TOWER RIGGING",
    headline: "GIN-POLE HOISTING & BOLT TORQUE",
    subheadline: "Certified high-angle climbers assemble prefabricated galvanized sections.",
    description:
      "Trained riggers use telescopic gin-poles and capstan winches to erect heavy lattice tower sections. Every structural A325 bolt is tightened to certified torque specification with torque-seal tamper verification.",
    towerType: "HIGH-TENSILE GUYED MAST // RIGGING ERECTION",
    specs: [
      { label: "GIN-POLE CAPACITY", value: "3.5 Ton SWL" },
      { label: "FASTENER GRADE", value: "100% ASTM A325" },
      { label: "TIE-OFF STANDARD", value: "100% Dual Lanyard" },
      { label: "VERTICALITY DEFLECTION", value: "< H / 1000 Verified" },
    ],
    card: {
      tag: "RIGGING QUALITY ASSURANCE",
      title: "Fastener Torque Audit",
      metric1Label: "BOLTS CHECKED",
      metric1Value: "1,240 / 1,240 (100%)",
      metric2Label: "TORQUE SEAL",
      metric2Value: "Orange Seal Applied",
      actionLabel: "APPROVE RIGGING LOG",
    },
    svgType: "guyed",
  },
  {
    step: "05",
    tabTitle: "RF COMMISSIONING",
    headline: "MICROWAVE ALIGNMENT & SWEEP TEST",
    subheadline: "Optical sighting, VSWR feedline return loss, and grounding < 5.0 Ohms.",
    description:
      "Transmission engineers mount dual-polarized solid parabolic dishes and 5G active antenna units. Feedlines undergo Anritsu sweep testing (VSWR < 1.15), and the ground electrode grid is verified using 4-pole fall-of-potential testing.",
    towerType: "MICROWAVE RELAY & 5G SECTOR ARRAY",
    specs: [
      { label: "RETURN LOSS (VSWR)", value: "1.12 (< 1.15 Target)" },
      { label: "GROUND RESISTANCE", value: "1.8 Ω (< 5.0 Ω SLA)" },
      { label: "OPTICAL BORESIGHT", value: "Aligned Within 0.1°" },
      { label: "CROSS-POLAR DISCRIM", value: "> 32 dB Isolation" },
    ],
    card: {
      tag: "COMMISSIONING AUDIT",
      title: "RF Sweep & Earth Impedance",
      metric1Label: "SWEEP VSWR",
      metric1Value: "1.12 PASS",
      metric2Label: "EARTH IMPEDANCE",
      metric2Value: "1.8 Ohms (EXCELLENT)",
      actionLabel: "SIGN COMMISSIONING",
    },
    svgType: "dish",
  },
  {
    step: "06",
    tabTitle: "SLA HANDOVER",
    headline: "AS-BUILT CAD & 24/7 NOC ENROLLMENT",
    subheadline: "25-year stamped drawing package delivered, live telemetry active.",
    description:
      "The site is formally enrolled into our 24/7 Network Operations Center. Automated telemetry monitors obstacle strobes, rectifier battery banks, and security perimeters with guaranteed 4-hour emergency field dispatch.",
    towerType: "TURNKEY AS-BUILT // 24/7 LIVE SURVEILLANCE",
    specs: [
      { label: "TELEMETRY MONITOR", value: "24/7 SNMP Active" },
      { label: "EMERGENCY DISPATCH", value: "< 4-Hour On-Site SLA" },
      { label: "WARRANTY & AUDIT", value: "25-Year As-Built CAD" },
      { label: "PREVENTIVE SERVICE", value: "Semi-Annual Inspection" },
    ],
    card: {
      tag: "NETWORK OPERATIONS CENTER",
      title: "SLA Handover Certificate",
      metric1Label: "TELEMETRY STATUS",
      metric1Value: "ALL SYSTEMS NOMINAL",
      metric2Label: "SLA UPTIME",
      metric2Value: "99.98% GUARANTEED",
      actionLabel: "DOWNLOAD HANDOVER DOCS",
    },
    svgType: "asbuilt",
  },
];

export default function ScrollProcessSheet() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [approvedSteps, setApprovedSteps] = useState<boolean[]>(new Array(STEPS.length).fill(false));

  const current = STEPS[activeStep];

  const handleApprove = (idx: number) => {
    setApprovedSteps((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section className="scroll-process-sheet" aria-labelledby="process-sheet-title">
      {/* Sticky Tab Header (Matches Heron AI screenshot header) */}
      <div className="sheet-sticky-tab-bar" role="tablist" aria-label="Engineering Process Phases">
        <div className="tab-bar-container">
          {STEPS.map((s, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.step}
                type="button"
                role="tab"
                id={`tab-${s.step}`}
                aria-selected={isSelected}
                aria-controls={`panel-${s.step}`}
                className={`sheet-tab-btn ${isSelected ? "tab-active" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <span className="tab-step-idx label">[{s.step}]</span>
                <span className="tab-title-text">{s.tabTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Drafting Sheet Work Area */}
      <div className="sheet-viewport">
        {/* Left Margin: Drafting Ruler & Coordinates */}
        <aside className="sheet-ruler" aria-hidden="true">
          <div className="ruler-top label">SEC // 04</div>
          <div className="ruler-ticks">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className={`ruler-tick ${i % 5 === 0 ? "tick-major" : ""}`} />
            ))}
          </div>
          <div className="ruler-step-marker label">
            [{current.step}]
          </div>
          <div className="ruler-bottom label">27°N</div>
        </aside>

        {/* Central Work Plane */}
        <div className="sheet-content-plane">
          {/* Orange Datum / Scan Line (Slices across horizontally like Heron AI) */}
          <div className="orange-datum-line" aria-hidden="true">
            <span className="datum-label label">DATUM ELEVATION // SPEC: TIA-222-H</span>
            <span className="datum-marker"></span>
          </div>

          <div className="sheet-main-split">
            {/* Left Column: Narrative & Technical Parameters */}
            <div className="sheet-narrative-col" id={`panel-${current.step}`} role="tabpanel" aria-labelledby={`tab-${current.step}`}>
              <div className="narrative-meta">
                <span className="label text-accent">PHASE {current.step} OF 06 // PROTOCOL</span>
                <span className="label tower-type-tag">{current.towerType}</span>
              </div>

              <h2 id="process-sheet-title" className="narrative-headline">
                {current.headline}
              </h2>
              <p className="narrative-sub">
                {current.subheadline}
              </p>
              <p className="narrative-desc">
                {current.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="narrative-specs-box">
                <span className="label specs-header">ENGINEERING VERIFICATION LIMITS:</span>
                <div className="specs-grid">
                  {current.specs.map((item) => (
                    <div key={item.label} className="spec-pair">
                      <span className="label spec-k">{item.label}</span>
                      <span className="data spec-v">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="step-navigation-links">
                {activeStep > 0 && (
                  <button
                    type="button"
                    className="step-nav-btn label"
                    onClick={() => setActiveStep((p) => p - 1)}
                  >
                    ← PREVIOUS PHASE [{STEPS[activeStep - 1].step}]
                  </button>
                )}
                {activeStep < STEPS.length - 1 ? (
                  <button
                    type="button"
                    className="step-nav-btn label nav-next"
                    onClick={() => setActiveStep((p) => p + 1)}
                  >
                    NEXT PHASE [{STEPS[activeStep + 1].step}] →
                  </button>
                ) : (
                  <a href="/contact" className="step-nav-btn label nav-next">
                    COMMENCE PROJECT RFQ →
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Technical Vector CAD Blueprint & Floating Inspector Card */}
            <div className="sheet-drawing-col">
              <div className="cad-drawing-frame">
                {/* Crosshairs at grid corners */}
                <div className="crosshair ch-tl" aria-hidden="true">+</div>
                <div className="crosshair ch-tr" aria-hidden="true">+</div>
                <div className="crosshair ch-bl" aria-hidden="true">+</div>
                <div className="crosshair ch-br" aria-hidden="true">+</div>

                {/* Vector Drawing Container */}
                <div className="cad-svg-canvas" aria-hidden="true">
                  <svg viewBox="0 0 460 380" className="cad-svg" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#c9d1cf" strokeWidth="0.5" strokeDasharray="2,2"/>
                      </pattern>
                    </defs>
                    <rect width="460" height="380" fill="#edf0ee" />
                    <rect width="460" height="380" fill="url(#cadGrid)" />

                    {/* Step 1: Topographical Drone LiDAR Mesh */}
                    {current.svgType === "survey" && (
                      <g className="svg-anim-fade">
                        {/* Terrain Contours */}
                        <path d="M 20 280 Q 120 220, 230 260 T 440 240" fill="none" stroke="#12202b" strokeWidth="2"/>
                        <path d="M 20 310 Q 140 260, 240 290 T 440 270" fill="none" stroke="#5b6b76" strokeWidth="1" strokeDasharray="4,2"/>
                        <path d="M 20 340 Q 150 300, 250 320 T 440 300" fill="none" stroke="#5b6b76" strokeWidth="1" strokeDasharray="4,2"/>
                        {/* Drone Flight Path & LiDAR Cone */}
                        <circle cx="230" cy="70" r="14" stroke="#e8501a" strokeWidth="1.5" fill="#ffffff"/>
                        <line x1="205" y1="70" x2="255" y2="70" stroke="#e8501a" strokeWidth="2"/>
                        <line x1="230" y1="45" x2="230" y2="95" stroke="#e8501a" strokeWidth="2"/>
                        {/* LiDAR Scan Rays */}
                        <line x1="230" y1="84" x2="140" y2="250" stroke="#e8501a" strokeWidth="1" strokeDasharray="3,3" opacity="0.6"/>
                        <line x1="230" y1="84" x2="320" y2="255" stroke="#e8501a" strokeWidth="1" strokeDasharray="3,3" opacity="0.6"/>
                        <polygon points="230,84 140,250 320,255" fill="#e8501a" opacity="0.08"/>
                        {/* Geodetic Benchmark Point */}
                        <circle cx="230" cy="260" r="4" fill="#e8501a"/>
                        <text x="240" y="258" fill="#12202b" fontFamily="JetBrains Mono" fontSize="10" fontWeight="700">BM-KTM #01 (2,551M)</text>
                      </g>
                    )}

                    {/* Step 2: 4-Legged Angular Lattice 3D Stress FEA */}
                    {current.svgType === "lattice" && (
                      <g className="svg-anim-fade">
                        {/* Outer Legs */}
                        <line x1="170" y1="40" x2="110" y2="340" stroke="#12202b" strokeWidth="3"/>
                        <line x1="290" y1="40" x2="350" y2="340" stroke="#12202b" strokeWidth="3"/>
                        <line x1="230" y1="30" x2="230" y2="340" stroke="#b8380f" strokeWidth="1.5" strokeDasharray="5,3"/>
                        {/* Cross Girts & Stress Bracing */}
                        {Array.from({ length: 7 }).map((_, i) => {
                          const y1 = 70 + i * 38;
                          const y2 = y1 + 38;
                          const xLeft1 = 170 - i * 8.5;
                          const xRight1 = 290 + i * 8.5;
                          const xLeft2 = 170 - (i + 1) * 8.5;
                          const xRight2 = 290 + (i + 1) * 8.5;
                          return (
                            <g key={i}>
                              <line x1={xLeft1} y1={y1} x2={xRight1} y2={y1} stroke="#12202b" strokeWidth="1.5"/>
                              <line x1={xLeft1} y1={y1} x2={xRight2} y2={y2} stroke="#e8501a" strokeWidth="1.2"/>
                              <line x1={xRight1} y1={y1} x2={xLeft2} y2={y2} stroke="#3a4954" strokeWidth="1.2"/>
                            </g>
                          );
                        })}
                        {/* Concrete Pad Foundation */}
                        <rect x="80" y="340" width="300" height="20" fill="#3a4954"/>
                        <line x1="40" y1="360" x2="420" y2="360" stroke="#12202b" strokeWidth="2"/>
                      </g>
                    )}

                    {/* Step 3: Polygonal Monopole & Obstacle Lighting */}
                    {current.svgType === "monopole" && (
                      <g className="svg-anim-fade">
                        {/* Tapered Monopole Shaft */}
                        <polygon points="220,50 240,50 252,340 208,340" fill="#e1e6e4" stroke="#12202b" strokeWidth="2.5"/>
                        <line x1="230" y1="50" x2="230" y2="340" stroke="#3a4954" strokeWidth="1"/>
                        {/* Flanged Ring Joints */}
                        <line x1="216" y1="140" x2="244" y2="140" stroke="#12202b" strokeWidth="3"/>
                        <line x1="212" y1="230" x2="248" y2="230" stroke="#12202b" strokeWidth="3"/>
                        {/* Circular Antenna Mounting Head */}
                        <rect x="180" y="70" width="100" height="6" fill="#12202b"/>
                        <rect x="184" y="60" width="6" height="26" fill="#e8501a"/>
                        <rect x="270" y="60" width="6" height="26" fill="#e8501a"/>
                        <rect x="227" y="55" width="6" height="26" fill="#12202b"/>
                        {/* Aviation Warning Beacon */}
                        <circle cx="230" cy="40" r="5" fill="#e8501a"/>
                        <circle cx="230" cy="40" r="1.5" fill="#ffffff"/>
                        {/* Clearance Cone */}
                        <path d="M 230 40 L 40 340 M 230 40 L 420 340" stroke="#5b6b76" strokeWidth="1" strokeDasharray="4,4"/>
                        {/* Caisson Pier Foundation */}
                        <rect x="195" y="340" width="70" height="30" fill="#3a4954"/>
                      </g>
                    )}

                    {/* Step 4: Guyed Mast Rigging & Gin-Pole Hoisting */}
                    {current.svgType === "guyed" && (
                      <g className="svg-anim-fade">
                        {/* Slender Guyed Mast Central Column */}
                        <rect x="225" y="50" width="10" height="290" fill="#ffffff" stroke="#12202b" strokeWidth="2"/>
                        {/* Guy Wires (3 Levels) */}
                        <line x1="230" y1="90" x2="60" y2="340" stroke="#3a4954" strokeWidth="1.5"/>
                        <line x1="230" y1="90" x2="400" y2="340" stroke="#3a4954" strokeWidth="1.5"/>
                        <line x1="230" y1="180" x2="90" y2="340" stroke="#3a4954" strokeWidth="1.5"/>
                        <line x1="230" y1="180" x2="370" y2="340" stroke="#3a4954" strokeWidth="1.5"/>
                        {/* Gin Pole Assembly on Top */}
                        <line x1="245" y1="40" x2="245" y2="120" stroke="#e8501a" strokeWidth="3"/>
                        <line x1="245" y1="40" x2="275" y2="80" stroke="#12202b" strokeWidth="1.5"/>
                        {/* Hoisted Steel Section */}
                        <rect x="265" y="80" width="10" height="40" fill="#e8501a" opacity="0.9"/>
                        {/* Winch Tagline */}
                        <line x1="270" y1="120" x2="310" y2="340" stroke="#e8501a" strokeWidth="1" strokeDasharray="2,2"/>
                        {/* Guy Deadman Anchors */}
                        <rect x="50" y="340" width="20" height="20" fill="#3a4954"/>
                        <rect x="390" y="340" width="20" height="20" fill="#3a4954"/>
                      </g>
                    )}

                    {/* Step 5: Microwave Dishes & RF Beam Alignment */}
                    {current.svgType === "dish" && (
                      <g className="svg-anim-fade">
                        {/* Tower Top Mast Section */}
                        <rect x="215" y="40" width="30" height="300" fill="#edf0ee" stroke="#12202b" strokeWidth="2"/>
                        {/* Dual Microwave Parabolic Dishes */}
                        <ellipse cx="160" cy="120" rx="36" ry="44" fill="#ffffff" stroke="#12202b" strokeWidth="2.5"/>
                        <ellipse cx="160" cy="120" rx="14" ry="18" fill="#edf0ee" stroke="#e8501a" strokeWidth="2"/>
                        <line x1="160" y1="120" x2="215" y2="120" stroke="#12202b" strokeWidth="3"/>
                        {/* Right Dish */}
                        <ellipse cx="300" cy="200" rx="30" ry="38" fill="#ffffff" stroke="#12202b" strokeWidth="2.5"/>
                        <ellipse cx="300" cy="200" rx="10" ry="14" fill="#edf0ee" stroke="#3a4954" strokeWidth="1.5"/>
                        <line x1="245" y1="200" x2="300" y2="200" stroke="#12202b" strokeWidth="3"/>
                        {/* RF Sighting Radiation Beams */}
                        <polygon points="124,120 20,60 20,180" fill="#e8501a" opacity="0.12"/>
                        <line x1="124" y1="120" x2="20" y2="120" stroke="#e8501a" strokeWidth="1.5" strokeDasharray="4,2"/>
                        <text x="30" y="110" fill="#b8380f" fontFamily="JetBrains Mono" fontSize="9" fontWeight="700">RSL: -42.4 dBm</text>
                      </g>
                    )}

                    {/* Step 6: Complete Commissioned Tower with Telemetry */}
                    {current.svgType === "asbuilt" && (
                      <g className="svg-anim-fade">
                        {/* Complete Tower Structure */}
                        <polygon points="215,60 245,60 270,330 190,330" fill="#e1e6e4" stroke="#12202b" strokeWidth="2"/>
                        {/* Operational Telemetry Pulse Rings */}
                        <circle cx="230" cy="50" r="12" stroke="#1f7a4d" strokeWidth="1" strokeDasharray="3,3" opacity="0.7"/>
                        <circle cx="230" cy="50" r="22" stroke="#1f7a4d" strokeWidth="1" strokeDasharray="3,3" opacity="0.4"/>
                        <circle cx="230" cy="50" r="4" fill="#1f7a4d"/>
                        {/* Equipment Shelter */}
                        <rect x="290" y="270" width="60" height="60" fill="#ffffff" stroke="#12202b" strokeWidth="2"/>
                        <line x1="290" y1="290" x2="350" y2="290" stroke="#12202b" strokeWidth="1"/>
                        <text x="295" y="284" fill="#12202b" fontFamily="JetBrains Mono" fontSize="8" fontWeight="700">NOC HUB</text>
                        {/* Green Status Lamp */}
                        <circle cx="340" cy="282" r="3" fill="#1f7a4d"/>
                      </g>
                    )}
                  </svg>
                </div>

                {/* DOCKED FLOATING INSPECTOR CARD (Anchored directly over orange datum line like Heron AI) */}
                <div className="docked-inspector-card" role="region" aria-label="Step Inspection Log">
                  <div className="inspector-header">
                    <span className="label card-tag">{current.card.tag}</span>
                    <span className="data card-ref">LOG: #{current.step}-VERIFIED</span>
                  </div>

                  <h3 className="inspector-title">{current.card.title}</h3>

                  <div className="inspector-metrics-row">
                    <div className="inspector-metric">
                      <span className="label metric-lbl">{current.card.metric1Label}</span>
                      <span className="data metric-val">{current.card.metric1Value}</span>
                    </div>
                    <div className="inspector-metric">
                      <span className="label metric-lbl">{current.card.metric2Label}</span>
                      <span className="data metric-val">{current.card.metric2Value}</span>
                    </div>
                  </div>

                  <div className="inspector-action-row">
                    <button
                      type="button"
                      className="inspector-btn-reject label"
                      onClick={() => alert(`Review log for Step [${current.step}]. All parameters logged.`)}
                    >
                      Audit Details
                    </button>
                    <button
                      type="button"
                      className={`inspector-btn-approve label ${approvedSteps[activeStep] ? "approved" : ""}`}
                      onClick={() => handleApprove(activeStep)}
                    >
                      {approvedSteps[activeStep] ? "APPROVED ✔" : current.card.actionLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
