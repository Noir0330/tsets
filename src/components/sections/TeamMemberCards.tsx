"use client";

import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { teamMembers } from "@/lib/team-members";
import styles from "./TeamMemberCards.module.css";

export function TeamMemberCards() {
  const { team } = useSiteMessages();

  return (
    <div className={styles.grid}>
      {teamMembers.map((member) => {
        const profile = team.members[member.slug];

        return (
          <article className={styles.card} key={member.slug}>
            <Link
              aria-label={`${profile.name}: ${team.members.viewProfile}`}
              className={styles.imageLink}
              href={`/team/${member.slug}`}
            >
              <Image
                alt=""
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 33vw"
                src={member.image}
              />
            </Link>
            <div className={styles.content}>
              <h3>{profile.name}</h3>
              <p>{profile.role}</p>
              <Link
                className={styles.profileLink}
                href={`/team/${member.slug}`}
              >
                {team.members.viewProfile}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
