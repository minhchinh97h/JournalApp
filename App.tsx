/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import RootRoute from '~screens/RootRoute';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootRoute />
    </SafeAreaView>
  );
};

export default App;
