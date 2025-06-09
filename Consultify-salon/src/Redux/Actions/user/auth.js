import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Service/api";

export const userRegister = createAsyncThunk(
  "userRegister",
  async (data, thunkAPI) => {
    const response = await api.post("/register", data);
    return response.data;
  }
);

export const editProfile = createAsyncThunk(
  "editProfile",
  async (data, thunkAPI) => {
    const response = await api.post("/editProfile", data);
    return response.data;
  }
);

export const forgotPassword = createAsyncThunk(
  "forgotPassword",
  async (data, thunkAPI) => {
    const response = await api.post("/forgotPassword", data);
    return response.data;
  }
);

export const resetPassword = createAsyncThunk(
  "resetPassword",
  async (data, thunkApi) => {
    const response = await api.put(`/resetPass/${data.token}`, data);
    return response.data;
  }
);


export const userLogin = createAsyncThunk(
  "login",
  async (data, thunkAPI) => {
    try {
      const any = await api.post("/login", data);
      
      return { user: any.data };
    } catch (error) {
      console.log(error, "error");
    }
  }
);


export const verifySalonUser = createAsyncThunk(
  "verifySalonUser",
  async (data, thunkApi) => {
    const response = await api.get(`/verifyUser/${data}`);
    return response.data;
  }
);


export const verifyEmail = createAsyncThunk(
  "verifyEmail",
  async (data, thunkApi) => {
    const response = await api.post(`/auth/verify/${data.otp}/${data.id}`);
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


export const contactUs = createAsyncThunk(
  "contactUs",
  async (data, thunkApi) => {
    const response = await api.post("/website/contactus", data);
    return response.data;
  }
);

