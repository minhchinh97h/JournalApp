import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
