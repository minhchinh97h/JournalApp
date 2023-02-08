import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ROUTE_LIST from '~constants/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_COLOR} from '~constants/styles';

const BottomTabBar = (props: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const {navigation} = props;

  const onGoToJournalScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.JOURNAL);
  }, [navigation]);

  const onGoToDiscoverScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.DISCOVER);
  }, [navigation]);

  const onGoToStatsScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.STATS);
  }, [navigation]);

  const onGoToSettingsScreen = useCallback(() => {
    navigation.navigate(ROUTE_LIST.SETTINGS);
  }, [navigation]);

  const onCreateNewJournalEntry = useCallback(() => {}, []);

  return (
    <View
      style={StyleSheet.compose(styles.container, {
        paddingBottom: insets.bottom,
      })}>
      <TouchableOpacity
        style={styles.screenButton}
        onPress={onGoToJournalScreen}>
        <MaterialIcons name={'my-library-books'} size={32} color={'#61BECB'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.screenButton}
        onPress={onGoToDiscoverScreen}>
        <MaterialIcons name={'museum'} size={32} color={'#61BECB'} />
      </TouchableOpacity>

      <View style={styles.entryButtonContainer}>
        <TouchableOpacity
          style={styles.entryButton}
          onPress={onCreateNewJournalEntry}>
          <MaterialIcons name={'add'} size={32} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.screenButton} onPress={onGoToStatsScreen}>
        <MaterialIcons name={'bar-chart'} size={32} color={'#61BECB'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.screenButton}
        onPress={onGoToSettingsScreen}>
        <MaterialIcons name={'settings'} size={32} color={'#61BECB'} />
      </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: -1,
      height: 5,
    },
    shadowRadius: 19,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 1,
  },
  screenButton: {
    width: 48,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  entryButtonContainer: {position: 'relative', width: 60, height: 60},
  entryButton: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: LIGHT_COLOR.BLUE_GREEN,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowColor: '#000000',
    top: -14,
  },
});
