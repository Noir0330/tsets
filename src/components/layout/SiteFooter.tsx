import { Facebook, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Цэц Партнерс — нүүр">
            <Image
              alt="Tsets Partners"
              height={724}
              src="/images/tsets-logo-horizontal.png"
              width={2172}
            />
          </Link>
          <p>
            Өмгөөллийн “Цэц Партнерс” хуулийн фирм нь 2017 оноос иргэн,
            байгууллагад өмгөөлөл, төлөөлөл, хууль зүйн зөвлөх үйлчилгээ үзүүлж
            байна.
          </p>
        </div>

        <div>
          <h3>Холбоо барих</h3>
          <a href="mailto:Lkhagvalawyer@gmail.com">Lkhagvalawyer@gmail.com</a>
          <address>
            Улаанбаатар хот
            <br />2 салбар оффис
            <br />
            Уулзалтыг урьдчилан товлоно
          </address>
        </div>

        <div>
          <h3>Холбоос</h3>
          <nav className={styles.links} aria-label="Хөлийн холбоос">
            <Link href="/">Нүүр</Link>
            <Link href="/practice-areas">Үйлчилгээ</Link>
            <Link href="/about">Бидний тухай</Link>
            <Link href="/team">Манай баг</Link>
            <Link href="/contact">Холбоо барих</Link>
          </nav>
        </div>

        <div>
          <h3>Сошиал холбоос</h3>
          <div className={styles.socials}>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/LkhagvaLawyer"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook aria-hidden="true" size={15} />
            </a>
            <a aria-label="Имэйл" href="mailto:Lkhagvalawyer@gmail.com">
              <Mail aria-hidden="true" size={15} />
            </a>
            <a
              aria-label="Business.mn ярилцлага"
              href="https://business.mn/?p=47642"
              rel="noreferrer"
              target="_blank"
            >
              B
            </a>
            <a aria-label="Нүүр хуудас" href="/">
              ◉
            </a>
          </div>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <p>© 2026 Цэц Партнерс. Бүх эрх хуулиар хамгаалагдсан.</p>
        <p>Өмгөөлөл · Төлөөлөл · Хууль зүйн зөвлөгөө</p>
      </div>
    </footer>
  );
}
