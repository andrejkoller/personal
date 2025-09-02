"use client";

import Link from "next/link";
import styles from "./LanguageSwitcher.module.css";
import classNames from "classnames";
import { useTranslationContext } from "@/contexts/TranslationContext";

export const LanguageSwitcher = () => {
  const { lang } = useTranslationContext();

  return (
    <div className={styles.languageSwitcherContainer}>
      <div className={styles.languageSwitcherContent}>
        <ul className={styles.languageSwitcherList}>
          <li>
            <Link
              href={"/"}
              className={classNames(styles.languageButton, {
                [styles.active]: lang === "en",
              })}
            >
              English
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/de"}
              className={classNames(styles.languageButton, {
                [styles.active]: lang === "de",
              })}
            >
              Deutsch
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/ru"}
              className={classNames(styles.languageButton, {
                [styles.active]: lang === "ru",
              })}
            >
              Русский
              <span></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
