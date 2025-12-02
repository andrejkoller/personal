import { useEffect, useState } from "react";
import { getDictionary } from "@/libs/get-dictionary";

export function useTranslation(lang = "en") {
  const supportedLangs = ["de", "en", "ru"];
  const safeLang = supportedLangs.includes(lang) ? lang : "en";
  const [t, setT] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const dict = await getDictionary(safeLang);
        setT(dict);
      } catch (err) {
        console.error("Error loading dictionary", err);
      }
    };
    fetch();
  }, [safeLang]);

  return t;
}
