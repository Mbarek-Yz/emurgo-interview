import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {translate} from '_i18n';
import styles from './homeHeader.Styles';

interface HomeHeaderProps {
  username?: string | null;
  icon: React.ReactNode;
  onIconPress: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  icon,
  username,
  onIconPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View>
        {!!username && <Text style={styles.usernameText}>Username</Text>}
        <Text style={styles.welcomeText}>Welcome</Text>
      </View>
      <TouchableOpacity onPress={onIconPress} style={styles.hitslop}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
