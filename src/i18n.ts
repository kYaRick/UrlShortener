import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLang from "./locales/en/translation.json"; // English translation resource
import ukLang from "./locales/uk/translation.json"; // Ukrainian translation resource

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enLang, // English translation resource
      },
      uk: {
        translation: ukLang, // Ukrainian translation resource
      }
    }
  });

export default i18n;
