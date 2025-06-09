import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Service/api";

export const userLogin = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const any = await api.post("/auth/login", data);
      return { user: any.data };
    } catch (error) {
      console.log(error, "error");
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "verifyEmail",
  async (data, thunkApi) => {
    const response = await api.post(`/auth/verify/${data.otp}/${data.id}`);
    return response.data;
  }
);

export const userRegister = createAsyncThunk(
  "userRegister",
  async (data, thunkAPI) => {
    const response = await api.post("/registerLandingPage", data);
    return response.data;
  }
);

export const sendEmail = createAsyncThunk(
  "sendEmail",
  async (email, thunkApi) => {
    const response = await api.post("/auth/forgotPass", { email: email });
    return response.data;
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (data, thunkApi) => {
    const response = await api.put(`auth/resetPass/${data.resetToken}`, {
      password: data.password,
    });
    return response.data;
  }
);
export const contactUs = createAsyncThunk(
  "contactUs",
  async (data, thunkApi) => {
    const response = await api.post("/website/contactus", data);
    return response.data;
  }
);
