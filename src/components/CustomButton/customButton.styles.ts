import { colors } from '_utils/colors';
import { FontSizes } from '_utils/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row'
  },
  notOutlinedContainer: {
    backgroundColor: colors.PRIMARY
  },
  outlinedContainer: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    backgroundColor: colors.WHITE
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: FontSizes.FONT_SIZE_BASE_3
  }
});
