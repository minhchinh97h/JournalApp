import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ROUTE_LIST from '~constants/routes';
import DiscoverScreen from './DiscoverScreen';
import JournalScreen from './JournalScreen';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import StatsScreen from './StatsScreen';
import BottomTabBar from '~components/BottomTabBar';
import {useCallback} from 'react';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabBar = useCallback((props: BottomTabBarProps) => {
    return <BottomTabBar {...props} />;
  }, []);

  return (
    <BottomTab.Navigator
      tabBar={tabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name={ROUTE_LIST.JOURNAL} component={JournalScreen} />
      <BottomTab.Screen name={ROUTE_LIST.DISCOVER} component={DiscoverScreen} />
      <BottomTab.Screen name={ROUTE_LIST.STATS} component={StatsScreen} />
      <BottomTab.Screen name={ROUTE_LIST.SETTINGS} component={SettingsScreen} />
    </BottomTab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const RootRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTE_LIST.MAIN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTE_LIST.HOME} component={HomeScreen} />
        <Stack.Screen name={ROUTE_LIST.MAIN} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootRoute);
