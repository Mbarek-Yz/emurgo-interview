import {Dimensions, Platform} from 'react-native';

export const DEBOUNCE_DELAY = 500;

export const TOAST_DURATION = 3000;

export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

export const BUTTON_BOUNCE_RATE = 1000;
export const BUTTON_PAYMENT_BOUNCE_RATE = 3000;

export const FLAT_LIST_ON_END_REACHED_THRESHOLD = 0.4;

export const SHARED_PREFERENCES_NAME = 'casualFoundryTest';

export const POST_DIVIDER_HEIGHT = 20;
export const POST_DIVIDER_WIDTH = 20;

export const EXPIRATION_TOKEN_DELAY_IN_MINUTES = 30;

export const SCREEN_WIDTH = Dimensions.get('window').width;
