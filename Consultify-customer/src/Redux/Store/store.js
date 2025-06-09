import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CustomerRestAction from '../Reducers/user/customerSlice.js';

const rootReducer = combineReducers({
  customer:CustomerRestAction
  
});



export const store = configureStore({
  reducer: rootReducer,
  });