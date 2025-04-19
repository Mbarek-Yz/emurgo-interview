import { colors } from '_utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loaderContainer: {
    backgroundColor: colors.OVERLAY,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  }
});
