import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { ClientPreferences } from "@/components/layout/ClientPreferences";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { MotionController } from "@/components/layout/MotionController";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { PublicI18nProvider } from "@/lib/i18n/PublicI18nProvider";
import "./globals.css";

const displayFont = localFont({
  src: [
    { path: "./fonts/trirong-300.woff2", weight: "300" },
    { path: "./fonts/trirong-400.woff2", weight: "400" },
    { path: "./fonts/trirong-500.woff2", weight: "500" },
  ],
  variable: "--font-trirong",
});

const bodyFont = localFont({
  src: "./fonts/work-sans-variable.woff2",
  weight: "100 900",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Цэц Партнерс — Хуулийн фирм",
    template: "%s — Цэц Партнерс",
  },
  description:
    "Өмгөөлөл, төлөөлөл болон хууль зүйн зөвлөх үйлчилгээ үзүүлэгч Цэц Партнерс хуулийн фирм.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      className={`${displayFont.variable} ${bodyFont.variable}`}
      data-template="hide"
      data-theme="burgundy-gold"
      lang="mn"
      suppressHydrationWarning
    >
      <body>
        <ClientPreferences />
        <PublicI18nProvider>
          <SkipLink />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <MotionController />
          <SiteFooter />
          <FloatingContact />
        </PublicI18nProvider>
      </body>
    </html>
  );
}
