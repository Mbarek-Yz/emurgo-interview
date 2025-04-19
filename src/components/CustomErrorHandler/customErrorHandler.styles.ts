import { colors } from '_utils/colors';
import { FontSizes } from '_utils/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16
  },
  errorMessage: {
    color: colors.PRIMARY,
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_HEADER_2
  }
});
