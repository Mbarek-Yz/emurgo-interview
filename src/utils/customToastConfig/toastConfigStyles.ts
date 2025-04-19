import { StyleSheet } from 'react-native';

import { colors } from '_utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '90%',
    borderRadius: 12,
    gap: 8,
    justifyContent: 'center'
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.WHITE
  },
  text2: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.WHITE
  },
  customToastContainer: {
    backgroundColor: colors.BLACK
  },
  successContainer: {
    backgroundColor: colors.GREEN_SUCCESS
  },
  errorContainer: {
    backgroundColor: colors.RED_ERROR
  }
});
