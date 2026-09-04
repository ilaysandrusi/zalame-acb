import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { he } from "./he";
import { en } from "./en";

const dictionaries = { he, en };
const LangContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("zalame-lang") || "he");

  useEffect(() => {
    const dict = dictionaries[lang];
    document.documentElement.lang = dict.lang;
    document.documentElement.dir = dict.dir;
    localStorage.setItem("zalame-lang", lang);
    document.title = dict.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", dict.meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", dict.meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", dict.meta.description);
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", lang === "he" ? "he_IL" : "en_US");
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: dictionaries[lang],
      toggle: () => setLang((prev) => (prev === "he" ? "en" : "he")),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
