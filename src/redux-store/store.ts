// import {configureStore} from '@reduxjs/toolkit';
import {applyMiddleware, createStore} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '~redux-reducers/root.reducer';

// export const store = configureStore({reducer: rootReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
