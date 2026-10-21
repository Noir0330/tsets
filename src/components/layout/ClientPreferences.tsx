"use client";

import { useLayoutEffect } from "react";

const themeIds = ["burgundy", "burgundy-gold", "forest", "navy"] as const;

function isTheme(theme: string | null): theme is (typeof themeIds)[number] {
  return themeIds.some((item) => item === theme);
}

export function ClientPreferences() {
  useLayoutEffect(() => {
    const root = document.documentElement;

    try {
      const theme = localStorage.getItem("tsets-theme");
      if (isTheme(theme)) {
        root.dataset.theme = theme;
      }

      root.dataset.template =
        localStorage.getItem("tsets-template-sections") === "show"
          ? "show"
          : "hide";
    } catch {
      // The server-rendered defaults remain in use when browser storage is unavailable.
    }
  }, []);

  return null;
}
