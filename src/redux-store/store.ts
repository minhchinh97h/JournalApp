import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '~redux-reducers/root.reducer';

const store = configureStore({reducer: rootReducer});

export const persistor = persistStore(store);
