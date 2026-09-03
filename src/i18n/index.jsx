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
    document.title =
      lang === "he" ? "זאלמה ACB | הנגרים 4, באר שבע" : "Zalame ACB | 4 HaNagarim, Be'er Sheva";
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
