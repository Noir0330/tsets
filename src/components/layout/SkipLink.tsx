"use client";

import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";

export function SkipLink() {
  const { header } = useSiteMessages();
  return (
    <a className="skipLink" href="#main-content">
      {header.skipToContent}
    </a>
  );
}
