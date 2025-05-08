"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackgroundMusic } from "../BackgroundMusic/BackgroundMusic";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Header.module.css";
import classNames from "classnames";

export const Header = ({ toggleMenu }) => {
  const pathname = usePathname();
  const pathnamesWithBackgroundMusic = ["/", "/about"];
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
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
          <Link href="/" scroll={false}>
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

      {isHome && (
        <div className={styles["language-switcher"]}>
          <LanguageSwitcher />
        </div>
      )}

      {showMusic && (
        <div className={styles["background-music"]}>
          <BackgroundMusic />
        </div>
      )}
    </div>
  );
};
