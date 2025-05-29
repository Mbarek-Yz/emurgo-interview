import {Dimensions, Platform} from 'react-native';

export const DEBOUNCE_DELAY = 500;

export const TOAST_DURATION = 3000;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const BUTTON_BOUNCE_RATE = 1000;
export const BUTTON_PAYMENT_BOUNCE_RATE = 3000;

export const FLAT_LIST_ON_END_REACHED_THRESHOLD = 0.4;

export const SHARED_PREFERENCES_NAME = 'interview';

export const EXPIRATION_TOKEN_DELAY_IN_MINUTES = 30;

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const TOUCHABLE_OPACITY_HIT_SLOP = 10;

import {LocaleLanguage, PickerItems} from '_utils/enums';
import {RadioItem} from '_components/CustomRadioGroup/CustomRadioGroup';

export const languagePickerData: RadioItem[] = [
  {id: 1, label: PickerItems.ENGLISH, value: LocaleLanguage.EN},
  {id: 2, label: PickerItems.ARABIC, value: LocaleLanguage.AR},
  {id: 3, label: PickerItems.GERMAN, value: LocaleLanguage.DE},
  {id: 4, label: PickerItems.SPANISH, value: LocaleLanguage.ES},
  {id: 5, label: PickerItems.FRENCH, value: LocaleLanguage.FR},
  {id: 6, label: PickerItems.HEBREW, value: LocaleLanguage.HE},
  {id: 7, label: PickerItems.ITALIAN, value: LocaleLanguage.IT},
  {id: 8, label: PickerItems.DUTCH, value: LocaleLanguage.NL},
  {id: 9, label: PickerItems.NORWEGIAN, value: LocaleLanguage.NO},
  {id: 10, label: PickerItems.PORTUGUESE, value: LocaleLanguage.PT},
  {id: 11, label: PickerItems.RUSSIAN, value: LocaleLanguage.RU},
  {id: 12, label: PickerItems.SWEDISH, value: LocaleLanguage.SV},
  {id: 13, label: PickerItems.URDU, value: LocaleLanguage.UR},
  {id: 14, label: PickerItems.CHINESE, value: LocaleLanguage.ZH},
];

export const LANGUAGE_PICKER_CLOSE_TIME = 200;

export const IconSizes = {
  PICKER_IMAGE: 12,
  EXTRA_SMALL: 16,
};
