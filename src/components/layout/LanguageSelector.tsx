"use client";

import { Check, ChevronDown, Languages } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { publicLocales } from "@/lib/i18n/config";
import { usePublicLocale } from "@/lib/i18n/PublicI18nProvider";
import styles from "./LanguageSelector.module.css";

export function LanguageSelector() {
  const t = useTranslations("publicLanguage");
  const { locale, selectLocale } = usePublicLocale();
  const selectorRef = useRef<HTMLDetailsElement>(null);

  const closeSelector = () => {
    if (selectorRef.current) selectorRef.current.open = false;
  };

  return (
    <details
      className={styles.selector}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeSelector();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeSelector();
          selectorRef.current?.querySelector("summary")?.focus();
        }
      }}
      ref={selectorRef}
    >
      <summary aria-label={t("changeLanguage")} title={t("changeLanguage")}>
        <Languages
          aria-hidden="true"
          className={styles.languageIcon}
          size={16}
        />
        <span className={styles.current}>{t(`short.${locale}`)}</span>
        <ChevronDown aria-hidden="true" className={styles.chevron} size={14} />
      </summary>
      <div className={styles.menu}>
        {publicLocales.map((item) => (
          <button
            aria-current={item === locale ? "true" : undefined}
            className={item === locale ? styles.active : undefined}
            key={item}
            lang={item === "zh" ? "zh-CN" : item}
            onClick={() => {
              selectLocale(item);
              closeSelector();
            }}
            type="button"
          >
            <span className={styles.code}>{t(`short.${item}`)}</span>
            <span>{t(`names.${item}`)}</span>
            {item === locale ? <Check aria-hidden="true" size={15} /> : null}
          </button>
        ))}
      </div>
    </details>
  );
}
