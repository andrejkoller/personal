// Für Server-Komponenten:
export const getDictionary = async (locale) => {
  const supported = ["de", "en", "ru"];
  const lang = supported.includes(locale) ? locale : "en";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/locales/${lang}.json`
  );

  if (!res.ok) throw new Error(`Could not load locale file: ${lang}`);
  
  return res.json();
};
