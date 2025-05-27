import {View, Text, Button} from 'react-native';
import React from 'react';
import useLogin from '_hooks/useLogin';

const LoginScreen: React.FC = () => {
  const {handleLogin} = useLogin();
  const onLoginPress = () => {
    handleLogin('emilys', 'emilyspass');
  };
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title="Login" onPress={onLoginPress} />
    </View>
  );
};

export default LoginScreen;
