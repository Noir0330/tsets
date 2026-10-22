"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import styles from "./ServiceDetailPage.module.css";

export type ServicePageKey =
  | "litigation"
  | "business-advisory"
  | "retained-advisory";

type ParentServiceKey = "litigation" | "advisory" | "retained";

const parentServiceByRoute: Record<ServicePageKey, ParentServiceKey> = {
  "business-advisory": "advisory",
  litigation: "litigation",
  "retained-advisory": "retained",
};

type ServiceDetailPageProps = {
  service: ServicePageKey;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const { common, practice } = useSiteMessages();
  const parentService = parentServiceByRoute[service];

  const content = (() => {
    if (parentService === "advisory") {
      return {
        description: practice.areas[1].text,
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

    return {
      description: practice.areas[0].text,
      items: null,
      title: practice.full.litigationTitle,
    };
  })();

  const renderServiceCards = (items: readonly string[]) => (
    <ul className={styles.serviceCards}>
      {items.map((item, itemIndex) => (
        <li className={styles.serviceCard} key={item}>
          <span aria-hidden="true" className={styles.cardNumber}>
            {String(itemIndex + 1).padStart(2, "0")}
          </span>
          <span className={styles.cardText}>{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section className={styles.contentSection}>
      <div className={`shell ${styles.contentGrid}`}>
        <header className={styles.pageIntro}>
          <div className={styles.introTitle}>
            <h1>{content.title}</h1>
          </div>
          <div className={styles.introAside}>
            <p>{content.description}</p>
            <Link className={styles.introCta} href="/contact">
              {common.consultation}
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </header>

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
                    <span className={styles.groupQuestion}>{group.title}</span>
                    <span aria-hidden="true" className={styles.groupToggle} />
                  </summary>
                  <div className={styles.groupBody}>
                    <div className={styles.groupBodyInner}>
                      <p>{group.description}</p>
                      {renderServiceCards(group.items)}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          ) : content.items ? (
            renderServiceCards(content.items)
          ) : null}
        </article>
      </div>
    </section>
  );
}
