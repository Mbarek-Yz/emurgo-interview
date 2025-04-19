import React from 'react';
import { Text, View } from 'react-native';

import styles from './customErrorHandler.styles';
import CustomButton from '_components/CustomButton/CustomButton';
import { translate } from '_i18n';

interface CustomErrorHandlerProps {
  errorMessage: string;
  onButtonPress: () => void;
}
const CustomErrorHandler: React.FC<CustomErrorHandlerProps> = ({
  errorMessage,
  onButtonPress
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <CustomButton
        title={translate('global.try_again')}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default CustomErrorHandler;
