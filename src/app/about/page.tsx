"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TeamMemberCards } from "@/components/sections/TeamMemberCards";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./about.module.css";

function MetricCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = counterRef.current;
    if (!counter) return;

    let frameId = 0;
    let hasPlayed = false;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const play = () => {
      if (reduceMotion) {
        setCount(value);
        return;
      }

      const start = performance.now();
      const duration = 1350;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 4;
        setCount(Math.round(value * easedProgress));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setCount(value);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          hasPlayed = true;
          observer.disconnect();
          play();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(counter);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <strong ref={counterRef}>
      {count}
      {suffix}
    </strong>
  );
}

export default function AboutPage() {
  const { about, common, team } = useSiteMessages();
  const metrics: { label: string; suffix?: string; value: number }[] = [
    { label: about.metrics.founded, value: 2017 },
    { label: about.metrics.branches, value: 2 },
    { label: about.metrics.serviceAreas, value: 3 },
    { label: about.metrics.attorneys, value: 4 },
    { label: about.metrics.assistants, value: 6 },
    { label: about.metrics.awards, suffix: "%+", value: 70 },
  ];

  return (
    <>
      <section className={styles.intro} id="services">
        <div className={`shell ${styles.introGrid}`}>
          <div className={styles.introImage}>
            <Image
              alt={common.founder}
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              src="/images/tsets-zahiral.jpg"
            />
          </div>
          <div className={styles.introCopy}>
            <p className="eyebrow">{common.founderRole}</p>
            <h1>{common.founder}</h1>
            <p>{team.founder.bio}</p>
            <dl className={styles.founderFacts}>
              {team.founder.facts.map((fact) => (
                <div key={fact.term}>
                  <dt>{fact.term}</dt>
                  <dd>{fact.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.metricsSection}>
        <div className="shell">
          <div className={styles.metrics}>
            {metrics.map((metric) => (
              <div className={styles.metric} key={metric.label}>
                <MetricCounter suffix={metric.suffix} value={metric.value} />
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.team} id="team">
        <div className="shell">
          <div className={styles.teamHeading}>
            <h2>{about.team.title}</h2>
          </div>
          <TeamMemberCards />
        </div>
      </section>

      <section className={styles.advantages} id="advantages">
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

      <TrustedLogos />
    </>
  );
}
