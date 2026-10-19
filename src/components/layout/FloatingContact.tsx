import { MessageCircle } from "lucide-react";
import styles from "./FloatingContact.module.css";

export function FloatingContact() {
  return (
    <a
      aria-label="Цэц Партнерстай холбогдох"
      className={styles.chat}
      href="mailto:Lkhagvalawyer@gmail.com"
    >
      <span>Холбоо барих</span>
      <i>
        <MessageCircle aria-hidden="true" size={22} strokeWidth={1.8} />
      </i>
    </a>
  );
}
