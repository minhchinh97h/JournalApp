import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import JournalEntrySection from './JournalEntry.Section';

const JournalEntry = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <JournalEntrySection headingContent={'What you doing?'} />

      <View style={styles.verticalSpacer} />

      <View style={styles.verticalSpacer} />

      {/* <JournalEntrySection headingContent={'What you doing?'} /> */}
    </ScrollView>
  );
};

export default React.memo(JournalEntry);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  contentContainer: {
    paddingTop: 16,
    paddingBottom: 32,
  },

  verticalSpacer: {
    height: 8,
  },
});
