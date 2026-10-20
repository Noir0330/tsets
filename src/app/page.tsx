"use client";

import { Gavel, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  LegalMarquee,
  TrustedLogos,
} from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./page.module.css";

const galleryImages = [
  "/images/litigation.jpg",
  "/images/trusted-counsel.jpg",
  "/images/business-advice.jpg",
  "/images/ongoing-counsel.jpg",
] as const;

const heroTitleCharacters = Array.from("Tsets Partners", (character, index) => [
  `hero-title-${index}`,
  character === " " ? "\u00a0" : character,
]);

export default function HomePage() {
  const { common, home, shared } = useSiteMessages();
  return (
    <>
      <section className={styles.hero} data-motion-scope>
        <div className={styles.heroImage} data-reveal="up">
          <Image
            alt={home.hero.imageAlt}
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
            src="/images/tsets-zahiral.jpg"
          />
        </div>
        <div className={styles.heroCopy}>
          <h1 data-reveal="up" data-reveal-delay="100">
            {home.hero.before}
            {home.hero.beforeSeparator}
            <u>{home.hero.emphasis}</u>
            {home.hero.afterSeparator}
            {home.hero.after}
          </h1>
          <p data-reveal="popup" data-reveal-delay="400">
            <Gavel aria-hidden="true" size={31} /> {home.hero.tagline}
          </p>
        </div>
        <div className={styles.heroTitle} data-reveal="chars">
          {heroTitleCharacters.map(([id, character], index) => (
            <span
              className="motionChar"
              key={id}
              style={{ "--char-index": index } as CSSProperties}
            >
              {character}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.strengths} data-motion-scope>
        <div className="shell">
          <div className={styles.strengthIntro}>
            <div data-reveal="up">
              <p className="eyebrow">{home.strengthsIntro.eyebrow}</p>
              <h2>{home.strengthsIntro.title}</h2>
            </div>
            <p data-reveal="up" data-reveal-delay="100">
              {home.strengthsIntro.text}
            </p>
          </div>
          <div className={styles.strengthGrid}>
            {home.strengths.map((item, index) => (
              <article
                data-reveal="up"
                data-reveal-delay={index * 100}
                key={item.title}
              >
                <span>{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustedLogos />

      <section className={styles.expertise} data-motion-scope>
        <div className={`shell ${styles.expertiseGrid}`}>
          <div className={styles.expertiseImage} data-reveal="up">
            <Image
              alt={home.expertise.imageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              src="/images/law-firm-consultation.jpg"
            />
          </div>
          <div data-reveal="up" data-reveal-delay="100">
            <p className="eyebrow">{home.expertise.eyebrow}</p>
            <h2>{home.expertise.title}</h2>
            <p>{home.expertise.text}</p>
          </div>
        </div>
      </section>

      <LegalMarquee />

      <section className={styles.darkShowcase} data-motion-scope id="news">
        <div className="shell">
          <div className={styles.darkIntro}>
            <h2 data-reveal="up">{home.showcase.title}</h2>
            <p data-reveal="up" data-reveal-delay="100">
              {home.showcase.text}
            </p>
          </div>
        </div>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <div data-reveal="up" data-reveal-delay={index * 100} key={image}>
              <Image alt="" fill sizes="25vw" src={image} />
              <span>{home.showcase.gallery[index]}</span>
            </div>
          ))}
        </div>

        <div className={`shell ${styles.testimonial}`} data-reveal="up">
          <Quote aria-hidden="true" size={38} strokeWidth={1} />
          <div className={styles.stars}>★★★★★</div>
          <blockquote>{home.showcase.quote}</blockquote>
          <strong>{common.founder}</strong>
          <span>
            <Link href="/interview">{home.showcase.quoteMeta}</Link>
          </span>
        </div>

        <div className={`shell ${styles.leaders}`} data-template-only>
          <div data-reveal="up">
            <p className="eyebrow eyebrowLight">{home.leaders.eyebrow}</p>
            <h2>{home.leaders.title}</h2>
            <p>{home.leaders.text}</p>
          </div>
          <article data-reveal="up" data-reveal-delay="150">
            <Image
              alt={home.leaders.litigationAlt}
              fill
              sizes="300px"
              src="/images/elizabeth-carter.jpg"
            />
            <div>
              <strong>{home.leaders.litigationTitle}</strong>
              <span>{home.leaders.litigationText}</span>
            </div>
          </article>
          <article data-reveal="up" data-reveal-delay="250">
            <Image
              alt={home.leaders.advisoryAlt}
              fill
              sizes="300px"
              src="/images/sophia-hartman.jpg"
            />
            <div>
              <strong>{home.leaders.advisoryTitle}</strong>
              <span>{home.leaders.advisoryText}</span>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.homeContact} data-motion-scope>
        <div className={`shell ${styles.homeContactGrid}`}>
          <div className={styles.homeContactImage} data-reveal="up">
            <Image
              alt={home.contactImageAlt}
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              src="/images/contact-attorney.jpg"
            />
          </div>
          <div
            className={styles.homeContactForm}
            data-reveal="up"
            data-reveal-delay="100"
          >
            <p className="eyebrow">{shared.contactEyebrow}</p>
            <h2>{shared.contactTitle}</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
