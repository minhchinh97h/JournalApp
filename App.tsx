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
import QuoteCard from './src/components/QuoteCard';
import RootRoute from '~screens/RootRoute';

const App = () => {
  return (
    return <RootRoute />;
    <SafeAreaView style={{backgroundColor: '#ECF0F8'}}>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        <AppText fontSize={16} type={TextType.H1} content="Hie" />
        <QuoteCard title="Test" content="afasdf" />
      </View>
    </SafeAreaView>
};

export default App;
