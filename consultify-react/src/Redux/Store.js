import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/user/authSlice";
import RegAuthReducer from "./Reducers/user/RegAuthSlice";
import adminAuthReducer from "./Reducers/admin/authSlice";
import adminPanelReducer from "./Reducers/admin/adminPanelSlice";
import ConsultationsReducer from "./Reducers/user/ConsultationSlice";
import chatReducer from "./Reducers/chatSlice";
import globalReducer from "./Reducers/globalSlice";
export const store = configureStore({
  reducer: {
    userAuth: userReducer,
    userRegAuth: RegAuthReducer,
    consultaions: ConsultationsReducer,
    adminAuth: adminAuthReducer,
    adminPanel: adminPanelReducer,
    chat: chatReducer,
    globalSlice: globalReducer,
  },
});
