"use client";

import { Cormorant, Gloock, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Cursor } from "./components/Cursor";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

const gloock = Gloock({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gloock",
});

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <html lang="en">
      <body
        className={`${cormorant.variable || ""} ${
          rubik.variable || ""
        } ${gloock.variable || ""}`}
      >
        <Cursor />
        <nav className="menu">
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </nav>
        <header className="header">
          <Header toggleMenu={toggleMenu} />
        </header>
        <main className="main">{children}</main>
        <CookieBanner />
        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
