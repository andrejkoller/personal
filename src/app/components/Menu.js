"use client";
import Link from "next/link";

export const Menu = () => {
  const handleCloseMenu = () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const html = document.querySelector("html");

    if (!menu || !menuButton) return;

    menu.classList.remove("appear");
    html.style.overflow = "auto";
  };

  return (
    <div id="menu" className="menu-container">
      <div className="menu-content">
        <div className="menu-header">
          <div className="menu-header-logo">
            <Link href="/">
              <h3>Pianorgan</h3>
              <h1>Andrej Koller</h1>
            </Link>
          </div>
          <div className="close-button-container">
            <div className="close-button-content">
              <button
                id="closeButton"
                onClick={handleCloseMenu}
                aria-label="Close menu"
                className="close-button"
              >
                +
              </button>
              <div className="round-animation-one"></div>
              <div className="round-animation-two"></div>
            </div>
          </div>
        </div>
        <div className="menu-body">
          <div className="projects-link menu-links">
            <p>
              <Link href="/projects">Projects</Link>
            </p>
            <div></div>
          </div>
          <div className="about-link menu-links">
            <p>
              <Link href="/about">About</Link>
            </p>
            <div></div>
          </div>
          <div className="inspiration-link menu-links">
            <p>
              <Link href="/inspiration">Inspiration</Link>
            </p>
            <div></div>
          </div>
          <div className="gallery-link menu-links">
            <p>
              <Link href="/gallery">Gallery</Link>
            </p>
            <div></div>
          </div>
          <div className="contact-link menu-links">
            <p>
              <Link href="/contact">Contact</Link>
            </p>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
