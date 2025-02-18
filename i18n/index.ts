import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en-US/translation.json";
import translationEs from "./locales/es-ES/translation.json";
import translationPt from "./locales/pt-BR/translation.json";

const resources = {
    pt: { translation: translationPt },
    en: { translation: translationEn },
    es: { translation: translationEs },
};

const initI18n = async () => {
    let savedLanguage = await AsyncStorage.getItem("@language");

    if (!savedLanguage) {
        savedLanguage = Localization.getLocales()[0].languageCode;
        await AsyncStorage.setItem("@language", savedLanguage as string);
    }

    i18n.use(initReactI18next).init({
        resources,
        lng: savedLanguage,
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();

export default i18n;
