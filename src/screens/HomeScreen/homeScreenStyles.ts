import {colors} from '_utils/colors';
import {FontSizes} from '_utils/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.WHITE_BACKGROUND,
  },
  listContainer: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: FontSizes.FONT_SIZE_BASE_3,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  itemContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: FontSizes.FONT_SIZE_BASE_2,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  description: {
    fontSize: FontSizes.FONT_SIZE_META_2,
    color: '#666',
    marginBottom: 4,
  },
  source: {
    fontSize: FontSizes.FONT_SIZE_META,
    color: '#999',
    fontStyle: 'italic',
  },
  languagePickerContainer: {
    alignSelf: 'flex-end',
  },
});

export default styles;
