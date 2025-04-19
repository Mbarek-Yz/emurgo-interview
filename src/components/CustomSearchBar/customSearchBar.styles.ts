import { StyleSheet } from 'react-native';

import { colors } from '_utils/colors';
import { IS_IOS } from '_utils/constants';
import { FontSizes } from '_utils/fonts';
import { SEARCH_ICONS_DIMENTION } from '_utils/dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE_BACKGROUND,
    paddingHorizontal: 16,
    paddingVertical: IS_IOS ? 14 : 4,
    borderRadius: 22,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  zeroOpacity: { opacity: 0 },
  closeIcon: {
    width: SEARCH_ICONS_DIMENTION,
    height: SEARCH_ICONS_DIMENTION,
    tintColor: colors.NEUTRAL_GREY
  },
  textInput: {
    fontSize: FontSizes.FONT_SIZE_BASE_2,
    flex: 1,
    textAlignVertical: 'center',
    color: colors.BLACK
  },
  loopIcon: {
    width: SEARCH_ICONS_DIMENTION,
    height: SEARCH_ICONS_DIMENTION,
    tintColor: colors.NEUTRAL_GREY
  }
});
