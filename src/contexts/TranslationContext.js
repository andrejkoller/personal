import { usePathname } from "next/navigation";
import { createContext, useContext } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export const TranslationContext = createContext();

export function useTranslationContext() {
  return useContext(TranslationContext);
}

export function TranslationProvider({ children }) {
  const pathname = usePathname();
  const lang = pathname === "/" ? "en" : pathname.split("/")[1] || "en";
  const t = useTranslation(lang);

  return (
    <TranslationContext.Provider value={{ lang, t }}>
      {children}
    </TranslationContext.Provider>
  );
}
