"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LegalMarquee,
  LibraryContact,
} from "@/components/sections/ThemeSections";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./team.module.css";

const teamImages = [
  "/images/emily-harper.jpg",
  "/images/sophia-lee.jpg",
  "/images/james-carter.jpg",
  "/images/olivia-grant.jpg",
] as const;

export default function TeamPage() {
  const { common, team } = useSiteMessages();
  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroImage}>
            <Image
              alt={team.hero.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/team-hero.jpg"
            />
          </div>
          <div className={styles.heroCopy}>
            <p className="eyebrow">{team.hero.eyebrow}</p>
            <h1>{team.hero.title}</h1>
            <p>{team.hero.text}</p>
            <Link className="button" href="/contact">
              {common.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.founderProfile}>
        <div className={`shell ${styles.founderGrid}`}>
          <div>
            <p className="eyebrow">{common.founderRole}</p>
            <h2>{common.founder}</h2>
            <p>{team.founder.bio}</p>
            <Link href="/interview">{team.founder.readInterview}</Link>
          </div>
          <dl>
            {team.founder.facts.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.team}>
        <div className="shell">
          <div className={styles.teamLead}>
            <p>{team.teamNote}</p>
          </div>
          <div className={styles.teamGrid} data-template-only>
            {team.groups.map((attorney, index) => (
              <article className={styles.person} key={attorney.name}>
                <div className={styles.teamImage}>
                  <Image
                    alt={attorney.name}
                    fill
                    sizes="(max-width: 520px) 100vw, 25vw"
                    src={teamImages[index]}
                  />
                </div>
                <h2>{attorney.name}</h2>
                <p>{attorney.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LegalMarquee />

      <section className={styles.awards}>
        <div className="shell">
          <p className="eyebrow">{team.awards.eyebrow}</p>
          <h2>{team.awards.title}</h2>
          {team.awards.items.map((award) => (
            <div className={styles.awardRow} key={award[0]}>
              {award.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <LibraryContact />
    </>
  );
}
