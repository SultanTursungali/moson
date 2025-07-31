"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "ru" | "en" | "kz";

interface LanguageContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "ru",
  setLang: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "en" || stored === "kz" || stored === "ru") setLang(stored);
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
};