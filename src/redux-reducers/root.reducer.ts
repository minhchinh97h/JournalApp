import {combineReducers, Reducer} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig, persistReducer} from 'redux-persist';
import {AppReduxPersistConfig, RootReducer} from '~defined-types/redux.type';
import appReducer from './app.reducer';
import textFormattingReducer from './text-formatting.reducer';

const persistConfig: PersistConfig<unknown> = {
  key: 'root',
  storage: AsyncStorage,
};

const makePersisted = (
  config: AppReduxPersistConfig,
  reducer: Reducer<any, any>,
) => {
  return persistReducer({...persistConfig, ...config}, reducer) as Reducer<
    any,
    any
  >;
};

const rootReducer = combineReducers<RootReducer>({
  appReducer: makePersisted({}, appReducer),
  textFormattingReducer: makePersisted({}, textFormattingReducer),
});

export default rootReducer;
