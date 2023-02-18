import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputSelectionChangeEventData,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {TextSize} from '~defined-types/text-formatting.type';
import {
  updateTextFormattingContent,
  updateTextFormattingSelection,
} from '~redux-actions/text-formatting.action';
import {
  getTextFormattingContent,
  getTextFormattingSelectedStyles,
  getTextFormattingSelectedTextSize,
} from '~redux-reselectors/text-formatting.selector';

interface Props {
  headingContent?: string;
}

const JournalEntrySection = (props: Props) => {
  const dispatch = useDispatch();

  const textFormattingContent = useSelector(getTextFormattingContent);
  const textFormattingSelectedTextSize = useSelector(
    getTextFormattingSelectedTextSize,
  );
  const textFormattingSelectedStyles = useSelector(
    getTextFormattingSelectedStyles,
  );

  const {headingContent} = props;

  const [textArray, setTextArray] = useState([
    <Text key={`text-at-${Date.now()}`}>{textFormattingContent}</Text>,
  ]);

  const textSelectionRef = useRef<{start: number; end: number}>({
    start: 0,
    end: 0,
  });

  const onChangeContent = useCallback(
    (value: string) => {
      dispatch(updateTextFormattingContent(value));
    },
    [dispatch],
  );

  const onSelectionChange = useCallback(
    (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
      textSelectionRef.current = e.nativeEvent.selection;

      //   dispatch(updateTextFormattingSelection(e.nativeEvent.selection));
    },
    [],
  );

  useEffect(() => {
    console.log('textFormattingContent', textFormattingContent);
  }, [textFormattingContent]);

  return (
    <View style={styles.container}>
      {headingContent && (
        <>
          <Text>{headingContent}</Text>

          <View style={styles.verticalSpacer} />
        </>
      )}

      <TextInput
        style={[styles.input, {backgroundColor: 'yellow'}]}
        multiline={true}
        scrollEnabled={false}
        onChangeText={onChangeContent}
        onSelectionChange={onSelectionChange}>
        {textArray}
      </TextInput>
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
    width: 100,
  },

  verticalSpacer: {
    height: 8,
  },
});
