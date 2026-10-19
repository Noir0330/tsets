"use client";

import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./ServiceDetailPage.module.css";

export type ServicePageKey =
  | "civil-disputes"
  | "administrative-disputes"
  | "criminal-defense"
  | "business-advisory"
  | "retained-advisory";

const serviceOptions = [
  {
    areaIndex: 0,
    href: "/practice-areas/civil-disputes",
    image: "/images/practice-menu-99.jpg",
    key: "civil-disputes",
    labelIndex: 0,
  },
  {
    areaIndex: 1,
    href: "/practice-areas/administrative-disputes",
    image: "/images/practice-menu-100.jpg",
    key: "administrative-disputes",
    labelIndex: 1,
  },
  {
    areaIndex: 2,
    href: "/practice-areas/criminal-defense",
    image: "/images/practice-menu-101.jpg",
    key: "criminal-defense",
    labelIndex: 2,
  },
  {
    areaIndex: 4,
    href: "/practice-areas/business-advisory",
    image: "/images/practice-menu-102.jpg",
    key: "business-advisory",
    labelIndex: 3,
  },
  {
    areaIndex: 5,
    href: "/practice-areas/retained-advisory",
    image: "/images/practice-menu-103.jpg",
    key: "retained-advisory",
    labelIndex: 4,
  },
] as const;

type ServiceDetailPageProps = {
  service: ServicePageKey;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const { common, header, practice, shared } = useSiteMessages();
  const selectedIndex = serviceOptions.findIndex(
    (item) => item.key === service,
  );
  const selected = serviceOptions[selectedIndex];
  const area = practice.areas[selected.areaIndex];

  const content = (() => {
    if (service === "business-advisory") {
      return {
        description: practice.full.oneTimeIntro,
        items: practice.oneTime,
        title: practice.full.oneTimeTitle,
      };
    }
    if (service === "retained-advisory") {
      return {
        description: practice.retained.description,
        items: practice.retained.items,
        title: practice.full.retainedTitle,
      };
    }

    const litigationIndex = serviceOptions
      .slice(0, 3)
      .findIndex((item) => item.key === service);
    const group = practice.litigation[litigationIndex];
    return {
      description: group.description,
      items: group.items,
      title: group.title,
    };
  })();

  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroPanel}`}>
          <div className={styles.heroImage}>
            <Image
              alt={header.practiceLinks[selected.labelIndex]}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
              src={selected.image}
            />
          </div>
          <div className={styles.heroCopy}>
            <Link className={styles.backLink} href="/practice-areas">
              <ArrowLeft aria-hidden="true" size={16} />
              {header.nav.services}
            </Link>
            <p className={styles.serviceNumber}>
              0{selectedIndex + 1} <span>/ 05</span>
            </p>
            <h1>{header.practiceLinks[selected.labelIndex]}</h1>
            <p className={styles.heroText}>{area.text}</p>
            <Link className={styles.heroCta} href="/contact">
              {common.consultation}
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`shell ${styles.contentGrid}`}>
          <aside className={styles.serviceNav}>
            <p>{header.nav.services}</p>
            <nav aria-label={header.nav.services}>
              {serviceOptions.map((item, index) => (
                <Link
                  aria-current={item.key === service ? "page" : undefined}
                  className={item.key === service ? styles.active : undefined}
                  href={item.href}
                  key={item.key}
                >
                  <span>0{index + 1}</span>
                  {header.practiceLinks[item.labelIndex]}
                </Link>
              ))}
            </nav>
          </aside>

          <article className={styles.article}>
            <p className="eyebrow">{practice.full.eyebrow}</p>
            <h2>{content.title}</h2>
            <p className={styles.intro}>{content.description}</p>
            <ul className={styles.serviceList}>
              {content.items.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={`shell ${styles.contactCard}`}>
          <div>
            <p className="eyebrow eyebrowLight">{shared.contactEyebrow}</p>
            <h2>{shared.contactTitle}</h2>
          </div>
          <Link className={styles.contactLink} href="/contact">
            {common.consultation}
            <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
