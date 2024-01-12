import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsEN from "../locales/en.json";
import translationsJP from "../locales/jp.json";

// the translations
const resources = {
    en: {
        translation: translationsEN
    },
    jp: {
        translation: translationsJP
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources, // resources are important to load translations for the languages.
        lng: localStorage.getItem("lang"), // It acts as default language. When the site loads, content is shown in this language.  
        debug: true,
        fallbackLng: "en", // use de if selected language is not available
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;