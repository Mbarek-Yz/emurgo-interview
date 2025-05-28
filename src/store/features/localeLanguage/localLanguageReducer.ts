import { type PersistConfig, persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { type Action } from '@reduxjs/toolkit';

import localeLanguageSlice, {
  type LocalLanguageState
} from './LocaleLanguageSlice';

// persist local language slice in Async Storage
const localeLanguagePersistConfig: PersistConfig<LocalLanguageState> = {
  key: 'localLanguage',
  storage: AsyncStorage,
  whitelist: ['language']
};

export const persistedLocalLanguageReducer = persistReducer<
  LocalLanguageState,
  Action
>(localeLanguagePersistConfig, localeLanguageSlice.reducer);
