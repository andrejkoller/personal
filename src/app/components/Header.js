"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathName = usePathname();

  const handleOpenMenu = () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const html = document.querySelector("html");

    if (!menu || !menuButton) return;

    menu.classList.add("appear");
    html.style.overflow = "hidden";
  };

  return (
    <div className={`header-container ${pathName === "/" ? "home" : ""}`}>
      <div className="header-content">
        <div className="header-logo">
          <Link href="/">
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
            >
              Menu
            </button>
            <div className="round-animation-one"></div>
            <div className="round-animation-two"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
