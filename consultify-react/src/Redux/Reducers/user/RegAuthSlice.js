import { createSlice } from "@reduxjs/toolkit";
import { userRegister, verifyEmail } from "../../Actions/user/auth";
import Cookies from "universal-cookie";
import { toastError, toastSuccess } from "../admin/adminPanelSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const cookies = new Cookies();
const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  success: false,
  error: false,
  isRegistered: false,
  isVerified: false,
};

const RegAuthSlice = createSlice({
  name: "userRegAuth",
  initialState,
  reducers: {
    resetVerified: (state) => {
      state.isVerified = false;
    },
    resetRegistered: (state) => {
      state.isRegistered = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        console.log(payload, "dasdasedeq");
        state.loading = false;
        state.success = true;
        state.userToken = payload.token;
        state.user = payload.data;
        if (payload?.success) {
          // sessionStorage.setItem("token", payload?.user?.token);
          // sessionStorage.setItem("user", payload?.user?.fullName);
          // sessionStorage.setItem("join", payload?.user?.joinedAt);
          // window.location.href = "/accountHome";
          state.isRegistered = true;
          toast.success("Thank you for showing interest! You're now part of the Consultify community.");
        }
        if (!payload.success) {
          toast.error(payload?.message);
        }
      })
      .addCase(userRegister.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(verifyEmail.fulfilled, (state, { payload }) => {
        if (payload.status == 200) {
          toastSuccess(payload.message);
          state.isVerified = true;
        }
        if (payload.status == 400) {
          toastError(payload.message);
        }
      });
  },
});
export const { resetVerified, resetRegistered } = RegAuthSlice.actions;
export default RegAuthSlice.reducer;
