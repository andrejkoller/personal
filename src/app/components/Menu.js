"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Menu = () => {
  const pathname = usePathname();

  const handleCloseMenu = () => {
    const menu = document.getElementById("menu");
    const html = document.documentElement;

    if (!menu) return;

    menu.classList.remove("appear");
    html.style.overflow = "auto";
  };

  useEffect(() => {
    handleCloseMenu();
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const links = [
    { href: "/projects", label: "Projects", className: "projects-link" },
    { href: "/about", label: "About", className: "about-link" },
    {
      href: "/inspiration",
      label: "Inspiration",
      className: "inspiration-link",
    },
    { href: "/gallery", label: "Gallery", className: "gallery-link" },
    { href: "/contact", label: "Contact", className: "contact-link" },
  ];

  return (
    <div id="menu" className="menu-container" role="dialog" aria-modal="true">
      <div className="menu-content">
        {/* Header */}
        <div className="menu-header">
          <div className="menu-header-logo">
            <Link href="/" scroll={false}>
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
              <div className="round-animation-one" aria-hidden="true"></div>
              <div className="round-animation-two" aria-hidden="true"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="menu-body" aria-label="Main menu">
          {links.map(({ href, label, className }) => (
            <div key={href} className="menu-links">
              <p className={className}>
                <Link href={href}>{label}</Link>
              </p>
              <div></div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
