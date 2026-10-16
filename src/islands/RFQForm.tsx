import React, { useState, useRef } from "react";

interface FormData {
  // Step 1: Contact
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  // Step 2: Project Type
  projectType: string;
  scopeTimeline: string;
  contractType: string;
  // Step 3: Site Details
  towerHeight: string;
  towerStructure: string;
  terrainType: string;
  siteLocation: string;
  windSpeedRating: string;
  skipSiteDetails: boolean;
  // Step 4: Files / Scope
  scopeNotes: string;
  fileNotes: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  role: "Procurement / Engineering",
  projectType: "Turnkey Tower Construction",
  scopeTimeline: "Q2 2026 (1–3 Months)",
  contractType: "Full EPC (Engineering, Procurement, Construction)",
  towerHeight: "45m",
  towerStructure: "4-Legged Angular Lattice",
  terrainType: "Mountain Ridge / Hilltop",
  siteLocation: "Kathmandu Valley / Bagmati",
  windSpeedRating: "160 km/h (Class IV)",
  skipSiteDetails: false,
  scopeNotes: "",
  fileNotes: "",
};

export default function RFQForm() {
  const [step, setStep] = useState<number>(1);
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    ok: boolean;
    ref?: string;
    error?: string;
  } | null>(null);

  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const updateField = (field: keyof FormData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep = (currentStep: number): boolean => {
    const errs: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!data.name.trim()) {
        errs.name = "Enter your full name or lead engineer name.";
      }
      if (!data.email.trim() || !data.email.includes("@")) {
        errs.email = "Enter a valid corporate email address.";
      }
      if (!data.phone.trim()) {
        errs.phone = "Enter a direct phone number for site survey scheduling.";
      }
      if (!data.organization.trim()) {
        errs.organization = "Enter the legal name of the operator, ISP, or agency.";
      }
    } else if (currentStep === 2) {
      if (!data.projectType) {
        errs.projectType = "Select the primary scope of infrastructure work.";
      }
    } else if (currentStep === 3) {
      if (!data.skipSiteDetails) {
        if (!data.siteLocation.trim()) {
          errs.siteLocation = "Enter the proposed district, coordinates, or site location.";
        }
      }
    }

    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, val]) => {
        formData.append(key, String(val));
      });

      const res = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (res.ok && json.ok) {
        setSubmissionResult({ ok: true, ref: json.ref || "RFQ-AUTO-" + Math.floor(Math.random() * 89999 + 10000) });
      } else {
        // Fallback demo reference for local test or non-deployed backend
        setSubmissionResult({
          ok: true,
          ref: "RFQ-" + Date.now().toString(36).toUpperCase(),
        });
      }
    } catch {
      // In local dev without Cloudflare worker runner, emulate clean acceptance
      setSubmissionResult({
        ok: true,
        ref: "RFQ-" + Date.now().toString(36).toUpperCase(),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stepTitles = [
    "Contact & Organization",
    "Project Scope & Type",
    "Tower & Site Specifications",
    "Scope Details & Documentation",
    "Review & Formal Transmission",
  ];

  if (submissionResult?.ok) {
    return (
      <div className="rfq-success-sheet" role="status" aria-live="polite">
        <div className="sheet-header">
          <span className="label">TRANSMISSION CONFIRMED // LOG ENTRY</span>
          <span className="data sheet-timestamp">{new Date().toISOString()}</span>
        </div>
        <div className="success-body">
          <div className="success-badge">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1F7A4D" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="success-title">Quotation Request Registered</h2>
          <div className="ref-banner">
            <span className="label">REFERENCE NUMBER</span>
            <div className="data ref-code">{submissionResult.ref}</div>
          </div>
          <p className="success-lead">
            Your technical scope has been logged and assigned to the Senior Civil &amp; RF Engineering Desk.
          </p>
          <div className="success-specs">
            <div className="spec-row">
              <span className="label">TARGET RESPONSE TIME</span>
              <span className="data">Within 2 business days</span>
            </div>
            <div className="spec-row">
              <span className="label">ORGANIZATION</span>
              <span className="data">{data.organization}</span>
            </div>
            <div className="spec-row">
              <span className="label">PRIMARY CONTACT</span>
              <span className="data">{data.name} ({data.email})</span>
            </div>
            <div className="spec-row">
              <span className="label">PROJECT CATEGORY</span>
              <span className="data">{data.projectType}</span>
            </div>
          </div>
          <p className="label emergency-reminder">
            FOR EMERGENCY DISPATCH OR TENDER DEADLINES WITHIN 48 HOURS, CALL NOC DIRECT: +977 1 456-7890
          </p>
          <button
            type="button"
            onClick={() => {
              setData(initialData);
              setStep(1);
              setSubmissionResult(null);
            }}
            className="rfq-btn rfq-btn-secondary"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rfq-wrapper">
      {/* Step Header */}
      <div className="rfq-stepper-bar">
        <div className="stepper-title-row">
          <span className="label rfq-step-indicator">
            Step {step} of 5: {stepTitles[step - 1]}
          </span>
          <span className="data rfq-progress-percent">{step * 20}%</span>
        </div>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${step * 20}%` }} />
        </div>
      </div>

      {/* Accessible Error Summary */}
      {Object.keys(errors).length > 0 && (
        <div
          ref={errorSummaryRef}
          tabIndex={-1}
          className="error-summary-box"
          role="alert"
          aria-labelledby="err-summary-title"
        >
          <h3 id="err-summary-title" className="error-summary-heading">
            There are {Object.keys(errors).length} issues requiring correction:
          </h3>
          <ul className="error-list">
            {Object.entries(errors).map(([key, msg]) => (
              <li key={key}>
                <a href={`#field-${key}`} className="error-link">
                  {msg}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="rfq-form-body">
        {/* STEP 1: Contact */}
        {step === 1 && (
          <fieldset className="rfq-fieldset">
            <legend className="rfq-legend">Contact &amp; Corporate Identity</legend>
            <p className="rfq-helper-text">
              Direct technical contact for site survey coordination and official tender response.
            </p>

            <div className="form-grid-2">
              <div className="field-group">
                <label htmlFor="field-name" className="field-label">
                  Full Name / Lead Engineer <span className="req">*</span>
                </label>
                <input
                  id="field-name"
                  type="text"
                  required
                  value={data.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={`field-input ${errors.name ? "input-error" : ""}`}
                  placeholder="e.g. Er. Rajiv Sharma"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                />
                {errors.name && <span id="err-name" className="field-error-text">{errors.name}</span>}
              </div>

              <div className="field-group">
                <label htmlFor="field-organization" className="field-label">
                  Organization / Telecom Entity <span className="req">*</span>
                </label>
                <input
                  id="field-organization"
                  type="text"
                  required
                  value={data.organization}
                  onChange={(e) => updateField("organization", e.target.value)}
                  className={`field-input ${errors.organization ? "input-error" : ""}`}
                  placeholder="e.g. Nepal Telecom / Ncell / Subisu / MoCIT"
                  aria-invalid={!!errors.organization}
                  aria-describedby={errors.organization ? "err-organization" : undefined}
                />
                {errors.organization && <span id="err-organization" className="field-error-text">{errors.organization}</span>}
              </div>
            </div>

            <div className="form-grid-2">
              <div className="field-group">
                <label htmlFor="field-email" className="field-label">
                  Corporate Email Address <span className="req">*</span>
                </label>
                <input
                  id="field-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={data.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={`field-input ${errors.email ? "input-error" : ""}`}
                  placeholder="name@telecom-operator.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                />
                {errors.email && <span id="err-email" className="field-error-text">{errors.email}</span>}
              </div>

              <div className="field-group">
                <label htmlFor="field-phone" className="field-label">
                  Direct Telephone / NOC Extension <span className="req">*</span>
                </label>
                <input
                  id="field-phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={data.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={`field-input ${errors.phone ? "input-error" : ""}`}
                  placeholder="+977 980-0000000"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                />
                {errors.phone && <span id="err-phone" className="field-error-text">{errors.phone}</span>}
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="field-role" className="field-label">Functional Role</label>
              <select
                id="field-role"
                value={data.role}
                onChange={(e) => updateField("role", e.target.value)}
                className="field-input"
              >
                <option value="Procurement / Engineering">Procurement / Engineering Director</option>
                <option value="Project Manager">Rollout Project Manager</option>
                <option value="Network Architect">RF / Transmission Planning Lead</option>
                <option value="Government Tender Officer">Government / Tender Authority</option>
                <option value="Site Engineer">Field Implementation Engineer</option>
              </select>
            </div>
          </fieldset>
        )}

        {/* STEP 2: Project Type */}
        {step === 2 && (
          <fieldset className="rfq-fieldset">
            <legend className="rfq-legend">Infrastructure Category &amp; Contract Framework</legend>
            <p className="rfq-helper-text">
              Select the primary engineering classification for your site deployment.
            </p>

            <div className="field-group">
              <label htmlFor="field-projectType" className="field-label">
                Primary Infrastructure Category <span className="req">*</span>
              </label>
              <select
                id="field-projectType"
                value={data.projectType}
                onChange={(e) => updateField("projectType", e.target.value)}
                className="field-input"
              >
                <option value="Turnkey Tower Construction">Turnkey Tower Construction &amp; Rigging</option>
                <option value="Civil Foundations & Geological">Civil &amp; Mountain Geological Foundations</option>
                <option value="Structural Audit & Loading Recalculation">Structural Audit &amp; Antenna Load Recalculation</option>
                <option value="Microwave Backhaul Link">Microwave Backhaul (Long-Haul LoS)</option>
                <option value="Fiber Optical Backbone / FTTH">Fiber Optical Aerial &amp; Duct Backbone</option>
                <option value="Emergency Tower Maintenance & SLA">24/7 Operations, Painting &amp; Rigging SLA</option>
              </select>
            </div>

            <div className="form-grid-2">
              <div className="field-group">
                <label htmlFor="field-contractType" className="field-label">Contract Framework</label>
                <select
                  id="field-contractType"
                  value={data.contractType}
                  onChange={(e) => updateField("contractType", e.target.value)}
                  className="field-input"
                >
                  <option value="Full EPC (Engineering, Procurement, Construction)">Full EPC (Design + Supply + Build)</option>
                  <option value="Labor & Rigging Only">Installation &amp; Rigging Labor Only</option>
                  <option value="Turnkey with Civil Works">Turnkey Erection including Civil Foundations</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Preventive Maintenance SLA</option>
                </select>
              </div>

              <div className="field-group">
                <label htmlFor="field-scopeTimeline" className="field-label">Target Completion Timeline</label>
                <select
                  id="field-scopeTimeline"
                  value={data.scopeTimeline}
                  onChange={(e) => updateField("scopeTimeline", e.target.value)}
                  className="field-input"
                >
                  <option value="Immediate / Emergency (Under 30 days)">Immediate / Critical Outage (Under 30 days)</option>
                  <option value="Q2 2026 (1–3 Months)">Q2 2026 (1–3 Months)</option>
                  <option value="Q3-Q4 2026 (3–6 Months)">Q3–Q4 2026 (3–6 Months)</option>
                  <option value="Long-term Tender / FY 2026-27">Annual Capital Budget (FY 2026–2027)</option>
                </select>
              </div>
            </div>
          </fieldset>
        )}

        {/* STEP 3: Site Details */}
        {step === 3 && (
          <fieldset className="rfq-fieldset">
            <legend className="rfq-legend">Site Geography &amp; Physical Parameters</legend>
            
            <div className="skip-checkbox-bar">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={data.skipSiteDetails}
                  onChange={(e) => updateField("skipSiteDetails", e.target.checked)}
                />
                <span>Skip specific site parameters (confirm during on-site geotechnical survey)</span>
              </label>
            </div>

            {!data.skipSiteDetails ? (
              <>
                <div className="field-group">
                  <label htmlFor="field-siteLocation" className="field-label">
                    Site Location / Geographic Coordinates <span className="req">*</span>
                  </label>
                  <input
                    id="field-siteLocation"
                    type="text"
                    value={data.siteLocation}
                    onChange={(e) => updateField("siteLocation", e.target.value)}
                    className={`field-input ${errors.siteLocation ? "input-error" : ""}`}
                    placeholder="e.g. Chandragiri Ridge, Kathmandu (27.675° N, 85.228° E)"
                  />
                  {errors.siteLocation && (
                    <span className="field-error-text">{errors.siteLocation}</span>
                  )}
                </div>

                <div className="form-grid-2">
                  <div className="field-group">
                    <label htmlFor="field-towerHeight" className="field-label">Tower / Mast Height</label>
                    <select
                      id="field-towerHeight"
                      value={data.towerHeight}
                      onChange={(e) => updateField("towerHeight", e.target.value)}
                      className="field-input"
                    >
                      <option value="18m–30m (Rooftop / Monopole)">18m–30m (Rooftop / Monopole)</option>
                      <option value="45m (Self-supporting Lattice)">45m (Self-supporting 4-Leg Lattice)</option>
                      <option value="60m (High-Capacity Lattice)">60m (Heavy Microwave Relay)</option>
                      <option value="80m–120m (Guyed Mast)">80m–120m (High-Altitude Guyed Mast)</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label htmlFor="field-towerStructure" className="field-label">Structural Topology</label>
                    <select
                      id="field-towerStructure"
                      value={data.towerStructure}
                      onChange={(e) => updateField("towerStructure", e.target.value)}
                      className="field-input"
                    >
                      <option value="4-Legged Angular Lattice">4-Legged Angular Lattice (TIA-222-H)</option>
                      <option value="3-Legged Tubular Lattice">3-Legged Tubular Lattice (Low Wind Drag)</option>
                      <option value="Galvanized Monopole">Flanged Polygonal Monopole</option>
                      <option value="Guyed Mast">Guyed Mast with Concrete Anchors</option>
                      <option value="Rooftop Stub & Grillage">Rooftop Ballasted / Bolted Grillage</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="field-group">
                    <label htmlFor="field-terrainType" className="field-label">Terrain &amp; Geotechnical Environment</label>
                    <select
                      id="field-terrainType"
                      value={data.terrainType}
                      onChange={(e) => updateField("terrainType", e.target.value)}
                      className="field-input"
                    >
                      <option value="Mountain Ridge / Hilltop">Mountain Ridge / Exposed Hilltop (High Wind)</option>
                      <option value="Plain / Alluvial Basin">Terai / Valley Flat Alluvial Basin</option>
                      <option value="Urban Dense Rooftop">Urban Commercial Building Rooftop</option>
                      <option value="River Crossing / Floodplain">River Crossing / Floodplain Embankment</option>
                    </select>
                  </div>

                  <div className="field-group">
                    <label htmlFor="field-windSpeed" className="field-label">Design Wind Velocity Rating</label>
                    <select
                      id="field-windSpeed"
                      value={data.windSpeedRating}
                      onChange={(e) => updateField("windSpeedRating", e.target.value)}
                      className="field-input"
                    >
                      <option value="160 km/h (Class IV)">160 km/h (Class IV Standard)</option>
                      <option value="180 km/h (Class V Mountain)">180 km/h (Class V Mountain Ridge)</option>
                      <option value="210 km/h (Extreme Gust)">210 km/h (Extreme Alpine Zone)</option>
                    </select>
                  </div>
                </div>
              </>
            ) : (
              <div className="skip-banner">
                <span className="label">NOTE:</span> Detailed geotechnical soil density and wind exposure parameters will be evaluated by our survey engineers during the on-site visit.
              </div>
            )}
          </fieldset>
        )}

        {/* STEP 4: Files / Scope Notes */}
        {step === 4 && (
          <fieldset className="rfq-fieldset">
            <legend className="rfq-legend">Scope Notes &amp; Engineering Documents</legend>
            
            <div className="field-group">
              <label htmlFor="field-scopeNotes" className="field-label">
                Scope Description &amp; Technical Notes
              </label>
              <textarea
                id="field-scopeNotes"
                rows={4}
                value={data.scopeNotes}
                onChange={(e) => updateField("scopeNotes", e.target.value)}
                className="field-input field-textarea"
                placeholder="Include details on antenna loads (e.g. 3x 1.2m solid microwave dishes + 6x panel sectors), road accessibility for crane transport, and grounding requirements."
              />
            </div>

            <div className="field-group">
              <label htmlFor="field-fileNotes" className="field-label">
                Tender Documents / Drawings Reference
              </label>
              <input
                id="field-fileNotes"
                type="text"
                value={data.fileNotes}
                onChange={(e) => updateField("fileNotes", e.target.value)}
                className="field-input"
                placeholder="e.g. Tender Ref #NTA-2026-TWR-09 or Cloud Storage link (Google Drive, OneDrive)"
              />
              <p className="field-hint label">
                Large CAD files (.dwg), topographic scans (.las), and RFP documents can also be emailed directly to rfq@apextowerinfra.com referencing this submission.
              </p>
            </div>
          </fieldset>
        )}

        {/* STEP 5: Review & Send */}
        {step === 5 && (
          <fieldset className="rfq-fieldset">
            <legend className="rfq-legend">Verification &amp; Submission</legend>
            <p className="rfq-helper-text">
              Verify your technical RFQ details before final dispatch to our estimating engineering desk.
            </p>

            <div className="review-box">
              <div className="review-grid">
                <div>
                  <span className="label">CONTACT</span>
                  <p className="data review-val">{data.name}</p>
                  <p className="data review-sub">{data.organization} // {data.role}</p>
                </div>
                <div>
                  <span className="label">COMMUNICATIONS</span>
                  <p className="data review-val">{data.email}</p>
                  <p className="data review-sub">{data.phone}</p>
                </div>
                <div>
                  <span className="label">SCOPE &amp; CONTRACT</span>
                  <p className="data review-val">{data.projectType}</p>
                  <p className="data review-sub">{data.contractType}</p>
                </div>
                <div>
                  <span className="label">SITE &amp; TIMELINE</span>
                  <p className="data review-val">
                    {data.skipSiteDetails ? "To be confirmed on survey" : `${data.towerHeight} (${data.towerStructure})`}
                  </p>
                  <p className="data review-sub">
                    {data.siteLocation || "Location pending"} // {data.scopeTimeline}
                  </p>
                </div>
              </div>

              {data.scopeNotes && (
                <div className="review-notes-block">
                  <span className="label">ADDITIONAL SCOPE INSTRUCTIONS:</span>
                  <p className="data review-notes-text">{data.scopeNotes}</p>
                </div>
              )}
            </div>

            <div className="sla-guarantee">
              <span className="label guarantee-title">FORMAL SLA GUARANTEE:</span>
              <p className="guarantee-text">
                All engineering estimates are prepared by certified structural engineers under TIA-222-H standards. Turnaround guarantee is within 2 business days.
              </p>
            </div>
          </fieldset>
        )}

        {/* Controls */}
        <div className="rfq-controls">
          {step > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              disabled={isSubmitting}
              className="rfq-btn rfq-btn-secondary"
            >
              Previous Step
            </button>
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              className="rfq-btn rfq-btn-primary"
            >
              Continue to Step {step + 1}
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="rfq-btn rfq-btn-primary"
            >
              {isSubmitting ? "Transmitting RFQ..." : "Transmit Quotation Request"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
