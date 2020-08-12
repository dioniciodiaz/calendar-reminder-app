import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import Calendar from "components/Calendar/CalendarSlice";

const PersistConfig = {
  key: 'calendar',
  storage: storage,
  blacklist: []
}

const appReducer = combineReducers({
  calendar: persistReducer(PersistConfig, Calendar),
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
