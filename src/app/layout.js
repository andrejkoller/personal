import { Cormorant, Gloock, Rubik } from "next/font/google";
import "./globals.css";
import LayoutClient from "./LayoutClient";

export const metadata = {
  title: "Andrej Koller",
  description:
    "Personal website of Andrej Koller, a web developer and musician.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }, { lang: "ru" }];
}

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

export default async function RootLayout({ children }) {
  const fontVars = `${cormorant.variable || ""} ${rubik.variable || ""} ${gloock.variable || ""}`;

  return (
    <html lang="en">
      <body className={fontVars}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
