"use client";

import { Palette } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./ThemeSelector.module.css";

const themes = [
  { id: "burgundy", label: "Бордо · Ivory" },
  { id: "forest", label: "Ногоон · Forest" },
  { id: "navy", label: "Хөх · Navy" },
] as const;

export function ThemeSelector() {
  const [theme, setTheme] = useState("burgundy");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || "burgundy");
  }, []);

  function changeTheme(value: string) {
    if (!themes.some((item) => item.id === value)) return;
    document.documentElement.dataset.theme = value;
    setTheme(value);
    try {
      localStorage.setItem("tsets-theme", value);
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  }

  return (
    <label className={styles.selector}>
      <Palette aria-hidden="true" size={16} />
      <span className={styles.srOnly}>Өнгөний загвар сонгох</span>
      <select
        value={theme}
        onChange={(event) => changeTheme(event.target.value)}
      >
        {themes.map((item) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  );
}
