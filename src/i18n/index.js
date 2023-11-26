import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../lang/en.json';
import translationAR from '../lang/ar.json';



const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};
export const InitI18n = (lang) => {

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: lang,
      compatibilityJSON: 'v3',
      keySeparator: false, // we do not use keys in form messages.welcome
      fallbackLng: lang,
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      react: {
        useSuspense: false
      },
      detect: callback => {
        AsyncStorage.getItem('user-language', (err, language) => {
          // if error fetching stored data or no language was stored
          // display errors when in DEV mode as console statements
          if (err || !language) {
            if (err) {
              alert('Error fetching Languages from asyncstorage ', err);
            } else {
              alert('No language is set, choosing English as fallback');
            }
            const findBestAvailableLanguage =
              RNLocalize.findBestAvailableLanguage(LANG_CODES);

            callback(findBestAvailableLanguage.languageTag || 'en');
            return;
          }
          callback(language);
        });
      },

      defaultNS: 'translation'
    });
}


export default i18n;
