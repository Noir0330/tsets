import en from "./messages/en.json";
import mn from "./messages/mn.json";
import zh from "./messages/zh.json";

export const publicLocales = ["mn", "en", "zh"] as const;
export type PublicLocale = (typeof publicLocales)[number];
export const defaultPublicLocale: PublicLocale = "mn";

export const publicMessages = { en, mn, zh } satisfies Record<
  PublicLocale,
  typeof mn
>;

export const publicIntlMessages = {
  en: { publicLanguage: en.publicLanguage },
  mn: { publicLanguage: mn.publicLanguage },
  zh: { publicLanguage: zh.publicLanguage },
} satisfies Record<PublicLocale, { publicLanguage: typeof mn.publicLanguage }>;

export const publicLocaleHtmlLang: Record<PublicLocale, string> = {
  mn: "mn",
  en: "en",
  zh: "zh-CN",
};

export function isPublicLocale(value: string | null): value is PublicLocale {
  return publicLocales.some((locale) => locale === value);
}

declare module "next-intl" {
  interface AppConfig {
    Locale: PublicLocale;
    Messages: (typeof publicIntlMessages)["mn"];
  }
}
