"use client";

import Image from "next/image";
import { Fragment } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { ContactForm } from "./ContactForm";
import styles from "./ThemeSections.module.css";

const clientLogos = [
  {
    alt: "Алко Групп",
    href: "https://alkogroup.com/",
    src: "/images/client-alko-group.svg",
    variant: "light",
  },
  {
    alt: "Практикал Даатгал",
    href: "https://www.practical.mn/",
    src: "/images/client-practical-insurance.png",
    variant: "default",
  },
  {
    alt: "Милая Фүүдс",
    href: "https://www.milaya.mn/",
    src: "/images/client-milaya-foods.png",
    variant: "default",
  },
  {
    alt: "Хөдөө аж ахуйн корпораци ТӨХХК",
    href: "https://www.agricorp.mn/",
    src: "/images/client-agricorp.png",
    variant: "default",
  },
] as const;

export function TrustedLogos() {
  const { shared } = useSiteMessages();
  return (
    <section className={styles.logos} data-motion-scope data-template-only>
      <div className={`shell ${styles.logoRow}`}>
        <p data-reveal="fade">{shared.clients}</p>
        {clientLogos.map((logo, index) => (
          <a
            aria-label={logo.alt}
            className={logo.variant === "light" ? styles.lightLogo : undefined}
            data-reveal="fade"
            data-reveal-delay={(index + 1) * 80}
            href={logo.href}
            key={logo.src}
            rel="noreferrer"
            target="_blank"
          >
            <Image alt={logo.alt} height={42} src={logo.src} width={135} />
          </a>
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
