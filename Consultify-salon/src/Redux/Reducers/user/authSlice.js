import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../Actions/user/auth";
const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  success: false,
  error: false,
  loggedInStatus: false,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    rememberMe: (state, { payload }) => {
      state.loggedInStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(userLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
    },
});

export const { rememberMe } = userAuthSlice.actions;

export default userAuthSlice.reducer;
