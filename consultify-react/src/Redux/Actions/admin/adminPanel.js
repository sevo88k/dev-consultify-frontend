import { createAsyncThunk } from "@reduxjs/toolkit";
import { create } from "yup/lib/Reference";
import api from "../../../Service/api";

//Actions for Members Page
export const getAllMembers = createAsyncThunk(
  "getAllMembers",
  async (thunkApi) => {
    const response = await api.get("/adminPanel/getAllMembers");
    return response.data;
  }
);

export const getTransactions = createAsyncThunk("getTransactions", async () => {
  const response = await api.get("/adminPanel/getTransactions");
  return response.data;
});

export const getMemberDetails = createAsyncThunk(
  "getMemberDetails",
  async (memberId, thunkApi) => {
    const response = await api.get(`/adminPanel/memberDetails/${memberId}`);
    return response.data;
  }
);

//Actions for NewPrescriptions Page
export const createPrescription = createAsyncThunk(
  "createPrescription",
  async (data, thunkApi) => {
    const response = await api.post("/adminPanel/createPrescription", data);
    return response.data;
  }
);

export const getPrescriptions = createAsyncThunk(
  "getPrescriptions",
  async (id, thunkApi) => {
    const response = await api.get(`/adminPanel/getPrescriptions/${id}`);
    return response.data;
  }
);

// Actions for Blogs Page
export const blogPost = createAsyncThunk(
  "blogPost",
  async (formdata, thunkApi) => {
    const response = await api.post("/adminPanel/blogPost", formdata);
    return response.data;
  }
);

export const getBlogs = createAsyncThunk("getBlogs", async (thunkApi) => {
  const response = await api.get("/adminPanel/getBlogs");
  return response.data;
});

export const deleteBlog = createAsyncThunk(
  "deleteBlog",
  async (blogId, thunkApi) => {
    const response = await api.delete(`/adminPanel/delBlog/${blogId}`);
    return response.data;
  }
);

export const viewBlog = createAsyncThunk(
  "viewBlog",
  async (blogId, thunkApi) => {
    const response = await api.get(`/adminPanel/viewBlog/${blogId}`);
    return response.data;
  }
);

export const getCalendarEvents = createAsyncThunk(
  "getCalendarEvents",
  async (thunkApi) => {
    const response = await api.get("/adminPanel/calendarEvents");
    return response.data;
  }
);

export const getConsInfo = createAsyncThunk(
  "getConsInfo",
  async (id, thunkApi) => {
    const response = await api.get(`/adminPanel/getConsInfo/${id}`);
    return response.data;
  }
);

export const editBlog = createAsyncThunk(
  "editBlog",
  async (formdata, thunkApi) => {
    const response = await api.post("/adminPanel/editBlog/", formdata);
    return response.data;
  }
);

export const delConsultation = createAsyncThunk(
  "delConsultation",
  async (id, thunkApi) => {
    const response = await api.delete(`/adminPanel/delConsultation/${id}`);
    return response.data;
  }
);

export const sendAvailability = createAsyncThunk(
  "sendAvailability",
  async (data, thunkApi) => {
    const response = await api.post("/adminPanel/setAvail", data);
    return response.data;
  }
);

export const getAvailability = createAsyncThunk(
  "getAvailability",
  async (data, thunkApi) => {
    const response = await api.get("/adminPanel/getAvail");
    return response.data;
  }
);

export const deleteMember = createAsyncThunk(
  "deleteMember",
  async (id, thunkApi) => {
    const response = await api.delete(`/adminPanel/deleteMember/${id}`);
    return response.data;
  }
);

export const getAdmins = createAsyncThunk("getAdmins", async (thunkApi) => {
  const response = await api.get("/adminPanel/getAdmins");
  return response.data;
});

export const createAdmin = createAsyncThunk(
  "createAdmin",
  async (data, thunkApi) => {
    const response = await api.post("/adminPanel/createAdmin", data);
    return response.data;
  }
);

export const deleteAdmin = createAsyncThunk(
  "deleteAdmin",
  async (id, thunkApi) => {
    const response = await api.delete(`/adminPanel/deleteAdmin/${id}`);
    return response.data;
  }
);

export const assignDoctor = createAsyncThunk(
  "assignDoctor",
  async (data, thunkApi) => {
    const response = await api.post("/adminPanel/assignDoctor", data);
    return response.data;
  }
);

export const createPaymentIntent = createAsyncThunk(
  "createPaymentIntent",
  async (data, thunkApi) => {
    const response = await api.post("/pay/create-payment-intent", data);
    return response.data;
  }
);

export const getDashboardData = createAsyncThunk(
  "getDashboardData",
  async (thunkApi) => {
    const res = await api.get("/adminPanel/dashboard");
    return res.data;
  }
);
