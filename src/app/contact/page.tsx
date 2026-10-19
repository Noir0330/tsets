"use client";

import { ArrowRight } from "lucide-react";
import { LibraryContact } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./contact.module.css";

export default function ContactPage() {
  const { contact } = useSiteMessages();
  const email = "Lkhagvalawyer@gmail.com";
  return (
    <>
      <section className={styles.title}>
        <div>
          <h1>{contact.title}</h1>
          <p>
            <a href="mailto:Lkhagvalawyer@gmail.com">Lkhagvalawyer@gmail.com</a>
            <span aria-hidden="true"> · </span>
            <a
              href="https://www.facebook.com/LkhagvaLawyer"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </p>
        </div>
      </section>
      <LibraryContact />
      <section className={styles.offices} data-template-only>
        <div className="shell">
          <h2>{contact.officesTitle}</h2>
          {contact.offices.map((office) => (
            <article className={styles.office} key={office.city}>
              <h3>{office.city}</h3>
              <address>
                {office.lineOne}
                <br />
                {office.lineTwo}
              </address>
              <div className={styles.contactInfo}>
                <span>{office.note}</span>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(`${office.city} — ${contact.appointmentSubject}`)}`}
              >
                {contact.appointment}{" "}
                <ArrowRight aria-hidden="true" size={20} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
