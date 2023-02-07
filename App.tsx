/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View} from 'react-native';
import AppCard from '~components/AppCard';
import AppText, {TextType} from './src/components/AppText';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#ECF0F8'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        <AppText fontSize={16} type={TextType.H1} content="Hie" />
        <AppCard
          title="Today’s Prompt"
          content="The thing that I’m excited about today is __________"
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
