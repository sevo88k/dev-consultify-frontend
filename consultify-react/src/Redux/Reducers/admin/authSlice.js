import { createSlice } from "@reduxjs/toolkit";
import { adminLogin, verifyOtp } from "../../Actions/admin/auth";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  loggedInStatus: false,
  haveToVerifyOtp: false,
};

const toastFunc = (err) => {
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    limit: 1,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    keepMeLoggedIn: (state, { payload }) => {
      state.loggedInStatus = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, { payload }) => {
        state.user = payload;
        if (payload.success) {
          console.log(payload);
          if (payload?.user?.role == "superadmin") {
            if (payload.success && state.loggedInStatus) {
              window.sessionStorage.setItem("token", payload.token);
              cookies.set("admintoken", payload.token, {
                path: "/",
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
              });
              window.location.href = "/admin/dashboard";
            } else if (payload.success) {
              window.sessionStorage.setItem("token", payload.token);
              window.location.href = "/admin/dashboard";
            }
          }
        }
        if (!payload.success) {
          toastFunc(payload.error);
        }
      })
      .addCase(verifyOtp.fulfilled, (state, { payload }) => {
        if (payload.success) {
          window.sessionStorage.setItem("token", payload.token);
          window.location.href = "/admin/dashboard";
        }
        if (!payload.success) {
          toastFunc(payload.message);
        }
      });
  },
});

export const { keepMeLoggedIn, resetAdminData } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
