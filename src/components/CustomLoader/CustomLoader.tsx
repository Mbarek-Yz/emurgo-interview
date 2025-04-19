import React, {JSX} from 'react';
import {colors} from '_utils/colors';
import {ActivityIndicator} from 'react-native';
import styles from './customLoader.styles';

const CustomLoader = (): JSX.Element => {
  return (
    <ActivityIndicator
      style={styles.loader}
      color={colors.PRIMARY}
      size="large"
    />
  );
};

export default CustomLoader;
