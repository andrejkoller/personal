"use client";

import Link from "next/link";
import styles from "./LanguageSwitcher.module.css";
import classNames from "classnames";
import { useTranslationContext } from "@/app/context/TranslationContext";

export const LanguageSwitcher = () => {
  const { lang } = useTranslationContext();

  return (
    <div className={styles["language-switcher-container"]}>
      <div className={styles["language-switcher-content"]}>
        <ul className={styles["language-switcher-list"]}>
          <li>
            <Link
              href={"/"}
              className={classNames(styles["language-button"], {
                [styles["active"]]: lang === "en",
              })}
            >
              English
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/de"}
              className={classNames(styles["language-button"], {
                [styles["active"]]: lang === "de",
              })}
            >
              Deutsch
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/ru"}
              className={classNames(styles["language-button"], {
                [styles["active"]]: lang === "ru",
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
