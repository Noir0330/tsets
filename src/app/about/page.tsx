import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TrustedLogos } from "@/components/sections/ThemeSections";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Бидний тухай",
  description: "Цэц Партнерс хуулийн фирмийн түүх, зарчим, давуу тал.",
};

const faqs = [
  [
    "Хамтын ажиллагааг хэрхэн эхлүүлэх вэ?",
    "Имэйлээр асуудлынхаа товч мэдээллийг илгээвэл бид анхны уулзалтын цаг, тохирох оффисыг урьдчилан тохирно.",
  ],
  [
    "Ямар төрлийн үйлчилгээ үзүүлдэг вэ?",
    "Шүүхийн шатны өмгөөлөл, төлөөлөл, нэг удаагийн зөвлөгөө болон тогтмол хууль зүйн зөвлөх үйлчилгээг үзүүлдэг.",
  ],
  [
    "Багийн одоогийн бүрэлдэхүүн хэд вэ?",
    "Танилцуулгад 12 хуульч гэж, харин 2025 оны ярилцлагад 4 өмгөөлөгч, 6 хуульчийн туслах гэж дурдсан тул нийтлэхийн өмнө одоогийн бүрэлдэхүүнийг баталгаажуулна.",
  ],
  [
    "Гадаадын хөрөнгө оруулагчдад зөвлөгөө өгдөг үү?",
    "Тийм. Эрх зүйн орчин, баримт бичиг, төрийн байгууллагын төлөөлөл болон хөрөнгө оруулалтын маргаанд дэмжлэг үзүүлдэг.",
  ],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className={styles.intro} id="services">
        <div className={`shell ${styles.introGrid}`}>
          <div className={styles.introImage}>
            <Image
              alt="Хуульчид үйлчлүүлэгчтэй уулзаж буй нь"
              fill
              priority
              sizes="(max-width: 850px) 100vw, 50vw"
              src="/images/about-meeting.jpg"
            />
          </div>
          <div className={styles.introCopy}>
            <p className="eyebrow">2017 оноос хойш</p>
            <h1>
              Эрх ашгийг хамгаалж,
              <br />
              зөв шийдэлд чиглүүлнэ
            </h1>
            <p>
              Өмгөөллийн “Цэц Партнерс” хуулийн фирм нь гадаад, дотоодын иргэн,
              хуулийн этгээдэд өмгөөлөл, хууль зүйн туслалцааг тогтмол үзүүлэн
              ажиллаж байна.
            </p>
            <Link href="/contact">Зөвлөгөө авах хүсэлт илгээх</Link>
            <h2>Бидний баримтлах зарчим</h2>
            <p>
              Үйлчлүүлэгчийн эрх, ашиг сонирхлыг тэргүүнд тавьж, хуулийн хүрээнд
              найдвартай хамгаалах, үйлчилгээний чанар, өмгөөлөгчийн чин үнэнч
              байдал, мэдээллийн нууцлалыг эрхэмлэнэ.
            </p>
          </div>
        </div>
      </section>

      <TrustedLogos />

      <section className={styles.leadership}>
        <div className={`shell ${styles.leadGrid}`}>
          <div className={styles.leadTitle}>
            <p className="eyebrow">Мэргэжлийн хамтын ажиллагаа</p>
            <h2>
              Туршлага дээр
              <br />
              тулгуурласан баг
            </h2>
            <p>Онол, хууль хэрэглээг хослуулсан нэгдмэл үйлчилгээ.</p>
          </div>
          <article className={styles.person}>
            <div className={styles.personImage}>
              <Image
                alt="Шүүхийн өмгөөллийн баг"
                fill
                sizes="400px"
                src="/images/elizabeth-carter.jpg"
              />
            </div>
            <h3>Өмгөөлөгчдийн баг</h3>
            <p>Шүүхийн өмгөөлөл, төлөөлөл</p>
          </article>
          <article className={styles.person}>
            <div className={styles.personImage}>
              <Image
                alt="Хууль зүйн зөвлөх баг"
                fill
                sizes="400px"
                src="/images/sophia-hartman.jpg"
              />
            </div>
            <h3>Зөвлөх үйлчилгээний баг</h3>
            <p>Гэрээ, бизнес, хөрөнгө оруулалт</p>
          </article>
        </div>
      </section>

      <section
        className={styles.ribbons}
        aria-label="Эрх ашгийг мэргэжлийн түвшинд хамгаална"
      >
        <div className={styles.ribbon}>
          Эрх ашгийг мэргэжлийн түвшинд хамгаална
        </div>
        <div className={`${styles.ribbon} ${styles.ribbonGold}`}>
          Эрх ашгийг мэргэжлийн түвшинд хамгаална
        </div>
      </section>

      <section className={styles.results}>
        <div className="shell">
          <div className={styles.metricsTop}>
            <div>
              <h2>Цэц Партнерсийн тухай тоон мэдээлэл</h2>
              <p>
                Танилцуулга болон 2025 оны 6 дугаар сарын ярилцлагад дурдсан
                мэдээллийг огнооны хамт харууллаа.
              </p>
            </div>
            <div className={styles.metric}>
              <strong>2017</strong>
              <span>Үүсгэн байгуулагдсан</span>
            </div>
            <div className={styles.metric}>
              <strong>2</strong>
              <span>Улаанбаатар дахь салбар</span>
            </div>
          </div>
          <div className={styles.metricGrid}>
            <div>
              <strong>3</strong>
              <span>Үйлчилгээний үндсэн чиглэл</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Өмгөөлөгч · 2025 оны ярилцлага</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Хуульчийн туслах · 2025 оны ярилцлага</span>
            </div>
            <div>
              <strong>70%+</strong>
              <span>Судалгаанд нөхөн төлбөр олгосон шийдвэр</span>
            </div>
          </div>

          <div className={styles.testimonial} id="testimonials">
            <div className={styles.testimonialImage}>
              <Image
                alt="Хууль зүйн зөвлөгөө авч буй үйлчлүүлэгч"
                fill
                sizes="(max-width: 850px) 100vw, 40vw"
                src="/images/client-henry.jpg"
              />
            </div>
            <div className={styles.quote}>
              <blockquote>
                Бид өдөр тутмын бизнесийн эрсдэл, томоохон гэрээ хэлцлийн
                тодорхойгүй байдлыг урьдчилан тооцож, маргаан үүсэх асуудал
                бүрийн шийдлийг гэрээнд тодорхой тусгахыг чухалчилдаг.
              </blockquote>
              <div>
                <strong>Г. Лхагвасүрэн</strong>
                <span>Үүсгэн байгуулагч, өмгөөлөгч</span>
              </div>
            </div>
          </div>

          <div className={styles.faqGrid}>
            <div>
              <p className="eyebrow">Танд хэрэгтэй мэдээлэл</p>
              <h2>Түгээмэл асуултууд</h2>
              <p>
                Үйлчилгээний хүрээ болон хамтын ажиллагааны талаар товч
                хариултуудтай танилцана уу.
              </p>
            </div>
            <div className={styles.faqs}>
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 1}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
