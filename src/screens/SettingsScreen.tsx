import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <Text>Settings</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SettingsScreen);
