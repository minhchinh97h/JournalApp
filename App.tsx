/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AppText, {TextType} from './src/components/AppText';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#2d2d2d'}}>
      <View style={{width: '100%', height: '100%'}}>
        <AppText type={TextType.H1} />
      </View>
    </SafeAreaView>
  );
};

export default App;
