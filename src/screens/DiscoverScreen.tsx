import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const DiscoverScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Discover</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DiscoverScreen);
