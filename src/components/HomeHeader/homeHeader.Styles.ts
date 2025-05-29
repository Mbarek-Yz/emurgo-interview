import {colors} from '_utils/colors';
import {HITSLOP_DIMENSION, LineHeights} from '_utils/dimensions';
import {FontSizes} from '_utils/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  usernameText: {
    fontSize: FontSizes.FONT_SIZE_HEADER_4,
    fontWeight: '500',
    color: colors.BLACK,
    textTransform: 'capitalize',
  },
  welcomeText: {
    lineHeight: LineHeights.LINE_HEIGHT_1,
    color: colors.NEUTRAL_GREY,
  },
  hitslop: {
    top: HITSLOP_DIMENSION,
    bottom: HITSLOP_DIMENSION,
    left: HITSLOP_DIMENSION,
    right: HITSLOP_DIMENSION,
  },
});
