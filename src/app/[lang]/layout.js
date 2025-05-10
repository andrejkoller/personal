import { notFound } from "next/navigation";

const SUPPORTED_LANGS = ["de", "ru"];

export default function LangLayout({ children, params }) {
  const { lang } = params;

  if (!SUPPORTED_LANGS.includes(lang)) {
    notFound();
  }

  return children;
}
