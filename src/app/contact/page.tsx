import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { LibraryContact } from "@/components/sections/ThemeSections";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Холбоо барих",
  description: "Цэц Партнерстай холбогдож хууль зүйн зөвлөгөөний цаг товлох.",
};

const offices = [
  {
    city: "Төв оффис",
    address: [
      "Улаанбаатар хот",
      "Нарийн хаягийг нийтлэхийн өмнө баталгаажуулна",
    ],
    note: "Уулзалтыг имэйлээр урьдчилан товлоно",
    email: "Lkhagvalawyer@gmail.com",
  },
  {
    city: "Салбар оффис",
    address: [
      "Улаанбаатар хот",
      "Нарийн хаягийг нийтлэхийн өмнө баталгаажуулна",
    ],
    note: "Уулзалтыг имэйлээр урьдчилан товлоно",
    email: "Lkhagvalawyer@gmail.com",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className={styles.title}>
        <h1>Холбоо барих</h1>
      </section>
      <LibraryContact />
      <section className={styles.offices}>
        <div className="shell">
          <h2>Манай оффисууд:</h2>
          {offices.map((office) => (
            <article className={styles.office} key={office.city}>
              <h3>{office.city}</h3>
              <address>
                {office.address[0]}
                <br />
                {office.address[1]}
              </address>
              <div className={styles.contactInfo}>
                <span>{office.note}</span>
                <a href={`mailto:${office.email}`}>{office.email}</a>
              </div>
              <a
                href={`mailto:${office.email}?subject=${encodeURIComponent(`${office.city} — уулзалтын хүсэлт`)}`}
              >
                Уулзалт товлох <ArrowRight aria-hidden="true" size={20} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
