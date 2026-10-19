import { Gavel, Quote } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  LegalMarquee,
  TrustedLogos,
} from "@/components/sections/ThemeSections";
import styles from "./page.module.css";

const strengths = [
  {
    kicker: "Үйлчлүүлэгч нэгдүгээрт",
    title: "Найдвартай хамгаалалт",
    text: "Үйлчлүүлэгчийн эрх, ашиг сонирхлыг тэргүүнд тавьж, хуулийн хүрээнд тууштай хамгаална.",
  },
  {
    kicker: "Мэргэшсэн туршлага",
    title: "Чанартай үйлчилгээ",
    text: "Онол, хууль хэрэглээний өндөр түвшинд бэлтгэгдсэн хуульчдын баг бодит шийдэл боловсруулна.",
  },
  {
    kicker: "Чин үнэнч зарчим",
    title: "Нууцлал ба итгэл",
    text: "Харилцагчийн мэдээллийн нууцлалыг өндөр түвшинд хадгалж, урт хугацааны итгэлцлийг эрхэмлэнэ.",
  },
] as const;

const gallery = [
  ["/images/legal-strategy.jpg", "Шүүхийн өмгөөлөл"],
  ["/images/trusted-counsel.jpg", "Гэрээ ба хэлцэл"],
  ["/images/client-advocates.jpg", "Бизнесийн зөвлөгөө"],
  ["/images/expert-guidance.jpg", "Тогтмол зөвлөх үйлчилгээ"],
] as const;

const heroTitleCharacters = Array.from("Tsets Partners", (character, index) => [
  `hero-title-${index}`,
  character === " " ? "\u00a0" : character,
]);

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} data-motion-scope>
        <div className={styles.heroImage} data-reveal="up">
          <Image
            alt="Хууль зүйн мэргэжлийн зөвлөгөө"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
            src="/images/law-firm-hero.jpg"
          />
        </div>
        <div className={styles.heroCopy}>
          <h1 data-reveal="up" data-reveal-delay="100">
            Бид эрсдэлийг <u>урьдчилан тооцож</u>, таны эрх ашгийг тууштай
            хамгаална
          </h1>
          <p data-reveal="popup" data-reveal-delay="400">
            <Gavel aria-hidden="true" size={31} /> Хуулийн хүрээнд найдвартай
            хамгаална
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
              <p className="eyebrow">Бидний үнэт зүйл</p>
              <h2>
                Манай давуу тал,
                <br />
                таны баталгаа
              </h2>
            </div>
            <p data-reveal="up" data-reveal-delay="100">
              2017 оноос хойш бид үйлчлүүлэгчийн эрх, ашиг сонирхлыг тэргүүнд
              тавьж, чанартай үйлчилгээ, мэргэжлийн ёс зүй, нууцлалыг үйл
              ажиллагааныхаа үндсэн зарчим болгож ирсэн.
            </p>
          </div>
          <div className={styles.strengthGrid}>
            {strengths.map((item, index) => (
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
              alt="Үйлчлүүлэгчид зөвлөгөө өгч буй хуульч"
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              src="/images/law-firm-consultation.jpg"
            />
          </div>
          <div data-reveal="up" data-reveal-delay="100">
            <p className="eyebrow">Туршлага ба хариуцлага</p>
            <h2>Мэргэжлийн зөвлөгөөгөөр эрсдэлийг удирдана</h2>
            <p>
              “Цэц Партнерс” нь шүүхийн өмгөөлөл, нэг удаагийн хууль зүйн
              зөвлөгөө, тогтмол зөвлөх үйлчилгээг иргэн, байгууллагын хэрэгцээнд
              нийцүүлэн үзүүлдэг.
            </p>
          </div>
        </div>
      </section>

      <LegalMarquee />

      <section className={styles.darkShowcase} data-motion-scope id="news">
        <div className="shell">
          <div className={styles.darkIntro}>
            <h2 data-reveal="up">
              Үйлчлүүлэгч бүрд тохирсон хууль зүйн шийдэл.
            </h2>
            <p data-reveal="up" data-reveal-delay="100">
              Бид өдөр тутмын бизнесийн эрсдэл болон томоохон гэрээ хэлцлийн
              тодорхойгүй байдлыг урьдчилан тооцож, болзошгүй маргааны шийдлийг
              гэрээнд тодорхой тусгахыг чухалчилдаг.
            </p>
          </div>
        </div>
        <div className={styles.gallery}>
          {gallery.map(([image, label], index) => (
            <div data-reveal="up" data-reveal-delay={index * 100} key={label}>
              <Image alt="" fill sizes="25vw" src={image} />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className={`shell ${styles.testimonial}`} data-reveal="up">
          <Quote aria-hidden="true" size={38} strokeWidth={1} />
          <div className={styles.stars}>★★★★★</div>
          <blockquote>
            Хуулийн үйлчилгээ бол гурван нүүдлийн дараах эрсдэлийг урьдчилан
            харуулах стратегийн хэрэгсэл юм.
          </blockquote>
          <strong>Г. Лхагвасүрэн</strong>
          <span>
            <a
              href="https://business.mn/?p=47642"
              rel="noreferrer"
              target="_blank"
            >
              Үүсгэн байгуулагч, өмгөөлөгч · 2025.06.10 · Бүрэн унших
            </a>
          </span>
        </div>

        <div className={`shell ${styles.leaders}`}>
          <div data-reveal="up">
            <p className="eyebrow eyebrowLight">Манай мэргэжлийн баг</p>
            <h2>
              Итгэл даах
              <br />
              хуульчид
            </h2>
            <p>Хэрэг маргаан, зөвлөх үйлчилгээнд мэргэшсэн баг.</p>
          </div>
          <article data-reveal="up" data-reveal-delay="150">
            <Image
              alt="Өмгөөлөгчдийн баг"
              fill
              sizes="300px"
              src="/images/elizabeth-carter.jpg"
            />
            <div>
              <strong>Өмгөөлөгчдийн баг</strong>
              <span>Шүүхийн өмгөөлөл, төлөөлөл</span>
            </div>
          </article>
          <article data-reveal="up" data-reveal-delay="250">
            <Image
              alt="Хууль зүйн зөвлөх баг"
              fill
              sizes="300px"
              src="/images/sophia-hartman.jpg"
            />
            <div>
              <strong>Хууль зүйн зөвлөх баг</strong>
              <span>Бизнес ба тогтмол зөвлөх үйлчилгээ</span>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.homeContact} data-motion-scope>
        <div className={`shell ${styles.homeContactGrid}`}>
          <div className={styles.homeContactImage} data-reveal="up">
            <Image
              alt="Цэц Партнерсийн хууль зүйн зөвлөгөө"
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
            <p className="eyebrow">Бидэнтэй холбогдоорой</p>
            <h2>
              Хууль зүйн зөвлөгөө
              <br />
              хэрэгтэй юу?
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
