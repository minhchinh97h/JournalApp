import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const JournalScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Journal</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(JournalScreen);
