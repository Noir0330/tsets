import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section sectionWarm">
      <div
        className="shell"
        style={{ minHeight: "55vh", display: "grid", placeItems: "center" }}
      >
        <div style={{ maxWidth: 720, textAlign: "center" }}>
          <p className="eyebrow">404 · Хуудас олдсонгүй</p>
          <h1
            style={{
              fontSize: "clamp(4rem, 10vw, 8rem)",
              marginBottom: "2rem",
            }}
          >
            Таны хайсан хуудас байхгүй байна.
          </h1>
          <Link className="button buttonDark" href="/">
            Нүүр хуудас руу буцах
            <ArrowUpRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
