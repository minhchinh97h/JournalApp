import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Editor, EditorState} from 'draft-js';

interface Props {
  headingContent?: string;
}

const JournalEntrySection = (props: Props) => {
  const {headingContent} = props;

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty(),
  );

  useEffect(() => {}, []);

  const onEditorStateChange = useCallback((state: EditorState) => {
    setEditorState(state);
  }, []);

  return (
    <View style={styles.container}>
      {headingContent && (
        <>
          <Text>{headingContent}</Text>

          <View style={styles.verticalSpacer} />
        </>
      )}

      <WebView source={{html: "<div id='editor' />"}} style={{width: '100%'}} />

      {/* <TextInput
        style={[styles.input, {backgroundColor: 'yellow'}]}
        multiline={true}
        scrollEnabled={false}
        onChangeText={onChangeContent}
        onSelectionChange={onSelectionChange}>
        {textArray}
      </TextInput> */}

      <Editor
        editorState={editorState}
        onChange={onEditorStateChange}
        blockRendererFn={Block}
      />
    </View>
  );
};

export default React.memo(JournalEntrySection);

const Block = () => {
  return <View />;
};

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
