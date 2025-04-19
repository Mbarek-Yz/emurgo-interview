import {
  type PopupConfigState,
  setPopupConfig,
} from '_store/features/popup/popupSlice';
import {store} from '_store/store';

export const showPopup = (
  params: Omit<PopupConfigState, 'isVisible'>,
): void => {
  store.dispatch(
    setPopupConfig({
      ...params,
      isVisible: true,
    }),
  );
};
