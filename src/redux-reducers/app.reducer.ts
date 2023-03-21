import produce from 'immer';
import {AppReducer, AppTheme} from '~defined-types/app.type';
import {AppReduxAction} from '~defined-types/redux.type';

const INITIAL_STATE: AppReducer = {
  theme: AppTheme.LIGHT,
};

const appReducer = produce((draft, action: AppReduxAction) => {
  const {type, payload} = action;

  switch (type) {
  }
}, INITIAL_STATE);

export default appReducer;
