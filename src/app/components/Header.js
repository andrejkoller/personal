"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackgroundMusic } from "./BackgroundMusic";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const pathname = usePathname();
  const pathnamesWithBackgroundMusic = ["/", "/about"];
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const showMusic = pathnamesWithBackgroundMusic.includes(pathname);

  const handleOpenMenu = () => {
    const menu = document.getElementById("menu");
    const html = document.documentElement;

    if (!menu) return;

    menu.classList.add("appear");
    html.style.overflow = "hidden";
  };

  return (
    <header className={`header-container ${isHome || isAbout ? "home" : ""}`}>
      <div className="header-content">
        <div className={`header-logo ${isHome ? "home" : ""}`}>
          <Link href="/" scroll={false}>
            <h3>Pianorgan</h3>
            <h1>Andrej Koller</h1>
          </Link>
        </div>

        <div className="menu-button-container">
          <div className="menu-button-content">
            <button
              id="menuButton"
              onClick={handleOpenMenu}
              className="menu-button"
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
        <div className="language-switcher-container">
          <LanguageSwitcher />
        </div>
      )}

      {showMusic && (
        <div className="background-music-container">
          <BackgroundMusic />
        </div>
      )}
    </header>
  );
};
