import React from 'react';
import { View } from 'react-native';

import styles from './emptyListFlatList.styles';
import CustomEmptyList from '_components/CustomEmptyList/CustomEmptyList';

const EmptyListFlatList = () => {
  return (
    <View style={styles.emptyListContainer}>
      <CustomEmptyList />
    </View>
  );
};

export default EmptyListFlatList;
