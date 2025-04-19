import React, {useState} from 'react';
import {
  View,
  TextInput,
  type StyleProp,
  type ViewStyle,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from './customTextInput.styles';
import {colors} from '_utils/colors';
import CustomDivider from '_components/CustomDivider/CustomDivider';
import {HeightDimentions} from '_utils/dimensions';
import {EyeIcon} from '_assets/drawables';

interface CustomTextInputProps {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  extraStyles?: StyleProp<ViewStyle>;
  onBlur?: () => void;
  label?: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  onChangeText,
  text,
  placeholder,
  secureTextEntry = false,
  extraStyles,
  onBlur,
  label,
}) => {
  const [isVisible, setIsVisible] = useState(secureTextEntry);
  const handleInputVisibilty = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {!!label && (
        <View>
          <Text style={styles.label}>{label}</Text>
          <CustomDivider height={HeightDimentions.HEIGHT_DIVIDER_1} />
        </View>
      )}
      <View style={[styles.container, extraStyles]}>
        <TextInput
          placeholderTextColor={colors.GREY_LIGHT}
          value={text}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={isVisible}
          onBlur={onBlur}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={handleInputVisibilty} style={styles.icon}>
            <EyeIcon stroke={colors.GREY_MEDIUM} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default CustomTextInput;
