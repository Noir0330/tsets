import {
  FileSearch,
  Gavel,
  Globe2,
  Lightbulb,
  Scale,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./practice.module.css";

export const metadata: Metadata = {
  title: "Үйлчилгээ",
  description:
    "Цэц Партнерсийн өмгөөлөл, төлөөлөл, нэг удаагийн болон тогтмол хууль зүйн зөвлөх үйлчилгээ.",
};

const areas = [
  {
    icon: Scale,
    title: "Иргэний хэрэг, маргаан",
    text: "Гэрээ, компани, хувьцаа, зээл, барьцаа, даатгал, оюуны өмч, нэр хүнд болон хөрөнгө оруулалтын маргаанд төлөөлнө.",
  },
  {
    icon: Lightbulb,
    title: "Захиргааны хэрэг, маргаан",
    text: "Ашигт малтмалын тусгай зөвшөөрөл, газар, бизнесийн лиценз, татвар, тендер болон өрсөлдөөний маргаанд ажиллана.",
  },
  {
    icon: Globe2,
    title: "Эрүүгийн хэрэгт өмгөөлөл",
    text: "Эрүүгийн хэрэг хянан шийдвэрлэх бүх шатанд сэжигтэн, яллагдагч, шүүгдэгч болон хохирогчийн өмгөөлөгчөөр оролцоно.",
  },
  {
    icon: ShieldCheck,
    title: "Шийдвэр гүйцэтгэл ба арбитр",
    text: "Шүүхийн шийдвэр гүйцэтгэх ажиллагаа, арбитр болон бусад байгууллагад үйлчлүүлэгчийг төлөөлнө.",
  },
  {
    icon: Gavel,
    title: "Нэг удаагийн хууль зүйн зөвлөгөө",
    text: "Компани, хөрөнгө, гэрээ, хөрөнгө оруулалт, дампуурал болон тусгай зөвшөөрлийн асуудлаар баримт бичиг боловсруулна.",
  },
  {
    icon: FileSearch,
    title: "Тогтмол хууль зүйн зөвлөх",
    text: "Компанийн өдөр тутмын үйл ажиллагаа, дотоод журам, гэрээ, төлөөлөл болон due diligence-д тогтмол дэмжлэг үзүүлнэ.",
  },
] as const;

const faqs = [
  [
    "Тогтмол зөвлөх үйлчилгээний төлбөр хэрхэн тооцогдох вэ?",
    "Сарын ажлын хэмжээ, ачаалал, зарцуулсан хугацаанаас үл хамааран гэрээнд тохирсон тогтмол төлбөртэй байдгаараа давуу.",
  ],
  [
    "Нэг удаагийн зөвлөгөөнд ямар ажил багтах вэ?",
    "Компани байгуулах, өөрчлөх, татан буулгах, өмчлөх эрх, хөрөнгө оруулалт, гэрээ, барьцаа болон тусгай зөвшөөрлийн ажил багтана.",
  ],
  [
    "Шүүхийн аль шатанд өмгөөлөл үзүүлэх вэ?",
    "Иргэн, захиргаа, эрүү, арбитр болон шийдвэр гүйцэтгэх ажиллагааны холбогдох бүх шатанд төлөөлөл, өмгөөлөл үзүүлнэ.",
  ],
] as const;

export default function PracticeAreasPage() {
  return (
    <>
      <section className={styles.practice}>
        <div className="shell">
          <div className={styles.heading}>
            <p className="eyebrow eyebrowLight">
              Өмгөөлөл, төлөөлөл, хууль зүйн зөвлөгөө
            </p>
            <h1>
              Таны хууль зүйн
              <br />
              хэрэгцээнд нийцсэн үйлчилгээ
            </h1>
          </div>
          <div className={styles.grid}>
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <article className={styles.card} key={area.title}>
                  <div className={styles.cardBody}>
                    <Icon aria-hidden="true" size={64} strokeWidth={1.25} />
                    <h2>{area.title}</h2>
                    <p>{area.text}</p>
                  </div>
                  <Link href="/contact">Зөвлөгөө авах</Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div className="shell">
          <p className="eyebrow">Үйлчилгээний мэдээлэл</p>
          <h2>Түгээмэл асуултууд</h2>
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 1}>
              <summary>
                <span className={styles.number}>0{index + 1}</span>
                <span className={styles.question}>{question}</span>
                <span className={styles.toggle} />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
