import React from 'react';
import { Text, View } from 'react-native';
import { type ToastConfig } from 'react-native-toast-message';

import { styles } from './toastConfigStyles';

export enum ToastType {
  Success = 'success',
  Error = 'error',
  Custom = 'custom'
}

export const toastConfig: ToastConfig = {
  success: ({ text1, text2, isVisible }) => {
    if (isVisible) {
      return (
        <View style={[styles.container, styles.successContainer]}>
          <Text style={styles.text1}>{text1}</Text>
          {text2 && <Text style={styles.text2}>{text2}</Text>}
        </View>
      );
    }
    return <></>;
  },
  error: ({ text1, text2, isVisible }) => {
    if (isVisible) {
      return (
        <View style={[styles.container, styles.errorContainer]}>
          <Text style={styles.text1}>{text1}</Text>
          {text2 && <Text style={styles.text2}>{text2}</Text>}
        </View>
      );
    }
    return <></>;
  },
  custom: ({ text1, text2, isVisible }) => {
    if (isVisible) {
      return (
        <View style={[styles.container, styles.customToastContainer]}>
          <Text style={styles.text1}>{text1}</Text>
          {text2 && <Text style={styles.text2}>{text2}</Text>}
        </View>
      );
    }
    return <></>;
  }
};
