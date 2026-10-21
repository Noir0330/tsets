"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./ServiceDetailPage.module.css";

export type ServicePageKey =
  | "litigation"
  | "business-advisory"
  | "retained-advisory";

type ParentServiceKey = "litigation" | "advisory" | "retained";

const serviceOptions = [
  {
    areaIndex: 0,
    image: "/images/practice-menu-99.jpg",
    key: "litigation",
    labelIndex: 0,
  },
  {
    areaIndex: 1,
    image: "/images/practice-menu-102.jpg",
    key: "advisory",
    labelIndex: 1,
  },
  {
    areaIndex: 2,
    image: "/images/practice-menu-103.jpg",
    key: "retained",
    labelIndex: 2,
  },
] as const;

const parentServiceByRoute: Record<ServicePageKey, ParentServiceKey> = {
  "business-advisory": "advisory",
  litigation: "litigation",
  "retained-advisory": "retained",
};

type ServiceDetailPageProps = {
  service: ServicePageKey;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const { common, header, practice } = useSiteMessages();
  const parentService = parentServiceByRoute[service];
  const selectedIndex = serviceOptions.findIndex(
    (item) => item.key === parentService,
  );
  const selected = serviceOptions[selectedIndex];
  const area = practice.areas[selected.areaIndex];

  const content = (() => {
    if (parentService === "advisory") {
      return {
        description: null,
        items: practice.oneTime,
        title: practice.full.oneTimeTitle,
      };
    }
    if (parentService === "retained") {
      return {
        description: practice.retained.description,
        items: practice.retained.items,
        title: practice.full.retainedTitle,
      };
    }

    return null;
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
            <p className={styles.serviceNumber}>
              0{selectedIndex + 1} <span>/ 03</span>
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
          <article className={styles.article}>
            {parentService === "litigation" ? (
              <div className={styles.serviceAccordions}>
                {practice.litigation.map((group, groupIndex) => (
                  <details
                    className={styles.litigationGroup}
                    key={group.title}
                    open={groupIndex === 0}
                  >
                    <summary className={styles.groupSummary}>
                      <span className={styles.groupNumber}>
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.groupQuestion}>
                        {group.title}
                      </span>
                      <span aria-hidden="true" className={styles.groupToggle} />
                    </summary>
                    <div className={styles.groupBody}>
                      <div className={styles.groupBodyInner}>
                        <p>{group.description}</p>
                        <ul className={styles.groupList}>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <div className={styles.serviceAccordions}>
                <details className={styles.litigationGroup} open>
                  <summary className={styles.groupSummary}>
                    <span className={styles.groupNumber}>01</span>
                    <span className={styles.groupQuestion}>
                      {content?.title}
                    </span>
                    <span aria-hidden="true" className={styles.groupToggle} />
                  </summary>
                  <div className={styles.groupBody}>
                    <div className={styles.groupBodyInner}>
                      {content?.description ? (
                        <p>{content.description}</p>
                      ) : null}
                      <ul className={styles.groupList}>
                        {content?.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            )}
          </article>
        </div>
      </section>
    </>
  );
}
