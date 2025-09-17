"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import classNames from "classnames";
import { useTranslationContext } from "@/contexts/TranslationContext";

export const Menu = ({ isMenuOpen, toggleMenu }) => {
  const { lang, t } = useTranslationContext();
  const links = [
    {
      href: "projects",
      label: `${t?.menu.label.projects}`,
      stylingClass: "projectsLink",
    },
    {
      href: "about",
      label: `${t?.menu.label.about}`,
      stylingClass: "aboutLink",
    },
    {
      href: "inspiration",
      label: `${t?.menu.label.inspiration}`,
      stylingClass: "inspirationLink",
    },
    {
      href: "gallery",
      label: `${t?.menu.label.gallery}`,
      stylingClass: "galleryLink",
    },
    {
      href: "contact",
      label: `${t?.menu.label.contact}`,
      stylingClass: "contactLink",
    },
  ];

  return (
    <div
      id="menu"
      className={classNames(styles.menuContainer, {
        [styles.menuOpen]: isMenuOpen,
      })}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.menuContent}>
        {/* Header */}
        <div className={styles.menuHeader}>
          <div className={styles.menuLogo}>
            <Link href={lang === "en" ? "/" : `/${lang}`} scroll={false}>
              <h3>Violino</h3>
              <h1>Andrej Koller</h1>
            </Link>
          </div>

          <div className={styles.menuButtonContainer}>
            <div className={styles.menuButtonContent}>
              <button
                id="closeButton"
                className={styles.menuButton}
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                +
              </button>
              <div className="round-animation-one" aria-hidden="true"></div>
              <div className="round-animation-two" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={styles.menuBody} aria-label="Main menu">
          {links.map((link) => (
            <div
              key={link.href}
              className={classNames(styles.menuLink, styles[link.stylingClass])}
            >
              <p>
                <Link href={`/${lang}/${link.href}`}>{link.label}</Link>
              </p>
              <div></div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
