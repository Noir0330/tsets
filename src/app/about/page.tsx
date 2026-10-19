"use client";

import Image from "next/image";
import Link from "next/link";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./about.module.css";

export default function AboutPage() {
  const { about, common } = useSiteMessages();
  return (
    <>
      <section className={styles.intro} id="services">
        <div className={`shell ${styles.introGrid}`}>
          <div className={styles.introImage}>
            <Image
              alt={about.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              src="/images/about-meeting.jpg"
            />
          </div>
          <div className={styles.introCopy}>
            <p className="eyebrow">{about.hero.eyebrow}</p>
            <h1>{about.hero.title}</h1>
            <p>{about.hero.text}</p>
            <Link href="/contact">{about.hero.cta}</Link>
            <h2>{about.hero.principlesTitle}</h2>
            <p>{about.hero.principlesText}</p>
          </div>
        </div>
      </section>

      <TrustedLogos />

      <section className={styles.leadership} data-template-only>
        <div className={`shell ${styles.leadGrid}`}>
          <div className={styles.leadTitle}>
            <p className="eyebrow">{about.leadership.eyebrow}</p>
            <h2>{about.leadership.title}</h2>
            <p>{about.leadership.text}</p>
          </div>
          <article className={styles.person}>
            <div className={styles.personImage}>
              <Image
                alt={about.leadership.litigationAlt}
                fill
                sizes="400px"
                src="/images/elizabeth-carter.jpg"
              />
            </div>
            <h3>{about.leadership.litigationTitle}</h3>
            <p>{about.leadership.litigationText}</p>
          </article>
          <article className={styles.person}>
            <div className={styles.personImage}>
              <Image
                alt={about.leadership.advisoryAlt}
                fill
                sizes="400px"
                src="/images/sophia-hartman.jpg"
              />
            </div>
            <h3>{about.leadership.advisoryTitle}</h3>
            <p>{about.leadership.advisoryText}</p>
          </article>
        </div>
      </section>

      <section className={styles.advantages}>
        <div className={`shell ${styles.advantagesGrid}`}>
          <div>
            <p className="eyebrow">{about.advantages.eyebrow}</p>
            <h2>{about.advantages.title}</h2>
            <p>{about.advantages.intro}</p>
          </div>
          <ol>
            {about.advantages.items.map((advantage, index) => (
              <li key={advantage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{advantage}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.ribbons} aria-label={about.ribbon}>
        <div className={styles.ribbon}>{about.ribbon}</div>
        <div className={`${styles.ribbon} ${styles.ribbonGold}`}>
          {about.ribbon}
        </div>
      </section>

      <section className={styles.results}>
        <div className="shell">
          <div className={styles.metricsTop}>
            <div>
              <h2>{about.metrics.title}</h2>
              <p>{about.metrics.text}</p>
            </div>
            <div className={styles.metric}>
              <strong>2017</strong>
              <span>{about.metrics.founded}</span>
            </div>
            <div className={styles.metric}>
              <strong>2</strong>
              <span>{about.metrics.branches}</span>
            </div>
          </div>
          <div className={styles.metricGrid}>
            <div>
              <strong>3</strong>
              <span>{about.metrics.serviceAreas}</span>
            </div>
            <div>
              <strong>4</strong>
              <span>{about.metrics.attorneys}</span>
            </div>
            <div>
              <strong>6</strong>
              <span>{about.metrics.assistants}</span>
            </div>
            <div>
              <strong>70%+</strong>
              <span>{about.metrics.awards}</span>
            </div>
          </div>

          <div className={styles.testimonial} id="testimonials">
            <div className={styles.testimonialImage}>
              <Image
                alt={about.testimonial.imageAlt}
                fill
                sizes="(max-width: 850px) 100vw, 40vw"
                src="/images/client-henry.jpg"
              />
            </div>
            <div className={styles.quote}>
              <blockquote>{about.testimonial.quote}</blockquote>
              <div>
                <strong>{common.founder}</strong>
                <span>{common.founderRole}</span>
              </div>
            </div>
          </div>

          <div className={styles.faqGrid}>
            <div>
              <p className="eyebrow">{about.faq.eyebrow}</p>
              <h2>{about.faq.title}</h2>
              <p>{about.faq.intro}</p>
            </div>
            <div className={styles.faqs}>
              {about.faq.items.map((item, index) => (
                <details key={item.question} open={index === 1}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
