import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../Service/api";
import { create } from "yup/lib/Reference";

export const userAddConsultations = createAsyncThunk(
  "user/addConsultation",
  async (data, thunkAPI) => {
    try {
      const response = await api.post("/user/addConsultation", data);
      return { user: response.data };
    } catch (error) {}
  }
);

export const getConsultationDate = createAsyncThunk(
  "getConsultationDate",
  async (data, thunkApi) => {
    const response = await api.get(`user/getConsultations`, data);
    return { user: response.data };
  }
);
export const getPresriptions = createAsyncThunk(
  "getPresriptions",
  async (data, thunkApi) => {
    const response = await api.get(`user/getPrescriptions`, data);
    return { user: response.data };
  }
);

export const getAssistance = createAsyncThunk(
  "getAssistance",
  async (thunkAPI) => {
    const response = await api.get("user/needAssist");
    return { user: response.data };
  }
);
export const addMedicalHistory = createAsyncThunk(
  "addMedicalHistory",
  async (data, thunkApi) => {
    const response = await api.post("user/saveMedHistory", data);
    return { user: response.data };
  }
);

export const getMedicalHistory = createAsyncThunk(
  "getMedicalHistory",
  async (thunkApi) => {
    const response = await api.get("user/getMedHistory");
    return response.data;
  }
);

export const addMedications = createAsyncThunk(
  "addMedication",
  async (data, thunkAPI) => {
    const response = await api.post("user/saveMedication", data);
    return { user: response.data };
  }
);
export const profileUpload = createAsyncThunk(
  "profileUpload",
  async (data, thunkAPI) => {
    const response = await api.post("user/saveProfilePic", data);
    return { user: response.data };
  }
);
export const updateProfile = createAsyncThunk(
  "updateProfile",
  async (data, thunkAPI) => {
    const response = await api.put("user/updateProfile", data);
    return { user: response.data };
  }
);

export const uploadConsNotesImage = createAsyncThunk(
  "uploadConsNotesImage",
  async (formData, thunkAPI) => {
    const { data } = await api.post("user/uploadConsNotesImage", formData);
    return data;
  }
);

export const getProfilePic = createAsyncThunk(
  "getProfilePic",
  async (thunkAPI) => {
    const response = await api.get("user/getProfilePic");
    return response.data;
  }
);
export const rescheduleConsultations = createAsyncThunk(
  "rescheduleConsultaions",
  async (data, thunkAPI) => {
    const response = await api.put("user/rescheduleConsultation", data);
    return response.data;
  }
);
export const getMedication = createAsyncThunk(
  "getMedication",
  async (thunkAPI) => {
    const response = await api.get("user/getMedication");
    return response.data;
  }
);

export const cancelConsultation = createAsyncThunk(
  "cancelConsultation",
  async (id, thunkApi) => {
    const response = await api.delete(`user/delConsultation/${id}`);
    return response.data;
  }
);

export const getPersonalInfo = createAsyncThunk(
  "getPersonalInfo",
  async (thunkAPI) => {
    const response = await api.get("user/getPersonalInfo");
    return response.data;
  }
);

export const getBlogs = createAsyncThunk("getBlogs", async (thunkApi) => {
  const response = await api.get("user/getBlogs");
  return response.data;
});

export const updateConsNotes = createAsyncThunk(
  "updateConsNotes",
  async (data, thunkApi) => {
    const response = await api.post("user/updateNotes", data);
    return response.data;
  }
);

export const viewBlog = createAsyncThunk("viewBlog", async (id, thunkApi) => {
  const response = await api.get(`user/viewBlog/${id}`);
  return response.data;
});

export const getUserConsInfo = createAsyncThunk(
  "getConsInfo",
  async (id, thunkApi) => {
    const response = await api.get(`user/getUserInfo/${id}`);
    return response.data;
  }
);

export const getAvailability = createAsyncThunk(
  "getAvailability",
  async (thunkApi) => {
    const response = await api.get("user/getAvail");
    return response.data;
  }
);

export const getWebsiteBlogs = createAsyncThunk(
  "getWebsiteBlogs",
  async (thunkApi) => {
    const response = await api.get("website/getBlogs");
    return response.data;
  }
);

export const getWebBlog = createAsyncThunk(
  "getWebBlog",
  async (id, thunkApi) => {
    const response = await api.get(`website/getBlog/${id}`);
    return response.data;
  }
);

export const getContactPref = createAsyncThunk(
  "getContactPref",
  async (thunkApi) => {
    const response = await api.get("user/getContactPref");
    return response.data;
  }
);

export const saveContactPref = createAsyncThunk(
  "saveContactPref",
  async (data, thunkApi) => {
    const response = await api.post("user/saveContactPref", data);
    return response.data;
  }
);
