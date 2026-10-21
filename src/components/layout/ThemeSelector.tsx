"use client";

import { Palette } from "lucide-react";
import { useEffect, useState } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./ThemeSelector.module.css";

const themeIds = ["burgundy", "burgundy-gold", "forest", "navy"] as const;
const defaultTheme = "burgundy-gold";

export function ThemeSelector() {
  const { theme: themeMessages } = useSiteMessages();
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || defaultTheme);
  }, []);

  function changeTheme(value: string) {
    if (!themeIds.some((item) => item === value)) return;
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
      <span className={styles.srOnly}>{themeMessages.label}</span>
      <select
        value={theme}
        onChange={(event) => changeTheme(event.target.value)}
      >
        {themeIds.map((item, index) => (
          <option key={item} value={item}>
            {themeMessages.items[index]}
          </option>
        ))}
      </select>
    </label>
  );
}
