import React from 'react';
import { Text, View } from 'react-native';

import { translate } from '_i18n';

import styles from './CustomEmptyList.styles';

interface CustomEmptyListProps {
  title?: string;
  description?: string;
}

const CustomEmptyList: React.FC<CustomEmptyListProps> = ({
  title = translate('global.empty_list.title'),
  description = translate('global.empty_list.description')
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default CustomEmptyList;
