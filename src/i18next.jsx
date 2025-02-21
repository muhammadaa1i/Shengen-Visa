import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Bakcend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import uzTranslation from './languages/uz.json'
import ruTranslation from './languages/ru.json'
import enTranslation from './languages/en.json'

const language = localStorage.getItem("i18nextLng") || "uz"

i18n
.use(LanguageDetector)
.use(Bakcend)
.use(initReactI18next)
.init({
    fallbackLng: "uz",
    lng: language,
    debug: true,
    resources:{
        uz:{translation: uzTranslation},
        ru:{translation: ruTranslation},
        en:{translation: enTranslation},
    }
})

export default i18n