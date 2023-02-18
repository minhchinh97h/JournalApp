import produce from 'immer';
import {TextStyle} from 'react-native';
import {GetState} from '~defined-types/redux.type';
import {
  FormattedText,
  TextSelection,
  TextSize,
} from '~defined-types/text-formatting.type';

export const UPDATE_TEXT_FORMATTING_CONTENT = 'UPDATE_TEXT_FORMATTING_CONTENT';

export const UPDATE_TEXT_FORMATTING_FORMATTED_ARRAY =
  'UPDATE_TEXT_FORMATTING_FORMATTED_ARRAY';

export const UPDATE_TEXT_FORMATTING_FORMATTED =
  'UPDATE_TEXT_FORMATTING_FORMATTED';

export const UPDATE_TEXT_FORMATTING_SELECTION =
  'UPDATE_TEXT_FORMATTING_SELECTION';

export const UPDATE_TEXT_FORMATTING_SELECTED_TEXT_SIZE =
  'UPDATE_TEXT_FORMATTING_SELECTED_TEXT_SIZE';

export const UPDATE_TEXT_FORMATTING_SELECTED_TEXT_STYLES =
  'UPDATE_TEXT_FORMATTING_SELECTED_TEXT_STYLES';

export const updateTextFormattingContent = (payload: string) => ({
  type: UPDATE_TEXT_FORMATTING_CONTENT,
  payload,
});

export const updateTextFormattingFormattedArray = (
  payload: FormattedText[],
) => ({
  type: UPDATE_TEXT_FORMATTING_FORMATTED_ARRAY,
  payload,
});

export const updateTextFormattingSelection = (
  payload: TextSelection | undefined,
) => ({
  type: UPDATE_TEXT_FORMATTING_SELECTION,
  payload,
});

export const updateTextFormattingSelectedTextSize = (
  payload: TextSize | undefined,
) => ({
  type: UPDATE_TEXT_FORMATTING_SELECTED_TEXT_SIZE,
  payload,
});

export const updateTextFormattingSelectedTextStyles = (
  payload: TextStyle[],
) => ({
  type: UPDATE_TEXT_FORMATTING_SELECTED_TEXT_STYLES,
  payload,
});

// Should dispatch this action every time switching text styles/size.
export const doUpdateTextFormattingFormattedArray =
  (inputCharacter: string) => (dispatch: any, getState: GetState) => {
    const {
      textFormattingReducer: {
        content,
        selectedTextSize,
        selectedTextStyles,
        selection,
        formattedArray,
      },
    } = getState();

    let newFormattedArray: FormattedText[] = [];

    const start = selection?.start || 0;
    const end = selection?.end || 0;

    if (content.length === 0) {
      const formatted: FormattedText = {
        end,
        size: selectedTextSize,
        styles: selectedTextStyles,
      };

      newFormattedArray.push(formatted);
    } else {
      newFormattedArray = produce(formattedArray, draft => {
        const lastFormatted = formattedArray[formattedArray.length - 1];

        // Continous
        if (start > lastFormatted.end) {
          const formatted: FormattedText = {
            start,
            end,
            size: selectedTextSize,
            styles: selectedTextStyles,
          };
        }
        // Editing
        else {
        }

        for (let i = 0; i < formattedArray.length; i++) {
          const formattedStart = formattedArray[i].start;
          const formattedEnd = formattedArray[i].end;

          if (start > formattedEnd) {
          }
        }
      });
    }
  };
