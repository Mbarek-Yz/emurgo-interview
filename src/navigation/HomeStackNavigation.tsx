import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Articles} from '_models/Articles/Articles';
import ArticleDetailsScreen from '_screens/ArticleDetailsScreen/ArticleDetailsScreen';
import HomeScreen from '_screens/HomeScreen/HomeScreen';
import {HOME_SCREEN, ARTICLE_DETAILS_SCREEN} from '_utils/screenNames';

import React, {JSX} from 'react';

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
  [ARTICLE_DETAILS_SCREEN]: Articles;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

/**
 * Home Stack Navigation containing the not logged in navigation flow
 * @returns {JSX.Element} The rendered Home Stack Navigation.
 */
const HomeStackNavigation = (): JSX.Element => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={HOME_SCREEN}>
      <HomeStack.Screen name={HOME_SCREEN} component={HomeScreen} />
      <HomeStack.Screen
        name={ARTICLE_DETAILS_SCREEN}
        component={ArticleDetailsScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
