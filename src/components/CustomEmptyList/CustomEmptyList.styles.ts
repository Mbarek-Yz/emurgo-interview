import { colors } from '_utils/colors';
import { FontSizes } from '_utils/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  titleText: {
    fontSize: FontSizes.FONT_SIZE_BASE_2,
    fontWeight: '600',
    color: colors.BLACK
  },
  descriptionText: {
    fontSize: FontSizes.FONT_SIZE_META_2,
    color: colors.BLACK
  }
});
