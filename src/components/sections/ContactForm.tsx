"use client";

import type { FormEvent } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const topic = String(form.get("subject") ?? "Хууль зүйн зөвлөгөө");
    const message = String(form.get("message") ?? "");
    const body = [`Нэр: ${name}`, `Имэйл: ${email}`, "", message].join("\n");

    window.location.href = `mailto:Lkhagvalawyer@gmail.com?subject=${encodeURIComponent(
      topic,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input autoComplete="name" name="name" placeholder="Нэр" required />
      <input
        autoComplete="email"
        name="email"
        placeholder="Имэйл"
        required
        type="email"
      />
      <input name="subject" placeholder="Асуудлын сэдэв" required />
      <textarea name="message" placeholder="Мэдээлэл" required rows={5} />
      <label className={styles.consent}>
        <input required type="checkbox" />
        <span>
          Илгээсэн мэдээллийг холбоо барих зорилгоор ашиглахыг зөвшөөрч байна.
        </span>
      </label>
      <button type="submit">Имэйл илгээх</button>
    </form>
  );
}
