"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackgroundMusic } from "../BackgroundMusic/BackgroundMusic";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";
import classNames from "classnames";
import { useTranslationContext } from "@/app/context/TranslationContext";

export const Header = ({ toggleMenu }) => {
  const { lang, t } = useTranslationContext();
  const pathname = usePathname();
  const pathnamesWithBackgroundMusic = [`/${lang}`, "/about", `/${lang}/about`];
  const isHome = pathname === `/${lang}` || pathname === "/";
  const isAbout = pathname === `/${lang}/about` || pathname === "/about";
  const showMusic = pathnamesWithBackgroundMusic.includes(pathname);

  return (
    <div
      className={classNames(styles["header-container"], {
        [styles["home"]]: isHome || isAbout,
      })}
    >
      <div className={styles["header-content"]}>
        <div
          className={classNames(styles["header-logo"], {
            [styles["home"]]: isHome,
          })}
        >
          <Link href={lang === "en" ? "/" : `/${lang}`} scroll={false}>
            <h3>Pianorgan</h3>
            <h1>Andrej Koller</h1>
          </Link>
        </div>

        <div className={styles["menu-button-container"]}>
          <div className={styles["menu-button-content"]}>
            <button
              id="menuButton"
              onClick={toggleMenu}
              className={styles["menu-button"]}
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
        <div className={styles["about-header"]}>
          <h1>{t?.about.section.introduction.title}</h1>
        </div>
      )}

      {isHome && (
        <div className={styles["language-switcher"]}>
          <LanguageSwitcher lang={lang} />
        </div>
      )}

      {showMusic && (
        <div className={styles["background-music"]}>
          <BackgroundMusic t={t} />
        </div>
      )}
    </div>
  );
};
