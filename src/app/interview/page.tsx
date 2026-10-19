"use client";

import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LegalMarquee } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./interview.module.css";

export default function InterviewPage() {
  const { common, interview } = useSiteMessages();
  const sourceUrl = "https://business.mn/?p=47642";
  return (
    <>
      <header className={styles.hero}>
        <div className={styles.heroImage}>
          <Image
            alt={interview.imageAlt}
            fill
            priority
            sizes="(max-width: 850px) 100vw, 64vw"
            src="/images/tsets-lkhagvasuren-interview.jpg"
          />
          <div className={styles.photoCaption}>
            <strong>{common.founder}</strong>
            <span>{common.founderRole}</span>
          </div>
        </div>

        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Business.mn · {interview.publishedAt}</p>
            <h1>{interview.title}</h1>
            <p className={styles.intro}>{interview.intro}</p>
            <div className={styles.heroActions}>
              <a
                className="button buttonGold"
                href={sourceUrl}
                rel="noreferrer"
                target="_blank"
              >
                {interview.source}
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <Link className="button buttonOutline" href="/contact">
                {common.consultation}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <article className={styles.article}>
        <div className={`shell ${styles.articleGrid}`}>
          <aside>
            <p>{interview.contents}</p>
            <nav aria-label={interview.contentsLabel}>
              {interview.sections.map((section, index) => (
                <a href={`#interview-${index + 1}`} key={section.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className={styles.content}>
            {interview.sections.map((section, index) => (
              <section id={`interview-${index + 1}`} key={section.title}>
                <p className={styles.sectionNumber}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.quote ? (
                  <blockquote>
                    <Quote aria-hidden="true" size={28} strokeWidth={1.3} />
                    <p>{section.quote}</p>
                    <cite>{common.founder}</cite>
                  </blockquote>
                ) : null}
              </section>
            ))}

            <div className={styles.note}>
              <strong>{interview.noteTitle}</strong>
              <p>{interview.note}</p>
            </div>
          </div>
        </div>
      </article>

      <LegalMarquee />
    </>
  );
}
