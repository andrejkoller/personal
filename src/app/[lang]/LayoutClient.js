"use client";

import { Header } from "@/components/Header/Header";
import { Menu } from "@/components/Menu/Menu";
import { Cursor } from "@/components/Cursor/Cursor";
import { Footer } from "@/components/Footer/Footer";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TranslationProvider } from "@/contexts/TranslationContext";

export default function LayoutClient({ children, propLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <TranslationProvider propLang={propLang}>
      <>
        <Cursor />
        <nav className="menu">
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </nav>
        <header
          className={`header${pathname.includes("/about") ? " about" : ""}`}
        >
          <Header toggleMenu={toggleMenu} />
        </header>
        <main className="main">{children}</main>
        <CookieBanner />
        <footer className="footer">
          <Footer />
        </footer>
      </>
    </TranslationProvider>
  );
}
