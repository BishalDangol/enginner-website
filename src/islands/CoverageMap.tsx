import React, { useState, useId } from "react";

export interface TowerSite {
  id: string;
  name: string;
  type: "lattice" | "monopole" | "guyed" | "rooftop";
  region: string;
  heightM: number;
  coordinates: string;
  status: "operational" | "planned" | "maintenance";
  client: string;
  elevationM: number;
  xPct: number; // percentage position on 1920x1080 Nepal map canvas
  yPct: number;
  frequency: string;
  linksTo?: string[];
}

export const TOWER_SITES: TowerSite[] = [
  {
    id: "KTM-001",
    name: "Chandragiri Ridge Guyed Relay",
    type: "guyed",
    region: "Kathmandu Valley (Bagmati)",
    heightM: 60,
    coordinates: "27°40'30\" N, 85°13'41\" E",
    status: "operational",
    client: "Nepal Telecom / MNO",
    elevationM: 2551,
    xPct: 62.0,
    yPct: 56.5,
    frequency: "18 GHz / 23 GHz (Dual Pol)",
    linksTo: ["PKR-104", "CTW-201", "KTM-002"],
  },
  {
    id: "KTM-002",
    name: "Bhotahiti Central Metro Rooftop",
    type: "rooftop",
    region: "Kathmandu Metro (Bagmati)",
    heightM: 24,
    coordinates: "27°42'21\" N, 85°18'48\" E",
    status: "operational",
    client: "Tier-1 Metro ISP",
    elevationM: 1350,
    xPct: 63.4,
    yPct: 54.8,
    frequency: "80 GHz E-Band Metro",
    linksTo: ["KTM-001"],
  },
  {
    id: "PKR-104",
    name: "Sarangkot 4-Leg Lattice Mast",
    type: "lattice",
    region: "Pokhara Valley (Gandaki)",
    heightM: 45,
    coordinates: "28°14'38\" N, 83°56'55\" E",
    status: "operational",
    client: "Broadband Backbone",
    elevationM: 1600,
    xPct: 49.5,
    yPct: 49.0,
    frequency: "7 GHz Long-Haul Core",
    linksTo: ["KTM-001", "BTW-402"],
  },
  {
    id: "CTW-201",
    name: "Bharatpur Industrial Monopole",
    type: "monopole",
    region: "Chitwan Basin (Bagmati)",
    heightM: 35,
    coordinates: "27°41'00\" N, 84°26'00\" E",
    status: "operational",
    client: "Ncell Axiata",
    elevationM: 208,
    xPct: 56.2,
    yPct: 63.0,
    frequency: "11 GHz Backhaul Ring",
    linksTo: ["KTM-001", "BTW-402"],
  },
  {
    id: "BTW-402",
    name: "Butwal Gorge Microwave Tower",
    type: "lattice",
    region: "Lumbini Province",
    heightM: 40,
    coordinates: "27°42'02\" N, 83°26'54\" E",
    status: "operational",
    client: "Subisu Cablenet",
    elevationM: 220,
    xPct: 45.8,
    yPct: 61.0,
    frequency: "13 GHz Terai Backbone",
    linksTo: ["PKR-104", "CTW-201", "NPG-510"],
  },
  {
    id: "NPG-510",
    name: "Nepalgunj High-Capacity Mast",
    type: "guyed",
    region: "Western Terai (Lumbini)",
    heightM: 80,
    coordinates: "28°03'00\" N, 81°37'00\" E",
    status: "operational",
    client: "Defense & Civil Backbone",
    elevationM: 150,
    xPct: 32.3,
    yPct: 56.5,
    frequency: "6 GHz Inter-Provincial Hop",
    linksTo: ["BTW-402", "DGD-601"],
  },
  {
    id: "DGD-601",
    name: "Dhangadhi Far-West Hub",
    type: "monopole",
    region: "Sudurpashchim Province",
    heightM: 30,
    coordinates: "28°41'07\" N, 80°35'45\" E",
    status: "planned",
    client: "Regional ISP Expansion",
    elevationM: 109,
    xPct: 16.7,
    yPct: 49.5,
    frequency: "Planned 11 GHz Node",
    linksTo: ["NPG-510"],
  },
  {
    id: "BRT-305",
    name: "Biratnagar Border Backbone Lattice",
    type: "lattice",
    region: "Eastern Industrial (Koshi)",
    heightM: 52,
    coordinates: "26°27'09\" N, 87°16'18\" E",
    status: "operational",
    client: "National Fiber Ring",
    elevationM: 80,
    xPct: 80.7,
    yPct: 72.0,
    frequency: "DWDM Optical + 18 GHz Radio",
    linksTo: ["KTM-001"],
  },
];

