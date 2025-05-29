import React from 'react';

import Navigation from '_navigation/NavigationContainer';
import {SafeAreaView} from 'react-native-safe-area-context';

const Layout = () => {
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default Layout;
