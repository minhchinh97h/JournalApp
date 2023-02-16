import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from '~components/Header';
import JournalEntry from '~components/JournalEntry';
import {LIGHT_COLORS} from '~constants/styles';

const JournalEntryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Entry" />

      <JournalEntry />
    </SafeAreaView>
  );
};

export default React.memo(JournalEntryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLORS.BACKGROUND,
  },
});
