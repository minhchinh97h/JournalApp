import {createSelector} from 'reselect';
import {RootReducer} from '~defined-types/redux.type';

const getTextFormattingReducer = (state: RootReducer) =>
  state.textFormattingReducer;

export const getTextFormattingContent = createSelector(
  getTextFormattingReducer,
  r => {
    return r.content;
  },
);

export const getTextFormattingFormattedArray = createSelector(
  getTextFormattingReducer,
  r => {
    return r.formattedArray;
  },
);

export const getTextFormattingSelection = createSelector(
  getTextFormattingReducer,
  r => {
    return r.selection;
  },
);

export const getTextFormattingSelectedTextSize = createSelector(
  getTextFormattingReducer,
  r => {
    return r.selectedTextSize;
  },
);

export const getTextFormattingSelectedStyles = createSelector(
  getTextFormattingReducer,
  r => {
    return r.selectedTextStyles;
  },
);
