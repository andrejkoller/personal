import { createContext, useContext } from "react";

export const TranslationContext = createContext();

export function useTranslationContext() {
  return useContext(TranslationContext);
}
