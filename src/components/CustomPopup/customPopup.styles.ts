import { StyleSheet } from 'react-native';

import { colors } from '_utils/colors';
import { CUSTOM_POPUP_MIN_HEIGHT } from '_utils/dimensions';
import { FontSizes } from '_utils/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.OVERLAY,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    width: '100%',
    borderRadius: 12,
    padding: 16,
    zIndex: 9999,
    minHeight: CUSTOM_POPUP_MIN_HEIGHT,
    gap: 16
  },
  titleText: {
    fontSize: FontSizes.FONT_SIZE_HEADER_3,
    color: colors.BLACK,
    textAlign: 'center'
  },
  contentText: {
    fontSize: FontSizes.FONT_SIZE_META_2,
    color: colors.BLACK,
    textAlign: 'center'
  },
  buttonsContainer: {
    gap: 16,
    alignItems: 'center'
  }
});
