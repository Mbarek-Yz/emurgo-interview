import React from 'react';

import CustomLoader from '_components/CustomLoader/CustomLoader';
import styles from './customBlockingLoader.styles';
import {Modal, View} from 'react-native';
interface CustomBlockingLoaderProps {
  isVisible: boolean;
}

const CustomBlockingLoader: React.FC<CustomBlockingLoaderProps> = ({
  isVisible,
}) => {
  if (isVisible) {
    return (
      <Modal transparent visible={isVisible}>
        <View style={styles.loaderContainer}>
          <CustomLoader />
        </View>
      </Modal>
    );
  }
  return <></>;
};

export default CustomBlockingLoader;
