import { Cormorant, Gloock, Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

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
        className={`${cormorant.variable || ""} ${rubik.variable || ""} ${
          gloock.variable || ""
        }`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
