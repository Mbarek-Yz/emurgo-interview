import {type PopupConfigState} from '_store/features/popup/popupSlice';

export interface HandleErrorPopUpParams
  extends Pick<
    PopupConfigState,
    'confirmText' | 'cancelText' | 'cancelCallback' | 'confirmCallback'
  > {
  error: unknown;
}
