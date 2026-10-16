/**
 * Site-Wide Scroll-Triggered Animation, Parallax & Telemetry Engine
 * Tracks viewport intersections, reveals technical content with smooth easing,
 * and updates live engineering elevation benchmarks.
 */

export function initScrollSystem() {
  if (typeof window === "undefined") return;

  // 1. Intersection Observer for Progressive Content Reveals
  const revealElements = document.querySelectorAll("[data-reveal]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Unobserve after reveal for maximum performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.12,
      }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add("is-revealed"));
  }

  // 2. Site-Wide Engineering Telemetry HUD (Fixed Bottom-Right)
  let hudEl = document.querySelector(".engineering-scroll-hud") as HTMLElement | null;
  if (!hudEl) {
    hudEl = document.createElement("div");
    hudEl.className = "engineering-scroll-hud";
    hudEl.innerHTML = `
      <span class="label">STATION: APX-TIA-2026</span>
      <span class="label text-accent" id="hud-elev-display">ELEV: 1,350M ASL</span>
      <div class="hud-progress-meter" aria-hidden="true">
        <div class="hud-progress-fill" id="hud-scroll-fill"></div>
      </div>
      <span class="data font-bold" id="hud-scroll-pct">0%</span>
    `;
    document.body.appendChild(hudEl);
  }

  const elevDisplay = document.getElementById("hud-elev-display");
  const scrollFill = document.getElementById("hud-scroll-fill");
  const scrollPct = document.getElementById("hud-scroll-pct");

  let ticking = false;

  const updateScrollTelemetry = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
    const pct = Math.round(progress * 100);

    // Show telemetry HUD after user begins scrolling down
    if (scrollY > 150) {
      hudEl?.classList.add("visible");
    } else {
      hudEl?.classList.remove("visible");
    }

    if (scrollFill) scrollFill.style.width = `${pct}%`;
    if (scrollPct) scrollPct.textContent = `${pct}%`;

    // Dynamic elevation simulation from base 1,350m up to apex mast 1,410m
    const simulatedElev = Math.round(1350 + progress * 60);
    if (elevDisplay) elevDisplay.textContent = `ELEV: ${simulatedElev}M ASL`;

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollTelemetry);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateScrollTelemetry();
}

// Auto-run if loaded via client script
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollSystem);
  } else {
    initScrollSystem();
  }
}
