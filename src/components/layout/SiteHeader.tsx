"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useSiteMessages } from "@/lib/i18n/PublicI18nProvider";
import { LanguageSelector } from "./LanguageSelector";
import styles from "./SiteHeader.module.css";

const practiceLinks = [
  {
    href: "/practice-areas/litigation",
    image: "/images/practice-menu-99.jpg",
  },
  {
    href: "/practice-areas/business-advisory",
    image: "/images/practice-menu-102.jpg",
  },
  {
    href: "/practice-areas/retained-advisory",
    image: "/images/practice-menu-103.jpg",
  },
] as const;

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 448 512">
      <path d="M207.029 381.476 12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 473.806 473.806">
      <path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8l.4-.5c5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-55.1-55.1Zm35.8 105.3c-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4l-.5.5c-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3l1.2.7c3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.2 10.2 10.2 20.7 0 31.3Z" />
      <path d="M256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6Z" />
      <path d="M473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5S316.656 9.106 264.456.206c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4Z" />
    </svg>
  );
}

export function SiteHeader() {
  const messages = useSiteMessages();
  const { header } = messages;
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
    setMobileServicesOpen(false);
  };
  const links = [
    { href: "/", label: header.nav.home },
    {
      children: practiceLinks.map((item, index) => ({
        href: item.href,
        label: header.practiceLinks[index],
      })),
      label: header.nav.services,
    },
    { href: "/about", label: header.nav.about },
    { href: "/interview", label: header.nav.interview },
    { href: "/contact", label: header.nav.contact },
  ] as const;
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label={header.logoLabel}>
          <Image
            alt="Tsets Partners"
            height={1254}
            priority
            src="/images/tsets-logo-transparent.png"
            width={1254}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label={header.mainNav}>
          <Link
            className={pathname === "/" ? styles.active : undefined}
            href="/"
          >
            {header.nav.home}
          </Link>

          <div className={styles.practiceGroup}>
            <Link
              className={
                pathname.startsWith("/practice-areas")
                  ? styles.active
                  : undefined
              }
              href={practiceLinks[0].href}
            >
              {header.nav.services}
              <span>
                <ChevronIcon />
              </span>
            </Link>
            <div className={`${styles.megaMenu} ${styles.practiceMenu}`}>
              <div className={styles.practiceMenuInner}>
                <div className={styles.practiceIndex}>
                  <p>{header.nav.services}</p>
                  <nav aria-label={header.nav.services}>
                    {practiceLinks.map((item, index) => (
                      <Link href={item.href} key={item.href}>
                        {header.practiceLinks[index]}
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className={styles.practiceCards}>
                  {practiceLinks.map((item, index) => (
                    <Link href={item.href} key={item.href}>
                      <span className={styles.practiceImage}>
                        <Image alt="" fill sizes="190px" src={item.image} />
                      </span>
                      <strong>{header.practiceLinks[index]}</strong>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Link
            className={pathname === "/about" ? styles.active : undefined}
            href="/about"
          >
            {header.nav.about}
          </Link>

          <Link
            className={pathname === "/interview" ? styles.active : undefined}
            href="/interview"
          >
            {header.nav.interview}
          </Link>
          <Link
            className={pathname === "/contact" ? styles.active : undefined}
            href="/contact"
          >
            {header.nav.contact}
          </Link>
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href="mailto:Lkhagvalawyer@gmail.com">
            <PhoneIcon />
            {header.email}
          </a>
        </div>

        <div className={styles.viewTools}>
          <LanguageSelector />
        </div>

        <details
          className={styles.mobileMenu}
          onToggle={(event) => {
            if (!event.currentTarget.open) setMobileServicesOpen(false);
          }}
          ref={menuRef}
        >
          <summary aria-label={header.openMenu}>
            <Menu className={styles.menuIcon} aria-hidden="true" />
            <X className={styles.closeIcon} aria-hidden="true" />
          </summary>
          <div className={styles.mobilePanel}>
            <nav aria-label={header.mobileNav}>
              {links.map((item) =>
                "children" in item ? (
                  <div className={styles.mobileServices} key={item.label}>
                    <button
                      aria-controls="mobile-services-list"
                      aria-expanded={mobileServicesOpen}
                      className={styles.mobileServicesButton}
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      type="button"
                    >
                      {item.label}
                      <ChevronIcon />
                    </button>
                    <div
                      aria-hidden={!mobileServicesOpen}
                      className={styles.mobileServicesList}
                      data-open={mobileServicesOpen ? "" : undefined}
                      id="mobile-services-list"
                    >
                      <div className={styles.mobileServicesListInner}>
                        {item.children.map((child) => (
                          <Link
                            href={child.href}
                            key={child.href}
                            onClick={closeMenu}
                            tabIndex={mobileServicesOpen ? undefined : -1}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={item.href} key={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                ),
              )}
            </nav>
            <div className={styles.mobileMeta}>
              <a href="mailto:Lkhagvalawyer@gmail.com">
                Lkhagvalawyer@gmail.com
              </a>
              <a href="https://www.facebook.com/LkhagvaLawyer">Facebook</a>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
