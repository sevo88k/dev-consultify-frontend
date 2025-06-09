import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Service/api";

export const adminLogin = createAsyncThunk(
  "adminAuth/login",
  async (data, thunkAPI) => {
    const response = await api.post("/adminAuth/login", data);
    return response.data;
  }
);

export const adminForgotPassword = createAsyncThunk(
  "adminAuth/forgotPassword",
  async (data, thunkAPI) => {
    const response = await api.post("/adminAuth/forgotPass", data);
    return response;
  }
);

export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async (data, thunkAPI) => {
    const response = await api.post("/adminAuth/verifyAdminOtp", data);
    return response.data;
  }
);
