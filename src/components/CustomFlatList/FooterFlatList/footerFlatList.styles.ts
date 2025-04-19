import {
  FLAT_LIST_FOOTER_HEIGHT,
  FLAT_LIST_FOOTER_LOADER_HEIGHT
} from '_utils/dimensions';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footerContainer: {
    height: FLAT_LIST_FOOTER_HEIGHT,
    justifyContent: 'center'
  },
  loaderContainer: {
    height: FLAT_LIST_FOOTER_LOADER_HEIGHT,
    justifyContent: 'center'
  }
});
