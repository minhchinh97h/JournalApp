import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  headingContent?: string;
}

const JournalEntrySection = (props: Props) => {
  const {headingContent} = props;

  return (
    <View style={styles.container}>
      {headingContent && (
        <>
          <Text>{headingContent}</Text>

          <View style={styles.verticalSpacer} />
        </>
      )}

      {/* <TextInput
        style={[styles.input, {backgroundColor: 'yellow'}]}
        multiline={true}
        scrollEnabled={false}
        onChangeText={onChangeContent}
        onSelectionChange={onSelectionChange}>
        {textArray}
      </TextInput> */}
    </View>
  );
};

export default React.memo(JournalEntrySection);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input: {
    fontSize: 16,
    padding: 0,
    margin: 0,
  },

  verticalSpacer: {
    height: 8,
  },
});
