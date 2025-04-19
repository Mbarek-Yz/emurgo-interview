import { createSlice } from '@reduxjs/toolkit';

import { type RootState } from '_store/store';

interface LoaderState {
  isVisible: boolean;
}

const initialState: LoaderState = {
  isVisible: false
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state: LoaderState) => {
      state.isVisible = true;
    },
    hideLoader: (state: LoaderState) => {
      state.isVisible = false;
    }
  }
});

export const { hideLoader, showLoader } = loaderSlice.actions;

export const selectLoader = (state: RootState): LoaderState => state.loader;

export default loaderSlice;
