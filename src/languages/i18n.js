import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import LANEnglish from "./english/translation.json";
import LANTurkish from "./turkish/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    resources: {
      en: {
        translation: LANEnglish,
      },
      tr: {
        translation: LANTurkish,
      },
    },
    debug: true,
    lng: window.localStorage.getItem("multilang"),
    ns: ["translation"],
    defaultNS: "translation",
    fallbackLng: window.localStorage.getItem("multilang"),
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false,
    },
  });
i18n.languages = ["tr", "en"];

export default i18n;
