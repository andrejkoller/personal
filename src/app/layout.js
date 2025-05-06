import { Cormorant, Gloock, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Cursor } from "./components/Cursor";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";

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
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable || ""} ${
          rubik.variable || ""
        } ${gloock.variable || ""}`}
      >
        <Cursor />
        <nav id="menuContent" className="menu">
          <Menu />
        </nav>
        <header id="headerContent" className="header">
          <Header />
        </header>
        <main id="mainContent" className="main">
          {children}
        </main>
        <CookieBanner />
        <footer id="footerContent" className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
