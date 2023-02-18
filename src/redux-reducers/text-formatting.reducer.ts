import produce from 'immer';
import {AppReduxAction} from '~defined-types/redux.type';
import {
  FormattedText,
  TextFormattingReducer,
  TextSelection,
  TextSize,
  TextStyle,
} from '~defined-types/text-formatting.type';
import {
  UPDATE_TEXT_FORMATTING_CONTENT,
  UPDATE_TEXT_FORMATTING_FORMATTED_ARRAY,
  UPDATE_TEXT_FORMATTING_SELECTED_TEXT_SIZE,
  UPDATE_TEXT_FORMATTING_SELECTED_TEXT_STYLES,
  UPDATE_TEXT_FORMATTING_SELECTION,
} from '~redux-actions/text-formatting.action';

const INITIAL_STATE: TextFormattingReducer = {
  content: '',
  formattedArray: [],
  selection: undefined,
  selectedTextSize: undefined,
  selectedTextStyles: [],
};

const textFormattingReducer = produce((draft, action: AppReduxAction) => {
  const {type, payload} = action;

  switch (type) {
    case UPDATE_TEXT_FORMATTING_CONTENT:
      draft.content = payload as string;
      break;

    case UPDATE_TEXT_FORMATTING_FORMATTED_ARRAY:
      draft.formattedArray = payload as FormattedText[];
      break;

    case UPDATE_TEXT_FORMATTING_SELECTION:
      draft.selection = payload as TextSelection | undefined;
      break;

    case UPDATE_TEXT_FORMATTING_SELECTED_TEXT_SIZE:
      draft.selectedTextSize = payload as TextSize | undefined;
      break;

    case UPDATE_TEXT_FORMATTING_SELECTED_TEXT_STYLES:
      draft.selectedTextStyles = payload as TextStyle[];
      break;
  }
}, INITIAL_STATE);

export default textFormattingReducer;
