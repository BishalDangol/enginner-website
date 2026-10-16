"use client";

import { useEffect } from "react";

export default function InteractiveEffects() {
  useEffect(() => {
    // 1. Accordion for USE CASES
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

    // 2. Platform solutions tab switching
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

    // 3. Why Us items
    const whyItems = document.querySelectorAll(".home-why-item");
    whyItems.forEach((w) => {
      w.addEventListener("mouseenter", () => {
        w.classList.add("active");
      });
    });
  }, []);

  return null;
}
