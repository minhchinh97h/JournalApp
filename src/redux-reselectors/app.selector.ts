import {createSelector} from 'reselect';
import {RootReducer} from '~defined-types/redux.type';

const getAppReducer = (state: RootReducer) => state.appReducer;

export const getAppTheme = createSelector(getAppReducer, r => {
  return r.theme;
});
