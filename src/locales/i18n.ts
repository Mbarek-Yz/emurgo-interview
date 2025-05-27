import {initReactI18next} from 'react-i18next';
import {NativeModules} from 'react-native';

import i18n from 'i18next';

import {IS_IOS} from '_utils/constants';
import en, {TranslationsType} from '_languages/en';

const i18nInstance = i18n.createInstance();
export const appLanguage: string = IS_IOS
  ? NativeModules.SettingsManager.getConstants().settings.AppleLocale ||
    NativeModules.SettingsManager.getConstants().AppleLanguages[0]
  : NativeModules.I18nManager.localeIdentifier;

i18nInstance
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en: {
        translation: en,
      },
    },
    lng: appLanguage.split('_')[0],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log('I18n error', err);
  });

export function translate(name: TxKeyPath, params = {}): string {
  return i18nInstance.t(name, params);
}

export const FRENCH_LANGUAGE = 'fr';
export const ENGLISH_LANGUAGE = 'en';
export default i18nInstance;

/**
 * Builds up valid keypaths for translations.
 */
export type TxKeyPath = RecursiveKeyOf<TranslationsType>;

type RecursiveKeyOf<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfInner<TObj extends object> = {
  [TKey in keyof TObj & (string | number)]: RecursiveKeyOfHandleValue<
    TObj[TKey],
    `['${TKey}']` | `.${TKey}`
  >;
}[keyof TObj & (string | number)];

type RecursiveKeyOfHandleValue<
  TValue,
  Text extends string,
> = TValue extends any[]
  ? Text
  : TValue extends object
  ? Text | `${Text}${RecursiveKeyOfInner<TValue>}`
  : Text;
