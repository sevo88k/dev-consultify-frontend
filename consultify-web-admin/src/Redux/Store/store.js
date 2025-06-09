import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SalonSlice from "../Slice/SalonSlice";
import CustomerSlice from "../Slice/CustomerSlice";
import ManageConsultationSlice from "../Slice/ManageConsultationSlice";
import ContaindicationSlice from "../Slice/ContaindicationSlice";
import AuthSlice from "../Slice/AuthSlice";
import forumSlice from "../Slice/forumSlice";
import adminReducer from "../Slice/adminSlice";

const rootReducer = combineReducers({
  Salon: SalonSlice,
  User: CustomerSlice,
  ManageConsultation: ManageConsultationSlice,
  Containdication: ContaindicationSlice,
  Auth: AuthSlice,
  Forum: forumSlice,
  AdminSlice: adminReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
