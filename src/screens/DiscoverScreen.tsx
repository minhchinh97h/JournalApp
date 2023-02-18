import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import DiscoverCard from '~components/DiscoverCard';

const DiscoverScreen = () => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <Text>Discover</Text>
        <DiscoverCard title="Templates" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DiscoverScreen);
