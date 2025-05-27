import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {store} from '_store/store';

import Layout from './Layout';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.appContainer}>
        <Provider store={store}>
          <Layout />
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
