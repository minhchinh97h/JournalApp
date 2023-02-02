import {AppTheme} from '~defined-types/app.type';

export const UPDATE_APP_THEME = 'UPDATE_APP_THEME';

export const updateAppTheme = (payload: AppTheme) => ({
  type: UPDATE_APP_THEME,
  payload,
});
