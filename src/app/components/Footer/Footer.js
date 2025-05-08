import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <p>Andrej Koller</p>
        <p className={styles["contact-link"]}>
          <Link href="/contact">Contact me</Link>
        </p>
        <p>
          <Link href="https://linktr.ee/andrejkoller" target="_blank">
            Linktree
          </Link>
        </p>
      </div>
    </div>
  );
};
