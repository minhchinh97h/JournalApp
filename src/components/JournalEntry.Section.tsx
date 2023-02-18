import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputSelectionChangeEventData,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  FormattedCharacter,
  FormattedText,
  TextSelection,
  TextSize,
} from '~defined-types/text-formatting.type';
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
  const {headingContent} = props;

  const dispatch = useDispatch();

  const textFormattingContent = useSelector(getTextFormattingContent);
  const textFormattingSelectedTextSize = useSelector(
    getTextFormattingSelectedTextSize,
  );
  const textFormattingSelectedStyles = useSelector(
    getTextFormattingSelectedStyles,
  );

  const lastCharacterRef = useRef<string>('');
  const formattedArrayRef = useRef<FormattedCharacter[]>([]);
  const textSelectionRef = useRef<TextSelection>({
    start: 0,
    end: 0,
  });

  const [textArray, setTextArray] = useState([
    <Text key={`text-at-${Date.now()}`}>{textFormattingContent}</Text>,
  ]);

  const onChangeContent = useCallback(
    (value: string) => {
      let targetIndex = 0;

      // Deleting
      if (textFormattingContent.length > value.length) {
        targetIndex = textSelectionRef.current.start - 1;
      }
      // Adding
      else {
        targetIndex = textSelectionRef.current.start;
      }

      lastCharacterRef.current = value.substring(value.length - 1);

      dispatch(updateTextFormattingContent(value));

      const formattedCharacter: FormattedCharacter = {
        index: targetIndex,
        size: textFormattingSelectedTextSize,
        styles: textFormattingSelectedStyles,
      };
    },
    [dispatch],
  );

  const onSelectionChange = useCallback(
    (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
      textSelectionRef.current = e.nativeEvent.selection;

      dispatch(updateTextFormattingSelection(e.nativeEvent.selection));
    },
    [dispatch],
  );

  useEffect(() => {
    setTextArray([
      <Text key={`text-at-${Date.now()}`}>{textFormattingContent}</Text>,
    ]);
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
  },

  verticalSpacer: {
    height: 8,
  },
});
