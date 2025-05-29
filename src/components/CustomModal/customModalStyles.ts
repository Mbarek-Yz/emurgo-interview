import {colors} from '_utils/colors';
import {SCREEN_HEIGHT, TOUCHABLE_OPACITY_HIT_SLOP} from '_utils/constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: colors.WHITE,
    padding: 12,
    alignItems: 'flex-start',
    width: '80%',
    borderWidth: 2,
    borderTopColor: colors.GREY_LIGHT,
    borderRightColor: colors.GREY_LIGHT,
    borderLeftColor: colors.GREY_LIGHT,
    borderBottomColor: colors.GREY_LIGHT,
  },
  borderModalContent: {
    borderWidth: 16,
    borderColor: colors.GREY_MEDIUM,
  },
  button: {
    width: 20,
    height: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    height: 20,
  },
  hitSlop: {
    top: TOUCHABLE_OPACITY_HIT_SLOP,
    bottom: TOUCHABLE_OPACITY_HIT_SLOP,
    left: TOUCHABLE_OPACITY_HIT_SLOP,
    right: TOUCHABLE_OPACITY_HIT_SLOP,
  },
  title: {
    fontSize: 24,
    color: colors.TEXT_DEFAULT,
    lineHeight: 32,
  },
  scrollContainer: {
    maxHeight: SCREEN_HEIGHT / 2,
  },
  scrollContentContainer: {
    paddingBottom: 10,
  },
});

export default styles;
