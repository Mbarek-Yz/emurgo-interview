import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {translate} from '_i18n';
import styles from './homeHeader.Styles';

interface HomeHeaderProps {
  username: string | undefined;
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
        {!!username && (
          <Text style={styles.usernameText}>
            {translate('home.hi')} {username}
          </Text>
        )}
        <Text style={styles.welcomeText}>{translate('home.welcome')}</Text>
      </View>
      <TouchableOpacity onPress={onIconPress} style={styles.hitslop}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
