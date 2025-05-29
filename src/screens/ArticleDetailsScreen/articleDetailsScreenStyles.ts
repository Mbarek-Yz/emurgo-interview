import {colors} from '_utils/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '_utils/constants';
import {FontSizes} from '_utils/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    position: 'relative',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT / 2,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    justifyContent: 'flex-end',
    bottom: 0,
  },
  overlayContent: {
    gap: 12,
    padding: 8,
  },
  authorText: {
    color: colors.WHITE,
    fontSize: FontSizes.FONT_SIZE_BASE_3,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  titleText: {
    color: colors.LIGHT_GREY_BORDER,
    fontSize: FontSizes.FONT_SIZE_HEADER_4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sourceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  overlayText: {
    color: colors.WHITE,
    fontSize: FontSizes.FONT_SIZE_META,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  infos: {
    backgroundColor: colors.WHITE,
    flex: 1,
    marginTop: -30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  title: {
    fontSize: FontSizes.FONT_SIZE_BASE_3,
    color: colors.BLACK,
    fontWeight: '600',
  },
  paragraph: {
    fontSize: FontSizes.FONT_SIZE_BASE_2,
    color: colors.GREY_MEDIUM,
    lineHeight: 32.6,
  },
});

export default styles;
