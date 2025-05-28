import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  global: {
    flexDirection: 'row',
  },
  main: {
    flexDirection: 'row',
  },
  container: {
    borderWidth: 2,
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.GREY_LIGHT,
  },
  selected: {
    height: 14,
    width: 14,
    borderRadius: 14,
    backgroundColor: colors.GREEN_SUCCESS,
  },
  horizontalSeparator: {width: 16},
  verticalSeparator: {height: 27},
  label: {
    color: Colors.TEXT_DEFAULT,
  },
  title: {
    color: Colors.TEXT_DEFAULT,
  },
});

export default styles;
