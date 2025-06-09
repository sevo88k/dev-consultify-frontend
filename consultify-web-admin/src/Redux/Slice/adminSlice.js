import { createSlice } from "@reduxjs/toolkit";
import { adminDashboardKPI } from "../Action/AdminAuthAction";


var initialState = {
  Administrators: [],
  adminDataKpis: [],
};
const AdminSlice = createSlice({
  name: "AdminSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    //   dashboard kpis
    builder.addCase(adminDashboardKPI.pending, (state, { payload }) => {
      if (payload) {
        // state.Administrators=payload
      }
    });
    builder.addCase(adminDashboardKPI.fulfilled, (state, { payload }) => {
      if (payload) {
        state.adminDataKpis = payload;
      }
    });
    builder.addCase(adminDashboardKPI.rejected, (state, { payload }) => {
      if (payload) {
        // state.adminDataKpis=error.message
      }
    });
  },
});

export default AdminSlice.reducer;
