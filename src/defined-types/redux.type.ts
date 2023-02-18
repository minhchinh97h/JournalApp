import {PersistConfig, Storage} from 'redux-persist';
import {AppReducer} from './app.type';
import {TextFormattingReducer} from './text-formatting.type';

export interface RootReducer {
  appReducer: AppReducer;
  textFormattingReducer: TextFormattingReducer;
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

export type GetState = () => RootReducer;
