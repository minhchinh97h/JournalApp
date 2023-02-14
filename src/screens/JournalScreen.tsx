import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import AppText, {TextType} from '~components/AppText';
import QuoteCard from '~components/QuoteCard';

const JournalScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Journal</Text>

        <AppText fontSize={16} type={TextType.H1} content="Hie" />
        <QuoteCard title="Test" content="afasdf" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(JournalScreen);
