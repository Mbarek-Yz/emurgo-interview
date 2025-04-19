import React from 'react';
import { Modal, Text, View } from 'react-native';

import CustomButton from '_components/CustomButton/CustomButton';
import styles from '_components/CustomPopup/customPopup.styles';

import {
  type PopupConfigState,
  closePopup
} from '_store/features/popup/popupSlice';

import { useAppDispatch } from '_store/api/store.hooks';

interface PopupProps extends PopupConfigState {}

const CustomPopup: React.FC<PopupProps> = ({
  isVisible,
  title,
  cancelCallback,
  confirmCallback,
  cancelText,
  message,
  confirmText
}) => {
  const dispatch = useAppDispatch();

  const confirmCallbackLocal = (): void => {
    dispatch(closePopup());
    void confirmCallback?.();
  };
  const cancelCallbackLocal = (): void => {
    dispatch(closePopup());
    void cancelCallback?.();
  };
  return (
    <Modal transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {message && <Text style={styles.contentText}>{message}</Text>}
          {(!!confirmText || !!cancelText) && (
            <View style={styles.buttonsContainer}>
              {confirmText && (
                <CustomButton
                  title={confirmText}
                  onPress={confirmCallbackLocal}
                />
              )}
              {!!cancelText && (
                <CustomButton
                  isOutlined
                  title={cancelText}
                  onPress={cancelCallbackLocal}
                />
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomPopup;
