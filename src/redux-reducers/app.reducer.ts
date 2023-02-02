import produce from 'immer';
import {AppReducer, AppTheme} from '~defined-types/app.type';
import {AppReduxAction} from '~defined-types/redux.type';
import {UPDATE_APP_THEME} from '~redux-actions/app.action';

const INITIAL_STATE: AppReducer = {
  theme: AppTheme.LIGHT,
};

const appReducer = produce((draft, action: AppReduxAction) => {
  const {type, payload} = action;

  switch (type) {
    case UPDATE_APP_THEME:
      draft.theme = payload as AppTheme;
  }
}, INITIAL_STATE);

export default appReducer;
