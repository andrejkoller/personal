"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackgroundMusic } from "../background-music/background-music";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import styles from "./header.module.css";
import classNames from "classnames";
import { useTranslationContext } from "@/contexts/translation-context";

export const Header = ({ toggleMenu }) => {
  const { lang, t } = useTranslationContext();
  const pathname = usePathname();
  const pathnamesWithBackgroundMusic = [`/${lang}`, "/about", `/${lang}/about`];
  const isHome = pathname === `/${lang}` || pathname === "/";
  const isAbout = pathname === `/${lang}/about` || pathname === "/about";
  const showMusic = pathnamesWithBackgroundMusic.includes(pathname);

  return (
    <div
      className={classNames(styles.headerContainer, {
        [styles.home]: isHome || isAbout,
      })}
    >
      <div className={styles.headerContent}>
        <div
          className={classNames(styles.headerLogo, {
            [styles.home]: isHome,
          })}
        >
          <Link href={lang === "en" ? "/" : `/${lang}`} scroll={false}>
            <h3>Pianoforte</h3>
            <h1>Andrej Koller</h1>
          </Link>
        </div>

        <div className={styles.menuButtonContainer}>
          <div className={styles.menuButtonContent}>
            <button
              id="menuButton"
              onClick={toggleMenu}
              className={styles.menuButton}
              aria-label="Open navigation menu"
            >
              Menu
            </button>
            <div className="round-animation-one" aria-hidden="true"></div>
            <div className="round-animation-two" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {isAbout && (
        <div className={styles.aboutHeader}>
          <h1>{t?.about.section.introduction.title}</h1>
        </div>
      )}

      {isHome && (
        <div className={styles.languageSwitcher}>
          <LanguageSwitcher lang={lang} />
        </div>
      )}

      {showMusic && (
        <div className={styles.backgroundMusic}>
          <BackgroundMusic t={t} />
        </div>
      )}
    </div>
  );
};
