import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useAppSelector} from '_store/api/store.hooks';
import {selectUser} from '_store/features/user/userSlice';
import HomeScreen from '_screens/HomeScreen/HomeScreen';
import LoginScreen from '_screens/LoginScreen/LoginScreen';

const Layout = () => {
  const isLoggedIn = useAppSelector(selectUser).isLoggedIn;
  return (
    <SafeAreaView>{isLoggedIn ? <HomeScreen /> : <LoginScreen />}</SafeAreaView>
  );
};

export default Layout;
