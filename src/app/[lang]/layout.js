import { Cormorant, Gloock, Rubik } from "next/font/google";
import LayoutClient from "./LayoutClient";

export const metadata = {
  title: "Andrej Koller",
  description: "Musical projects of Andrej Koller.",
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

export default async function Layout({ children, params }) {
  const { lang } = await params;
  const fontVars = `${cormorant.variable || ""} ${rubik.variable || ""} ${gloock.variable || ""}`;

  return (
    <html lang={lang}>
      <body className={fontVars}>
        <LayoutClient propLang={lang}>{children}</LayoutClient>
      </body>
    </html>
  );
}
