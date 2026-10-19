import Image from "next/image";
import { ContactForm } from "./ContactForm";
import styles from "./ThemeSections.module.css";

const logos = ["03", "04", "05", "06", "07"] as const;

export function TrustedLogos() {
  return (
    <section className={styles.logos} data-motion-scope>
      <div className={`shell ${styles.logoRow}`}>
        <p data-reveal="fade">Хамтран ажилладаг байгууллагууд</p>
        {logos.map((logo, index) => (
          <Image
            alt="Харилцагч байгууллагын тэмдэг"
            data-reveal="fade"
            data-reveal-delay={(index + 1) * 80}
            height={42}
            key={logo}
            src={`/images/client-logo-${logo}.webp`}
            width={135}
          />
        ))}
      </div>
    </section>
  );
}

export function LegalMarquee() {
  const words = (
    <>
      <span>✦</span> эрх <span>✦</span> хамгаалалт <span>✦</span> итгэл
      <span>✦</span> зөвлөгөө <span>✦</span> өмгөөлөл <span>✦</span> шийдэл
    </>
  );

  return (
    <section
      className={styles.marquee}
      aria-label="Цэц Партнерсийн үнэт зүйлс"
      data-motion-scope
    >
      <div className={styles.marqueeTrack}>
        <div>{words}</div>
        <div aria-hidden="true">{words}</div>
      </div>
    </section>
  );
}

export function LibraryContact() {
  return (
    <section className={styles.libraryContact}>
      <div className={`shell ${styles.contactShell}`}>
        <div className={styles.contactCard}>
          <h2>
            Хууль зүйн
            <br />
            зөвлөгөө хэрэгтэй юу?
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
