"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
    Webflow?: any;
  }
}

export default function InteractiveEffects() {
  useEffect(() => {
    // 1. Initialize Webflow interactions if loaded
    if (typeof window !== "undefined" && window.Webflow && window.Webflow.ready) {
      try {
        window.Webflow.ready();
      } catch (e) {
        console.error("Webflow ready error", e);
      }
    }

    // 2. Setup GSAP ScrollTrigger Animations
    const initScrollTriggers = () => {
      if (typeof window === "undefined") return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

      if (!gsap || !ScrollTrigger) {
        setTimeout(initScrollTriggers, 200);
        return;
      }

      try {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Cursor Follower & Crosshair Line Movement
        const heroWrap = document.querySelector(".home-hero-inner");
        const cursorH = document.querySelector(".home-hero-curor-line.line-horizital") as HTMLElement;
        const cursorV = document.querySelector(".home-hero-curor-line.line-vertical") as HTMLElement;
        const cursorCoord = document.querySelector(".home-hero-img-coordi") as HTMLElement;

        if (heroWrap && cursorH && cursorV) {
          heroWrap.addEventListener("mousemove", (e: any) => {
            const rect = heroWrap.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cursorH.style.transform = `translateY(${y}px)`;
            cursorV.style.transform = `translateX(${x}px)`;
            if (cursorCoord) {
              cursorCoord.style.transform = `translate(${x + 12}px, ${y + 12}px)`;
              const txt = cursorCoord.querySelector(".txt");
              if (txt) {
                txt.textContent = `[${Math.round(x)}, ${Math.round(y)}]`;
              }
            }
          });
        }

        // Hero Elevation Parallax / Scale on Scroll
        const heroImg = document.querySelector(".home-hero-img-inner");
        if (heroImg) {
          gsap.to(heroImg, {
            scrollTrigger: {
              trigger: ".home-hero",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
            y: 80,
            scale: 0.98,
            ease: "none",
          });
        }

        // Problems Grid [01] to [04] Staggered Reveal
        const probItems = document.querySelectorAll(".home-problem-item");
        if (probItems.length > 0) {
          gsap.from(probItems, {
            scrollTrigger: {
              trigger: ".home-problem",
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
          });
        }

        // Why Us Sticky Card Timeline
        const whyItems = document.querySelectorAll(".home-why-item");
        whyItems.forEach((item) => {
          ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              whyItems.forEach((w) => w.classList.remove("active"));
              item.classList.add("active");
            },
            onEnterBack: () => {
              whyItems.forEach((w) => w.classList.remove("active"));
              item.classList.add("active");
            },
          });
        });

        // SVG Ink-Mask Reveals
        const masks = document.querySelectorAll(".ink-mask .mask");
        masks.forEach((mask) => {
          const finalPath = mask.getAttribute("data-value-final");
          if (finalPath) {
            gsap.to(mask, {
              scrollTrigger: {
                trigger: mask.closest("section") || mask,
                start: "top 65%",
                end: "bottom 35%",
                scrub: 1,
              },
              attr: { d: finalPath },
              ease: "power1.inOut",
            });
          }
        });

        ScrollTrigger.refresh();
      } catch (err) {
        console.warn("GSAP setup notice:", err);
      }
    };

    initScrollTriggers();

    // 3. Tab Switches for Use Cases Accordion
    const faqItems = document.querySelectorAll(".home-usecase-faq-item");
    const useCaseImgs = document.querySelectorAll(".home-usecase-img-item");
    faqItems.forEach((item, idx) => {
      item.addEventListener("click", () => {
        faqItems.forEach((f) => f.classList.remove("active"));
        item.classList.add("active");
        useCaseImgs.forEach((img, iIdx) => {
          if (iIdx === idx) {
            img.classList.add("active");
            (img as HTMLElement).style.opacity = "1";
            (img as HTMLElement).style.zIndex = "2";
          } else {
            img.classList.remove("active");
            (img as HTMLElement).style.opacity = "0";
            (img as HTMLElement).style.zIndex = "1";
          }
        });
      });
    });

    // 4. Platform solutions tab switching
    const platformTabs = document.querySelectorAll(".home-platform-content-left");
    const platformImages = document.querySelectorAll(".home-platform-img-item");
    platformTabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => {
        platformTabs.forEach((t) =>
          t.querySelector(".home-platform-content-title-wrap")?.classList.remove("active")
        );
        tab.querySelector(".home-platform-content-title-wrap")?.classList.add("active");
        platformImages.forEach((pImg, pIdx) => {
          if (pIdx === idx) {
            (pImg as HTMLElement).style.display = "block";
            (pImg as HTMLElement).style.opacity = "1";
          } else {
            (pImg as HTMLElement).style.display = "none";
            (pImg as HTMLElement).style.opacity = "0";
          }
        });
      });
    });
  }, []);

  return null;
}
