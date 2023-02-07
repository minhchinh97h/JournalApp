import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ROUTE_LIST from '~constants/routes';

const BottomTabBar = (props: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const {navigation} = props;

  const goToJournalScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.JOURNAL);
  }, [navigation]);

  const goToDiscoverScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.DISCOVER);
  }, [navigation]);

  const goToStatsScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.STATS);
  }, [navigation]);

  const goToSettingsScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.SETTINGS);
  }, [navigation]);

  return (
    <View
      style={{
        width: '100%',
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        shadowOffset: {
          width: -1,
          height: 5,
        },
        shadowRadius: 19,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOpacity: 1,
        paddingBottom: insets.bottom,
      }}>
      <TouchableOpacity onPress={goToJournalScreen}>
        <Text>Journal</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToDiscoverScreen}>
        <Text>Discover</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToStatsScreen}>
        <Text>Stats</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToSettingsScreen}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(BottomTabBar);
