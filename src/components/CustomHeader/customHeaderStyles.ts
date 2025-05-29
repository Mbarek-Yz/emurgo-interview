import {colors} from '_utils/colors';
import {
  CUSTOM_HEADER_HEIGHT,
  HITSLOP_DIMENSION,
  LineHeights,
} from '_utils/dimensions';
import {FontSizes} from '_utils/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: CUSTOM_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: FontSizes.FONT_SIZE_HEADER_3,
    color: colors.BLACK,
    lineHeight: LineHeights.LINE_HEIGHT_3,
    fontWeight: '500',
  },
  hitSlop: {
    top: HITSLOP_DIMENSION,
    bottom: HITSLOP_DIMENSION,
    left: HITSLOP_DIMENSION,
    right: HITSLOP_DIMENSION,
  },
});

export default styles;
