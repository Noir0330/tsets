"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { ContactForm } from "./ContactForm";
import styles from "./ThemeSections.module.css";

const logos = ["03", "04", "05", "06", "07"] as const;

export function TrustedLogos() {
  const { shared } = useSiteMessages();
  return (
    <section className={styles.logos} data-motion-scope data-template-only>
      <div className={`shell ${styles.logoRow}`}>
        <p data-reveal="fade">{shared.clients}</p>
        {logos.map((logo, index) => (
          <Image
            alt={shared.clientLogoAlt}
            data-reveal="fade"
            data-reveal-delay={(index + 1) * 80}
            height={42}
            key={logo}
            src={`/images/client-logo-${logo}.webp`}
            width={135}
          />
        ))}
      </div>
    </section>
  );
}

export function LegalMarquee() {
  const { shared } = useSiteMessages();
  const words = (
    <>
      {shared.marquee.map((word) => (
        <Fragment key={word}>
          <span>✦</span> {word}{" "}
        </Fragment>
      ))}
    </>
  );

  return (
    <section
      className={styles.marquee}
      aria-label={shared.valuesLabel}
      data-motion-scope
    >
      <div className={styles.marqueeTrack}>
        <div>{words}</div>
        <div aria-hidden="true">{words}</div>
      </div>
    </section>
  );
}

export function LibraryContact() {
  const { shared } = useSiteMessages();
  return (
    <section className={styles.libraryContact}>
      <div className={`shell ${styles.contactShell}`}>
        <div className={styles.contactCard}>
          <h2>{shared.contactTitle}</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
