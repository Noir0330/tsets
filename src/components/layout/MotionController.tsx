"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dataset.route = pathname;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const explicitElements = Array.from(
      document.querySelectorAll<HTMLElement>("main [data-reveal]"),
    );
    const fallbackElements = Array.from(
      document.querySelectorAll<HTMLElement>("main section, main article"),
    ).filter((element) => !element.closest("[data-motion-scope]"));
    const elements = [...explicitElements, ...fallbackElements];

    if (reducedMotion) {
      for (const element of elements) element.classList.add("isVisible");
      return;
    }

    for (const element of elements) {
      const animation = element.dataset.reveal ?? "up";
      const delay = Number(element.dataset.revealDelay ?? 0);

      element.classList.add(
        animation === "fade"
          ? "motionFade"
          : animation === "popup"
            ? "motionPopup"
            : animation === "chars"
              ? "motionChars"
              : "motionUp",
      );
      element.style.setProperty("--motion-delay", `${delay}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("isVisible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -7%", threshold: 0.08 },
    );

    for (const element of elements) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.93 && rect.bottom > 0) {
        requestAnimationFrame(() => element.classList.add("isVisible"));
      } else {
        observer.observe(element);
      }
    }
    return () => {
      observer.disconnect();
      delete document.documentElement.dataset.route;
    };
  }, [pathname]);

  return null;
}
