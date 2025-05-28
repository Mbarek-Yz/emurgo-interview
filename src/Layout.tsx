import {SafeAreaView} from 'react-native';
import React from 'react';

import Navigation from '_navigation/NavigationContainer';

const Layout = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default Layout;