export default function CoverageMap() {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [activeSite, setActiveSite] = useState<TowerSite | null>(TOWER_SITES[0]);
  const [showMicrowaveLinks, setShowMicrowaveLinks] = useState<boolean>(true);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const filterId = useId();

  const filteredSites = TOWER_SITES.filter((s) => {
    if (selectedType === "all") return true;
    return s.type === selectedType;
  });

  return (
    <div className="coverage-component" aria-label="Regional Tower Infrastructure Explorer">
      {/* Drafting Top Bar */}
      <div className="coverage-topbar">
        <div className="coverage-meta">
          <span className="label">SHEET: COV-NEPAL // NATIONAL TELECOM ATLAS</span>
          <span className="data total-badge">{filteredSites.length} SITES AUDITED</span>
        </div>

        <div className="coverage-actions">
          {/* Microwave Link Overlay Toggle */}
          <button
            type="button"
            className={`toggle-btn ${showMicrowaveLinks ? "active" : ""}`}
            onClick={() => setShowMicrowaveLinks((v) => !v)}
            aria-pressed={showMicrowaveLinks}
            title="Toggle Microwave Line-of-Sight transmission links"
          >
            {showMicrowaveLinks ? "Links: ON" : "Links: OFF"}
          </button>

          {/* View Switcher */}
          <div className="view-toggle-group" role="group" aria-label="Display View Mode">
            <button
              type="button"
              className={`toggle-btn ${viewMode === "map" ? "active" : ""}`}
              onClick={() => setViewMode("map")}
              aria-pressed={viewMode === "map"}
            >
              Interactive Map
            </button>
            <button
              type="button"
              className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
              aria-pressed={viewMode === "list"}
            >
              Audit List View
            </button>
          </div>
        </div>
      </div>

      {/* Filter Ribbon */}
      <div className="filter-ribbon">
        <label htmlFor={filterId} className="label filter-label">
          FILTER BY STRUCTURE CLASSIFICATION:
        </label>
        <div className="filter-chips">
          {["all", "lattice", "monopole", "guyed", "rooftop"].map((type) => (
            <button
              key={type}
              type="button"
              className={`chip-btn ${selectedType === type ? "chip-active" : ""}`}
              onClick={() => setSelectedType(type)}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main View Area */}
      {viewMode === "map" ? (
        <div className="map-layout">
          {/* Vector Map Canvas */}
          <div className="map-canvas-container" role="region" aria-label="National Tower Vector Map">
            {/* Map Controls */}
            <div className="map-zoom-controls">
              <button
                type="button"
                className="zoom-btn"
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                className="zoom-btn"
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.8))}
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                className="zoom-btn reset-btn"
                onClick={() => setZoomLevel(1)}
                aria-label="Reset zoom"
              >
                1:1
              </button>
            </div>

            <div
              className="map-surface"
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: "center center" }}
            >
              {/* Authentic Nepal Vector Map as Base Layer */}
              <div className="nepal-map-backdrop" aria-hidden="true">
                <img
                  src="/nepal-map.svg"
                  alt="Official vector map of Nepal with provincial boundaries"
                  className="nepal-svg-img"
                  loading="eager"
                />
              </div>

              {/* Microwave Line-of-Sight Transmission Grid Overlay */}
              {showMicrowaveLinks && (
                <svg className="microwave-links-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  {/* Long-Haul Core Backbone Lines */}
                  {/* KTM to PKR */}
                  <line x1="62.0" y1="56.5" x2="49.5" y2="49.0" stroke="#e8501a" strokeWidth="0.35" strokeDasharray="1,0.5" opacity="0.85"/>
                  {/* KTM to CTW */}
                  <line x1="62.0" y1="56.5" x2="56.2" y2="63.0" stroke="#e8501a" strokeWidth="0.35" strokeDasharray="1,0.5" opacity="0.85"/>
                  {/* PKR to BTW */}
                  <line x1="49.5" y1="49.0" x2="45.8" y2="61.0" stroke="#e8501a" strokeWidth="0.35" strokeDasharray="1,0.5" opacity="0.85"/>
                  {/* CTW to BTW */}
                  <line x1="56.2" y1="63.0" x2="45.8" y2="61.0" stroke="#e8501a" strokeWidth="0.35" strokeDasharray="1,0.5" opacity="0.85"/>
                  {/* BTW to NPG */}
                  <line x1="45.8" y1="61.0" x2="32.3" y2="56.5" stroke="#e8501a" strokeWidth="0.35" strokeDasharray="1,0.5" opacity="0.85"/>
                  {/* NPG to DGD */}
                  <line x1="32.3" y1="56.5" x2="16.7" y2="49.5" stroke="#1f5fa8" strokeWidth="0.3" strokeDasharray="1,1" opacity="0.7"/>
                  {/* KTM to BRT */}
                  <line x1="62.0" y1="56.5" x2="80.7" y2="72.0" stroke="#e8501a" strokeWidth="0.35" strokeDasharray="1,0.5" opacity="0.85"/>
                </svg>
              )}

              {/* Tower Site Markers (Positioned by exact geo-proportions) */}
              {filteredSites.map((site) => {
                const isSelected = activeSite?.id === site.id;
                return (
                  <button
                    key={site.id}
                    type="button"
                    onClick={() => setActiveSite(site)}
                    className={`map-site-marker ${isSelected ? "marker-active" : ""}`}
                    style={{ left: `${site.xPct}%`, top: `${site.yPct}%` }}
                    aria-label={`Site ${site.id} - ${site.name}`}
                  >
                    <span className="marker-pin" aria-hidden="true">
                      {site.type === "lattice" && "▲"}
                      {site.type === "guyed" && "◆"}
                      {site.type === "monopole" && "●"}
                      {site.type === "rooftop" && "■"}
                    </span>
                    <span className="marker-label label">{site.id}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Site Details Panel */}
          {activeSite ? (
            <div className="site-details-panel">
              <div className="panel-header">
                <span className="label">SELECTED TELECOM ASSET</span>
                <span className="data site-id-tag">{activeSite.id}</span>
              </div>

              <div className="panel-body">
                <h3 className="panel-title">{activeSite.name}</h3>
                <div className="panel-status-row">
                  <span className={`status-pill pill-${activeSite.status}`}>
                    ● {activeSite.status.toUpperCase()}
                  </span>
                  <span className="label panel-region">{activeSite.region}</span>
                </div>

                <div className="spec-item-list">
                  <div className="spec-item">
                    <span className="label">TOWER CLASSIFICATION</span>
                    <span className="data font-bold">{activeSite.type.toUpperCase()}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">PHYSICAL HEIGHT</span>
                    <span className="data font-bold text-accent">{activeSite.heightM} METERS</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">GROUND ELEVATION</span>
                    <span className="data">{activeSite.elevationM} M ASL</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">RADIO FREQUENCY LINK</span>
                    <span className="data">{activeSite.frequency}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">GEODETIC COORDINATES</span>
                    <span className="data">{activeSite.coordinates}</span>
                  </div>
                  <div className="spec-item">
                    <span className="label">PRIMARY OPERATOR / CLIENT</span>
                    <span className="data">{activeSite.client}</span>
                  </div>
                </div>

                <div className="panel-footer">
                  <a href="/contact" className="panel-rfq-link label">
                    REQUEST SITE SURVEY FOR THIS SECTOR →
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="site-details-panel empty">
              <p className="label">Select any tower asset marker on the Nepal map to inspect engineering specifications.</p>
            </div>
          )}
        </div>
      ) : (
        /* List View (Accessible tabular data) */
        <div className="coverage-list-view">
          <table className="list-table">
            <thead>
              <tr>
                <th scope="col" className="label">Site ID</th>
                <th scope="col" className="label">Asset Name</th>
                <th scope="col" className="label">Classification</th>
                <th scope="col" className="label">Province / District</th>
                <th scope="col" className="label">Height</th>
                <th scope="col" className="label">Frequency Tier</th>
                <th scope="col" className="label">Coordinates</th>
                <th scope="col" className="label">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredSites.map((site, idx) => (
                <tr key={site.id} className={idx % 2 === 1 ? "stripe" : ""}>
                  <td className="data font-bold">{site.id}</td>
                  <td className="data">{site.name}</td>
                  <td className="data uppercase">{site.type}</td>
                  <td className="data">{site.region}</td>
                  <td className="data text-right font-bold">{site.heightM} m</td>
                  <td className="data">{site.frequency}</td>
                  <td className="data">{site.coordinates}</td>
                  <td>
                    <span className={`status-pill pill-${site.status}`}>
                      ● {site.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Legend */}
      <div className="coverage-legend">
        <span className="label legend-title">DRAFTING SYMBOLS:</span>
        <div className="legend-items">
          <span className="legend-item"><span className="symbol">▲</span> 4-Legged Lattice</span>
          <span className="legend-item"><span className="symbol">◆</span> Guyed Mast</span>
          <span className="legend-item"><span className="symbol">●</span> Monopole</span>
          <span className="legend-item"><span className="symbol">■</span> Rooftop DAS</span>
          <span className="legend-item"><span className="symbol line-symbol">—</span> Microwave LoS Backbone</span>
        </div>
      </div>
    </div>
  );
}
