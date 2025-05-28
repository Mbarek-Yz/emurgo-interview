import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '_store/store';

import {type LocaleLanguage} from '_utils/enums';

export interface LocalLanguageState {
  language: LocaleLanguage | null;
}

const initialState: LocalLanguageState = {
  language: null,
};

/**
 * Creates a slice for handling global locale state
 */
export const localeLanguageSlice = createSlice({
  name: 'localeLanguage',
  initialState,
  reducers: {
    setLanguage: (
      state: LocalLanguageState,
      action: PayloadAction<LocaleLanguage>,
    ) => {
      state.language = action.payload;
    },
  },
});

/* Export local actions */
export const {setLanguage} = localeLanguageSlice.actions;

/* Export locale state selector */
export const SelectLocaleLanguage = (state: RootState): LocalLanguageState =>
  state.localLanguage;

export default localeLanguageSlice;
