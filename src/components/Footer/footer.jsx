import Link from "next/link";
import styles from "./footer.module.css";
import { useTranslationContext } from "@/contexts/translation-context";

export const Footer = () => {
  const { lang, t } = useTranslationContext();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <p>Andrej Koller</p>
        <p className={styles.contactLink}>
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
