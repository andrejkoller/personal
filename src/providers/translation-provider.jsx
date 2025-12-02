import { useTranslation } from "@/hooks/use-translation";
import { TranslationContext } from "@/contexts/translation-context";

export function TranslationProvider({ children, propLang }) {
  const lang = propLang || "en";
  const t = useTranslation(lang);

  return (
    <TranslationContext.Provider value={{ lang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
