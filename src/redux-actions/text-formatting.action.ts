import {TextStyle} from 'react-native';
import {TextSelection, TextSize} from '~defined-types/text-formatting.type';

export const UPDATE_TEXT_FORMATTING_CONTENT = 'UPDATE_TEXT_FORMATTING_CONTENT';

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
