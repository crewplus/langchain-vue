import VueI18n from 'vue-i18n'
// import locales
import zh from './zh'
import en from './en'
import Vue from 'vue'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: "zh", // lang id
    fallbackLocale: "zh",
    messages: {
        zh: {
            ...zh
        },
        en: {
            ...en
        }
    }
    // Do not display warn
    // silentTranslationWarn: true,
})

export default i18n
