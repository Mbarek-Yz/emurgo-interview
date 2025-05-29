import React, {JSX} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './customHeaderStyles';

interface CustomHeaderProps {
  label: string;
  onLeftIconPress: () => void;
  LeftDotsIconComponent: React.FC;
}

const CustomHeader = ({
  label,
  onLeftIconPress,
  LeftDotsIconComponent,
}: CustomHeaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={styles.hitSlop} onPress={onLeftIconPress}>
        <LeftDotsIconComponent />
      </TouchableOpacity>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View />
    </View>
  );
};

export default CustomHeader;
