"use client";

import { Check, ChevronDown, Globe2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { publicLocales } from "@/lib/i18n/config";
import { usePublicLocale } from "@/lib/i18n/PublicI18nProvider";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  const t = useTranslations("publicLanguage");
  const { locale, selectLocale } = usePublicLocale();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!selectorRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div
      className={`${styles.selector} ${isOpen ? styles.selectorOpen : ""}`}
      ref={selectorRef}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label={t("changeLanguage")}
        className={styles.trigger}
        onClick={() => setIsOpen((current) => !current)}
        ref={triggerRef}
        title={t("changeLanguage")}
        type="button"
      >
        <Globe2 aria-hidden="true" className={styles.languageIcon} size={17} />
        <span className={styles.current}>{t(`short.${locale}`)}</span>
        <ChevronDown aria-hidden="true" className={styles.chevron} size={14} />
      </button>
      {isOpen ? (
        <div className={styles.menu} role="menu">
          {publicLocales.map((item) => (
            <button
              aria-checked={item === locale}
              aria-current={item === locale ? "true" : undefined}
              className={item === locale ? styles.active : undefined}
              key={item}
              lang={item === "zh" ? "zh-CN" : item}
              onClick={() => {
                selectLocale(item);
                setIsOpen(false);
              }}
              role="menuitemradio"
              type="button"
            >
              <span className={styles.code}>{t(`short.${item}`)}</span>
              <span>{t(`names.${item}`)}</span>
              {item === locale ? <Check aria-hidden="true" size={15} /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
