import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const StatsScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Stats</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(StatsScreen);
