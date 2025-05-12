import Link from "next/link";
import styles from "./Footer.module.css";
import { useTranslationContext } from "@/app/context/TranslationContext";

export const Footer = () => {
  const { lang, t } = useTranslationContext();

  return (
    <div className={styles["footer-container"]}>
      <div className={styles["footer-content"]}>
        <p>Andrej Koller</p>
        <p className={styles["contact-link"]}>
          <Link href={`/${lang}/contact`}>{t?.footer.contact}</Link>
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
