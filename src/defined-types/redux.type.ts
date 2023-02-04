import {PersistConfig, Storage} from 'redux-persist';
import {AppReducer} from './app.type';

export interface RootReducer {
  appReducer: AppReducer;
}

export interface AppReduxAction {
  type: string;
  payload: unknown;
}

export interface AppReduxPersistConfig
  extends Omit<PersistConfig<unknown>, 'key' | 'storage'> {
  key?: string;
  storage?: Storage;
}
