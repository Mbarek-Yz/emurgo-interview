import {colors} from '_utils/colors';
import {FontSizes} from '_utils/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 15,
    backgroundColor: colors.WHITE,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 15,
  },
  infos: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 2,
    flex: 1,
  },
  title: {
    fontSize: FontSizes.FONT_SIZE_BASE,
    color: colors.BLACK,
    fontWeight: '600',
  },
  description: {
    fontSize: FontSizes.FONT_SIZE_META,
    color: colors.GREY_MEDIUM,
    maxWidth: 220,
  },
  content: {
    fontSize: FontSizes.FONT_SIZE_META,
    color: colors.BLACK,
  },
  seeMore: {
    fontSize: FontSizes.FONT_SIZE_META,
    alignSelf: 'flex-end',
  },
});

export default styles;
