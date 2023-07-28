import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
// import LanguageDetector from 'i18next-browser-languagedetector'

void i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'hu',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    },
  })

export default i18n
