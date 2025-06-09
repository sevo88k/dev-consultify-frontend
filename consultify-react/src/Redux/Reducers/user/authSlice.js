import { createSlice } from "@reduxjs/toolkit";
import { resetPassword, sendEmail, userLogin } from "../../Actions/user/auth";
import { getConsultationDate } from "../../Actions/user/userAll";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import { toastSuccess } from "./ConsultationSlice";
import { toastError } from "../admin/adminPanelSlice";
const cookies = new Cookies();
const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  success: false,
  error: false,
  loggedInStatus: false,
};
const toastfunc = (err) => {
  toast.error(err, {
    position: "top-right",
    autoClose: 5000,
    limit:1,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
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
        state.success = true;
        state.userToken = payload.token;
        state.user = payload.user;
        if (payload?.user?.success && state.loggedInStatus) {
          window.sessionStorage.setItem("token", payload.user.token);
          window.sessionStorage.setItem("user", payload.user.fullName);
          window.sessionStorage.setItem("join", payload.user.joinedAt);
          cookies.set("userToken", payload.user.token, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          });
          cookies.set("user", payload.user.fullName, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          });
          cookies.set("join", payload.user.joinedAt, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          });
          window.location.href = "/accountHome";
        } else if (payload?.user?.success) {
          window.sessionStorage.setItem("token", payload.user.token);
          window.sessionStorage.setItem("user", payload.user.fullName);
          window.sessionStorage.setItem("join", payload.user.joinedAt);
          window.location.href = "/accountHome";
        }

        if (!payload.user.success) {
          console.log("error");
          toastfunc(payload.user.error);
        }
      })
      .addCase(userLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(sendEmail.fulfilled, (state, { payload }) => {
        if (payload.success) {
          toastSuccess(payload.message);
        }
        if (!payload.success) {
          toastError(payload.error);
        }
      })
      .addCase(resetPassword.fulfilled, (state, { payload }) => {
        if (payload.success) {
          toastSuccess(payload.message);
        } else if (!payload.success) {
          toastError(payload.error);
        }
      });
  },
});

export const { rememberMe } = userAuthSlice.actions;

export default userAuthSlice.reducer;
