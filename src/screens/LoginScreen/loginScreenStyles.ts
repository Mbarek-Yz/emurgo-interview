import { colors } from '_utils/colors';
import { FontSizes } from '_utils/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.WHITE,
    alignContent: 'center'
  },
  input: {
    paddingHorizontal: 20
  },
  errorText: {
    color: colors.RED_ERROR
  },
  title: {
    fontSize: FontSizes.FONT_SIZE_HEADER_3,
    fontWeight: '500'
  },
  login: {
    fontSize: FontSizes.FONT_SIZE_HEADER_3,
    fontWeight: '400',
    alignSelf: 'center'
  },
  titleContainer: {
    alignSelf: 'center'
  },
  image: {
    alignSelf: 'center'
  },
  extraStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
