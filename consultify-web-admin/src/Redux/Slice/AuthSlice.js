import { createSlice } from "@reduxjs/toolkit";
import { administratorsAction } from "../Action/AdminAuthAction";

var initialState = {
  Administrators: [],
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (any) => {
    any.addCase(administratorsAction.fulfilled, (state, { payload }) => {
      if (payload) {
        state.Administrators = payload;
      }
    });
  },
});

export default AuthSlice.reducer;
