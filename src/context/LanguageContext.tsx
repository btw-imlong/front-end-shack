"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "@/locales/en.json";
import km from "@/locales/km.json";
type Translations = typeof en;
type LangType = "en" | "km";

interface LanguageContextProps {
  language: LangType;
  setLanguage: (lang: LangType) => void;
  t: (key: keyof Translations) => string;
}

const translations: Record<LangType, Translations> = { en, km };

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LangType>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as LangType | null;
    if (savedLang) setLanguageState(savedLang);
  }, []);

  const setLanguage = (lang: LangType) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: keyof Translations) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
