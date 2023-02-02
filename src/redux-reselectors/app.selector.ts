import {createSelector} from 'reselect';
import {AppReducer} from '~defined-types/app.type';

const getAppReducer = (state: AppReducer) => state;

export const getAppTheme = createSelector(getAppReducer, r => r.theme);
