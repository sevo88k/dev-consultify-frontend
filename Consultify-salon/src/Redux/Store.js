import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/user/authSlice";
import myAccountReducer from "./Reducers/user/salonSlice";
export const store = configureStore({
  reducer: {
    userAuth: userReducer,
    myaccount: myAccountReducer
  },
});
