import React, {useCallback, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  headingContent?: string;
}

const JournalEntrySection = (props: Props) => {
  const {headingContent} = props;

  const [content, setContent] = useState('');

  const onChangeContent = useCallback((value: string) => {
    setContent(value);
  }, []);

  return (
    <View style={styles.container}>
      {headingContent && (
        <>
          <Text>{headingContent}</Text>

          <View style={styles.verticalSpacer} />
        </>
      )}

      <TextInput
        value={content}
        onChangeText={onChangeContent}
        style={styles.input}
        multiline={true}
        scrollEnabled={false}
      />
    </View>
  );
};

export default React.memo(JournalEntrySection);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  input: {
    backgroundColor: 'yellow',
    fontSize: 16,
    padding: 0,
    margin: 0,
  },

  verticalSpacer: {
    height: 8,
  },
});
