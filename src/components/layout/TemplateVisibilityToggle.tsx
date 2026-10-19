"use client";

import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./TemplateVisibilityToggle.module.css";

const storageKey = "tsets-template-sections";

export function TemplateVisibilityToggle() {
  const { template } = useSiteMessages();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(document.documentElement.dataset.template === "show");
  }, []);

  function toggleVisibility() {
    const nextValue = !isVisible;
    document.documentElement.dataset.template = nextValue ? "show" : "hide";
    setIsVisible(nextValue);

    try {
      localStorage.setItem(storageKey, nextValue ? "show" : "hide");
    } catch {
      // The switch remains usable when browser storage is unavailable.
    }
  }

  return (
    <button
      aria-checked={isVisible}
      className={styles.toggle}
      onClick={toggleVisibility}
      role="switch"
      title={isVisible ? template.hide : template.show}
      type="button"
    >
      {isVisible ? (
        <Eye aria-hidden="true" size={16} />
      ) : (
        <EyeOff aria-hidden="true" size={16} />
      )}
      <span>{template.label}</span>
      <i aria-hidden="true" />
    </button>
  );
}
