import React from 'react';
import {
  type DimensionValue,
  Text,
  TouchableOpacity,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import styles from './customButton.styles';
import {colors} from '_utils/colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  width?: DimensionValue;
  isOutlined?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  width,
  isOutlined,
}) => {
  const containerStyle: StyleProp<ViewStyle> = isOutlined
    ? styles.outlinedContainer
    : styles.notOutlinedContainer;
  const titleStyle: StyleProp<TextStyle> = isOutlined
    ? {color: colors.PRIMARY}
    : {color: colors.WHITE};

  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        {
          width,
        },
      ]}
      onPress={onPress}>
      <Text style={[styles.titleText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
