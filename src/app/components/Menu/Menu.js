"use client";

import Link from "next/link";
import styles from "./Menu.module.css";
import classNames from "classnames";

export const Menu = ({ isMenuOpen, toggleMenu }) => {
  const links = [
    { href: "/projects", label: "Projects", stylingClass: "projects-link" },
    { href: "/about", label: "About", stylingClass: "about-link" },
    {
      href: "/inspiration",
      label: "Inspiration",
      stylingClass: "inspiration-link",
    },
    { href: "/gallery", label: "Gallery", stylingClass: "gallery-link" },
    { href: "/contact", label: "Contact", stylingClass: "contact-link" },
  ];

  return (
    <div
      id="menu"
      className={classNames(styles["menu-container"], {
        [styles["menu-open"]]: isMenuOpen,
      })}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles["menu-content"]}>
        {/* Header */}
        <div className={styles["menu-header"]}>
          <div className={styles["menu-logo"]}>
            <Link href="/" scroll={false}>
              <h3>Pianorgan</h3>
              <h1>Andrej Koller</h1>
            </Link>
          </div>

          <div className={styles["menu-button-container"]}>
            <div className={styles["menu-button-content"]}>
              <button
                id="closeButton"
                className={styles["menu-button"]}
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
        <nav className={styles["menu-body"]} aria-label="Main menu">
          {links.map((link) => (
            <div
              key={link.href}
              className={classNames(
                styles["menu-link"],
                styles[link.stylingClass]
              )}
            >
              <p>
                <Link href={link.href}>{link.label}</Link>
              </p>
              <div></div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
