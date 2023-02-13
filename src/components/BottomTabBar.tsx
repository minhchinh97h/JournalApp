import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ROUTE_LIST from '~constants/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_COLORS} from '~constants/styles';
import BottomTabBarButton from './BottomTabBar.Button';

const BottomTabBar = (props: BottomTabBarProps) => {
  const {navigation} = props;

  const insets = useSafeAreaInsets();

  const [screen, setScreen] = useState(ROUTE_LIST.JOURNAL);

  const onGoToJournalScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.JOURNAL);

    setScreen(ROUTE_LIST.JOURNAL);
  }, [navigation]);

  const onGoToDiscoverScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.DISCOVER);

    setScreen(ROUTE_LIST.DISCOVER);
  }, [navigation]);

  const onGoToStatsScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.STATS);

    setScreen(ROUTE_LIST.STATS);
  }, [navigation]);

  const onGoToSettingsScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.SETTINGS);

    setScreen(ROUTE_LIST.SETTINGS);
  }, [navigation]);

  const onGoToJournalEntryScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.JOURNAL_ENTRY);
  }, [navigation]);

  return (
    <View
      style={StyleSheet.compose(styles.container, {
        paddingBottom: insets.bottom,
      })}>
      <BottomTabBarButton
        icon={
          <MaterialIcons
            name={'my-library-books'}
            size={32}
            color={
              screen === ROUTE_LIST.JOURNAL
                ? LIGHT_COLORS.BLUE_GREEN
                : LIGHT_COLORS.GRAY
            }
          />
        }
        onPress={onGoToJournalScreen}
      />

      <BottomTabBarButton
        icon={
          <MaterialIcons
            name={'museum'}
            size={32}
            color={
              screen === ROUTE_LIST.DISCOVER
                ? LIGHT_COLORS.BLUE_GREEN
                : LIGHT_COLORS.GRAY
            }
          />
        }
        onPress={onGoToDiscoverScreen}
      />

      <View style={styles.entryButtonContainer}>
        <TouchableOpacity
          style={styles.entryButton}
          onPress={onGoToJournalEntryScreen}>
          <MaterialIcons name={'add'} size={32} color={LIGHT_COLORS.WHITE} />
        </TouchableOpacity>
      </View>

      <BottomTabBarButton
        icon={
          <MaterialIcons
            name={'bar-chart'}
            size={32}
            color={
              screen === ROUTE_LIST.STATS
                ? LIGHT_COLORS.BLUE_GREEN
                : LIGHT_COLORS.GRAY
            }
          />
        }
        onPress={onGoToStatsScreen}
      />

      <BottomTabBarButton
        icon={
          <MaterialIcons
            name={'settings'}
            size={32}
            color={
              screen === ROUTE_LIST.SETTINGS
                ? LIGHT_COLORS.BLUE_GREEN
                : LIGHT_COLORS.GRAY
            }
          />
        }
        onPress={onGoToSettingsScreen}
      />
    </View>
  );
};

export default React.memo(BottomTabBar);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    backgroundColor: LIGHT_COLORS.WHITE,
    shadowOffset: {
      width: -1,
      height: 5,
    },
    shadowRadius: 19,
    shadowColor: LIGHT_COLORS.BLACK,
    shadowOpacity: 0.25,
  },
  entryButtonContainer: {position: 'relative', width: 60, height: 60},
  entryButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_COLORS.BLUE_GREEN,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowColor: LIGHT_COLORS.BLACK,
    top: -14,
  },
});
