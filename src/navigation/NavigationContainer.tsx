import React, {JSX} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '_navigation/RootNavigations';
import {useAppSelector} from '_store/api/store.hooks';
import {selectUser} from '_store/features/user/userSlice';
import HomeStackNavigation from './HomeStackNavigation';
import LoginScreen from '_screens/LoginScreen/LoginScreen';

/**
 * Returns the navigation container that englobe App navigation
 * @returns JSX.Element
 */

function Navigation(): JSX.Element {
  const isLoggedIn = useAppSelector(selectUser).isLoggedIn;

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        {isLoggedIn ? <HomeStackNavigation /> : <LoginScreen />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
