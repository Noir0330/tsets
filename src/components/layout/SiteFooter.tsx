"use client";

import { Facebook, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const { footer, header } = useSiteMessages();
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label={header.logoLabel}>
            <Image
              alt="Tsets Partners"
              height={1254}
              src="/images/tsets-logo-transparent.png"
              width={1254}
            />
          </Link>
          <p>{footer.description}</p>
        </div>

        <div>
          <h3>{footer.contactTitle}</h3>
          <a href="mailto:Lkhagvalawyer@gmail.com">Lkhagvalawyer@gmail.com</a>
          <address>
            {footer.city}
            <br />
            {footer.offices}
            <br />
            {footer.appointment}
          </address>
        </div>

        <div>
          <h3>{footer.linksTitle}</h3>
          <nav className={styles.links} aria-label={footer.linksLabel}>
            <Link href="/">{header.nav.home}</Link>
            <Link href="/practice-areas/litigation">{header.nav.services}</Link>
            <Link href="/about">{header.nav.about}</Link>
            <Link data-template-only href="/team">
              {header.nav.team}
            </Link>
            <Link href="/interview">{header.nav.interview}</Link>
            <Link href="/contact">{header.nav.contact}</Link>
          </nav>
        </div>

        <div>
          <h3>{footer.socialTitle}</h3>
          <div className={styles.socials}>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/LkhagvaLawyer"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook aria-hidden="true" size={15} />
            </a>
            <a
              aria-label={footer.emailLabel}
              href="mailto:Lkhagvalawyer@gmail.com"
            >
              <Mail aria-hidden="true" size={15} />
            </a>
            <a
              aria-label={footer.interviewLabel}
              href="https://business.mn/?p=47642"
              rel="noreferrer"
              target="_blank"
            >
              B
            </a>
            <a aria-label={footer.homeLabel} href="/">
              ◉
            </a>
          </div>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <p>{footer.copyright}</p>
        <p>{footer.services}</p>
      </div>
    </footer>
  );
}
