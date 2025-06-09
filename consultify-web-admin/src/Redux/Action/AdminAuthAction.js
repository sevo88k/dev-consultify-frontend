import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import API from "../../ApiConfig/ApiConfig";
import toast from "react-hot-toast";

export const RegistrationAction = createAsyncThunk(
  "Registration",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/customerregistration", data);

      if (response.data.status == 200) {
        localStorage.setItem(
          "name",
          response.data.data.first_name + response.data.data.last_name
        );
        localStorage.setItem("accessToken", response.data.data.accesstoken);
        Cookies.set("accessToken", response.data.data.accesstoken);
        window.location.href = "/";
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

// dashboard kpis

export const adminDashboardKPI = createAsyncThunk("adminDashboardKPI/adminpanel/get_dashboard_saloon",async (data, thunkApi) => {
    try {
      const response = await API.get("/get_dashboard_saloon");

      if (response.data.status == 200) {
        console.log(response.data.data, "sdfsdfsdfsdfsdfsdf");
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const loginAdminLoginAction = createAsyncThunk(
  "login",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/AdminLogin", data);
      if (response.data.status == 200) {
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("accessToken", response.data.data.accesstoken);
        Cookies.set("accessToken", response.data.data.accesstoken);
        window.location.href = "/dashboard";
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const adminRegistationAction = createAsyncThunk(
  "adminRegistation",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/adminRegistation", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const administratorsAction = createAsyncThunk(
  "administrators",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/administrators", data);
      if (response.data.status == 200) {
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const administratordetailsAction = createAsyncThunk(
  "administratordetails",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/administratordetails", data);
      if (response.data.status == 200) {
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const aadministratordeleteAction = createAsyncThunk(
  "administratordelete",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/administratordelete", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const resetpasswordAction = createAsyncThunk(
  "resetpassword",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/resetpassword", data);

      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const updatePasswordAction = createAsyncThunk(
  "updatePassword",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/updatePassword", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const updateProfileDetailAction = createAsyncThunk(
  "updateProfileDetail",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/updateProfileDetail", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const changePasswordAction = createAsyncThunk(
  "updateProfileDetail",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/changePassword", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const sortFaqOrder = createAsyncThunk(
  "sortFaqOrder",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/faqpriority_set", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);
