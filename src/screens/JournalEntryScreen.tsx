import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Header from '~components/Header';

const JournalEntryScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Entry" />
      <View style={{width: '100%', flex: 1}}></View>
    </SafeAreaView>
  );
};

export default React.memo(JournalEntryScreen);
