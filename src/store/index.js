import { configureStore, } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

const middlewares = [thunk];

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares
});

let persistor = persistStore(store);

export {
  store,
  persistor,
};
