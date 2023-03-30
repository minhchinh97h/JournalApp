import {PersistConfig, Storage} from 'redux-persist';
import {AppReducer} from './app.type';
import {JournalReducer} from './journal.type';

export interface RootReducer {
  appReducer: AppReducer;
  journalReducer: JournalReducer;
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
