/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import KeyboardUtilityBar from '~components/Keyboard.UtilityBar';
import RootRoute from '~screens/RootRoute';

const App = () => {
  return (
    <View style={styles.container}>
      <RootRoute />

      <KeyboardUtilityBar />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
});
