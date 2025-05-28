import {colors} from '_utils/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 100,
    borderWidth: 0.2,
    borderColor: colors.GREY_MEDIUM,
    height: 40,
    padding: 5,
  },
  image: {
    height: 12,
    width: 12,
  },
  separator: {
    width: 6,
  },
  label: {
    color: colors.BLACK,
  },
});

export default styles;
