"use client";

import {
  FileSearch,
  Gavel,
  Globe2,
  Lightbulb,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./practice.module.css";

const areaIcons = [Scale, Lightbulb, Globe2, ShieldCheck, Gavel, FileSearch];

export default function PracticeAreasPage() {
  const { common, practice } = useSiteMessages();
  return (
    <>
      <section className={styles.practice}>
        <div className="shell">
          <div className={styles.heading}>
            <p className="eyebrow eyebrowLight">{practice.hero.eyebrow}</p>
            <h1>{practice.hero.title}</h1>
          </div>
          <div className={styles.grid}>
            {practice.areas.map((area, index) => {
              const Icon = areaIcons[index];
              return (
                <article className={styles.card} key={area.title}>
                  <div className={styles.cardBody}>
                    <Icon aria-hidden="true" size={64} strokeWidth={1.25} />
                    <h2>{area.title}</h2>
                    <p>{area.text}</p>
                  </div>
                  <Link href="/contact">{common.consultation}</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.fullServices}>
        <div className="shell">
          <div className={styles.fullServicesHeading}>
            <div>
              <p className="eyebrow">{practice.full.eyebrow}</p>
              <h2>{practice.full.title}</h2>
            </div>
            <p>{practice.full.intro}</p>
          </div>

          <details className={styles.serviceDetail}>
            <summary>
              <span>01</span>
              <strong>{practice.full.litigationTitle}</strong>
              <i aria-hidden="true" />
            </summary>
            <div className={styles.serviceDetailBody}>
              {practice.litigation.map((group) => (
                <section key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </details>

          <details className={styles.serviceDetail}>
            <summary>
              <span>02</span>
              <strong>{practice.full.oneTimeTitle}</strong>
              <i aria-hidden="true" />
            </summary>
            <div className={styles.serviceDetailBody}>
              <section>
                <h3>{practice.full.oneTimeHeading}</h3>
                <p>{practice.full.oneTimeIntro}</p>
                <ul>
                  {practice.oneTime.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </details>

          <details className={styles.serviceDetail}>
            <summary>
              <span>03</span>
              <strong>{practice.full.retainedTitle}</strong>
              <i aria-hidden="true" />
            </summary>
            <div className={styles.serviceDetailBody}>
              <section>
                <h3>{practice.full.retainedHeading}</h3>
                <p>{practice.retained.description}</p>
                <ul>
                  {practice.retained.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>
          </details>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div className="shell">
          <p className="eyebrow">{practice.faq.eyebrow}</p>
          <h2>{practice.faq.title}</h2>
          {practice.faq.items.map((item, index) => (
            <details key={item.question} open={index === 1}>
              <summary>
                <span className={styles.number}>0{index + 1}</span>
                <span className={styles.question}>{item.question}</span>
                <span className={styles.toggle} />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
