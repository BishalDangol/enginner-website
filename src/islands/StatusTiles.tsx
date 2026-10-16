import React, { useState } from "react";

interface ServiceStatus {
  id: string;
  name: string;
  segment: string;
  status: "operational" | "degraded" | "outage" | "planned";
  statusText: string;
  uptime30d: string;
  latencyMs: string;
  lastIncident: string;
}

const NOC_SERVICES: ServiceStatus[] = [
  {
    id: "SRV-MW-01",
    name: "Valley-Wide Microwave Backbone",
    segment: "Core Backhaul (18 GHz / 23 GHz)",
    status: "operational",
    statusText: "Operational",
    uptime30d: "99.991%",
    latencyMs: "< 1.8 ms",
    lastIncident: "None in last 90 days",
  },
  {
    id: "SRV-TWR-02",
    name: "Tower Obstruction Lighting & Telemetry",
    segment: "Aviation Safety (ICAO Type B)",
    status: "operational",
    statusText: "Operational",
    uptime30d: "100.00%",
    latencyMs: "Telemetry Normal",
    lastIncident: "Bulb swap KTM-001 (12 Feb)",
  },
  {
    id: "SRV-FBR-03",
    name: "Ring Road Metro Fiber Loop",
    segment: "Optical Transport (96-Core DWDM)",
    status: "operational",
    statusText: "Operational",
    uptime30d: "99.985%",
    latencyMs: "0.4 ms",
    lastIncident: "Scheduled splice (04 Mar)",
  },
  {
    id: "SRV-PWR-04",
    name: "Remote Ridge Hybrid Power (Solar/Diesel)",
    segment: "Critical Site Power Infrastructure",
    status: "degraded",
    statusText: "Degraded (Generator Run)",
    uptime30d: "99.940%",
    latencyMs: "Grid Fluctuating",
    lastIncident: "Grid power drop at Chandragiri",
  },
  {
    id: "SRV-MNT-05",
    name: "Rapid Rigging Emergency Dispatch",
    segment: "Field Crew Response (4-Hour SLA)",
    status: "operational",
    statusText: "Operational",
    uptime30d: "Standby Ready",
    latencyMs: "Kathmandu & Pokhara Depot",
    lastIncident: "Storm patrol clear",
  },
  {
    id: "SRV-PLN-06",
    name: "Gandaki Western Backbone Expansion",
    segment: "Civil Erection & Tower Assembly",
    status: "planned",
    statusText: "Planned Work (In Progress)",
    uptime30d: "Civil Foundation Phase",
    latencyMs: "On Schedule",
    lastIncident: "Target handover 25 Apr 2026",
  },
];

export default function StatusTiles() {
  const [filter, setFilter] = useState<string>("all");
  const [lastCheck, setLastCheck] = useState<string>("12:03:15 UTC+5:45");

  const filtered = NOC_SERVICES.filter((s) => {
    if (filter === "all") return true;
    return s.status === filter;
  });

  const getStatusIcon = (status: ServiceStatus["status"]) => {
    switch (status) {
      case "operational":
        return "✔";
      case "degraded":
        return "▲";
      case "outage":
        return "✖";
      case "planned":
        return "⏱";
    }
  };

  const getStatusColor = (status: ServiceStatus["status"]) => {
    switch (status) {
      case "operational":
        return "var(--color-status-operational)";
      case "degraded":
        return "var(--color-status-degraded)";
      case "outage":
        return "var(--color-status-outage)";
      case "planned":
        return "var(--color-status-planned)";
    }
  };

  return (
    <div className="noc-status-panel" aria-labelledby="noc-status-heading">
      {/* Top Banner */}
      <div className="noc-header">
        <div className="noc-header-left">
          <div className="noc-live-indicator" aria-hidden="true">
            <span className="live-pulse" />
            <span className="live-dot" />
          </div>
          <div>
            <span className="label text-accent">NOC TELEMETRY MONITOR // REAL-TIME SLA</span>
            <h2 id="noc-status-heading" className="noc-title">Network Operations Center Status</h2>
          </div>
        </div>

        <div className="noc-header-right">
          <span className="label">LAST SYNC: {lastCheck}</span>
          <button
            type="button"
            className="sync-btn label"
            onClick={() => setLastCheck(new Date().toLocaleTimeString() + " UTC+5:45")}
          >
            Refresh Feed
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="noc-filter-bar">
        <span className="label filter-label">FILTER SERVICES:</span>
        <div className="noc-chips">
          {["all", "operational", "degraded", "planned"].map((key) => (
            <button
              key={key}
              type="button"
              className={`noc-chip ${filter === key ? "chip-active" : ""}`}
              onClick={() => setFilter(key)}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Status Tiles */}
      <div className="noc-tiles-grid" role="region" aria-live="polite">
        {filtered.map((item) => (
          <div key={item.id} className="noc-tile">
            <div className="tile-top">
              <span className="label tile-id">{item.id}</span>
              <div
                className="status-tag"
                style={{
                  color: getStatusColor(item.status),
                  borderColor: getStatusColor(item.status),
                }}
              >
                <span className="status-icon" aria-hidden="true">
                  {getStatusIcon(item.status)}
                </span>
                <span className="status-label label">{item.statusText}</span>
              </div>
            </div>

            <h3 className="tile-name">{item.name}</h3>
            <p className="tile-segment label">{item.segment}</p>

            <div className="tile-metrics">
              <div className="metric-box">
                <span className="label metric-lbl">30-DAY UPTIME</span>
                <span className="data metric-val">{item.uptime30d}</span>
              </div>
              <div className="metric-box">
                <span className="label metric-lbl">LATENCY / PERF</span>
                <span className="data metric-val">{item.latencyMs}</span>
              </div>
            </div>

            <div className="tile-footer">
              <span className="label incident-lbl">AUDIT LOG:</span>
              <span className="data incident-txt">{item.lastIncident}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom NOC Notice */}
      <div className="noc-footer-note">
        <p className="label">
          NOTICE: EMERGENCY LINE-OF-SIGHT REALIGNMENTS DISPATCHED WITHIN 4 HOURS. 
          TIER-1 OPERATORS ESCALATE VIA DEDICATED SIP TRUNK: +977 1 456-7890 (PIN: NOC-01).
        </p>
      </div>
    </div>
  );
}
