"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./LanguageSwitcher.module.css";
import classNames from "classnames";

export const LanguageSwitcher = () => {
  const [isLanguageActive, setIsLanguageActive] = useState("en");

  return (
    <div className={styles["language-switcher-container"]}>
      <div className={styles["language-switcher-content"]}>
        <ul className={styles["language-switcher-list"]}>
          <li>
            <Link
              href={"/"}
              className={classNames(styles["language-button"], {
                [styles["active"]]: isLanguageActive === "en",
              })}
              onClick={() => setIsLanguageActive("en")}
            >
              English
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/de"}
              className={classNames(styles["language-button"], {
                [styles["active"]]: isLanguageActive === "de",
              })}
              onClick={() => setIsLanguageActive("de")}
            >
              Deutsch
              <span></span>
            </Link>
          </li>
          <li>
            <Link
              href={"/ru"}
              className={classNames(styles["language-button"], {
                [styles["active"]]: isLanguageActive === "ru",
              })}
              onClick={() => setIsLanguageActive("ru")}
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
