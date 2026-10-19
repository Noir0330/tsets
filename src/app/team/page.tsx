import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  LegalMarquee,
  LibraryContact,
} from "@/components/sections/ThemeSections";
import { attorneys } from "@/data/site";
import styles from "./team.module.css";

export const metadata: Metadata = {
  title: "Манай баг",
  description: "Цэц Партнерсийн өмгөөлөгч, хууль зүйн зөвлөх баг.",
};

const awards = [
  ["01.", "Үйлчлүүлэгчийн сэтгэл ханамж", "Зарчим", "Нэн тэргүүнд", "Тууштай"],
  ["02.", "Гадаад хөрөнгө оруулагч", "Туршлага", "Эрхийн хамгаалалт", "Үр дүн"],
  ["03.", "Мэдээллийн нууцлал", "Өндөр стандарт", "Итгэлцэл", "Ёс зүй"],
  ["04.", "Тогтвортой хүний нөөц", "Хөгжил", "Мэргэшил", "Урт хугацаа"],
] as const;

export default function TeamPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`shell ${styles.heroGrid}`}>
          <div className={styles.heroImage}>
            <Image
              alt="Цэц Партнерсийн мэргэжлийн хуульчдын баг"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              src="/images/team-hero.jpg"
            />
          </div>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Мэргэжлийн хуульчдын баг</p>
            <h1>
              Туршлага, судалгаа,
              <br />
              хариуцлагыг нэгтгэнэ
            </h1>
            <p>
              Үүсгэн байгуулагч, өмгөөлөгч Г. Лхагвасүрэн нь даатгалын эрх зүйд
              мэргэшсэн бөгөөд бизнесийн удирдлагын магистр, хууль зүйн докторын
              судалгааны ажлаа үргэлжлүүлж байна.
            </p>
            <Link className="button" href="/contact">
              Холбоо барих
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.team}>
        <div className="shell">
          <div className={styles.teamLead}>
            <p>
              Танилцуулгад 12 хуульчийн бүрэлдэхүүнтэй гэж дурдсан бол 2025 оны
              6 дугаар сарын ярилцлагад 4 өмгөөлөгч, 6 хуульчийн туслахтай гэж
              тэмдэглэсэн. Одоогийн нэр бүхий танилцуулгыг баталгаажуулсны дараа
              энэ хэсэгт шууд нийтэлнэ.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {attorneys.map((attorney) => (
              <article className={styles.person} key={attorney.name}>
                <div className={styles.teamImage}>
                  <Image
                    alt={attorney.name}
                    fill
                    sizes="(max-width: 520px) 100vw, 25vw"
                    src={attorney.image}
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
          <p className="eyebrow">Бидний ажиллах зарчим</p>
          <h2>Манай багийн давуу талууд</h2>
          {awards.map((award) => (
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
