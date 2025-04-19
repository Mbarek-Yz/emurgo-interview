import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { type RootState } from '../../store';

// Defines popup config interface containing accepted attributes
export interface PopupConfigState {
  isVisible: boolean;
  isGlobal?: boolean;

  title: string;
  message?: string;

  confirmText?: string;
  confirmCallback?: () => void | Promise<void>;

  cancelText?: string;
  cancelCallback?: () => void | Promise<void>;
}

// Define the initial state using that type
const initialState: PopupConfigState = {
  title: '',
  isVisible: false,
  isGlobal: true,
  cancelCallback: undefined,
  cancelText: undefined,
  confirmCallback: undefined,
  confirmText: undefined,
  message: undefined
};

/**
 * Creates a slice for handling popup state
 */
export const popupSlice = createSlice({
  name: 'popUp',
  initialState,
  reducers: {
    setPopupConfig: (
      state: PopupConfigState,
      action: PayloadAction<PopupConfigState>
    ) => {
      return { ...state, ...action.payload };
    },
    closePopup: (state: PopupConfigState) => {
      return initialState;
    }
  }
});

// Export popup actions
export const { setPopupConfig, closePopup } = popupSlice.actions;

// Export popup state selector
export const selectPopupConfig = (state: RootState): PopupConfigState =>
  state.popup;

export default popupSlice;
