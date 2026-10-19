"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";

export default function NotFound() {
  const { notFound } = useSiteMessages();
  return (
    <section className="section sectionWarm">
      <div
        className="shell"
        style={{ minHeight: "55vh", display: "grid", placeItems: "center" }}
      >
        <div style={{ maxWidth: 720, textAlign: "center" }}>
          <p className="eyebrow">{notFound.eyebrow}</p>
          <h1
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              marginBottom: "2rem",
            }}
          >
            {notFound.title}
          </h1>
          <Link className="button buttonDark" href="/">
            {notFound.back}
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
