import { TemplateVisibilityToggle } from "@/components/layout/TemplateVisibilityToggle";
import styles from "./template-controls.module.css";

export default function TemplateControlsPage() {
  return (
    <section className={styles.page}>
      <TemplateVisibilityToggle />
    </section>
  );
}
