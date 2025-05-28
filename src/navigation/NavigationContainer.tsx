import React, {JSX} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '_navigation/RootNavigations';
import {useAppSelector} from '_store/api/store.hooks';
import {selectUser} from '_store/features/user/userSlice';
import HomeStackNavigation from './HomeStackNavigation';

/**
 * Returns the navigation container that englobe App navigation
 * @returns JSX.Element
 */

function Navigation(): JSX.Element {
  const isLoggedIn = useAppSelector(selectUser).isLoggedIn;

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <HomeStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
