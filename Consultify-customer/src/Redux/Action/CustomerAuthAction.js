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
          response.data.data.first_name + " " + response.data.data.last_name
        );
        localStorage.setItem("accessToken", response.data.data.accesstoken);
        Cookies.set("accessToken", response.data.data.accesstoken);

        if (response.data.passowrd_new_set == 0) {
          window.location.href = "/update-password/" + response.data?._id;
        } else {
          window.location.href = "/";
        }

        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const logincustomerLoginAction = createAsyncThunk(
  "login",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/customerLogin", data);

      if (response?.data?.status == 200) {
        localStorage.setItem(
          "name",
          response.data.data.first_name + " " + response.data.data.last_name
        );
        localStorage.setItem("accessToken", response.data.data.accesstoken);
        Cookies.set("accessToken", response.data.data.accesstoken);
        // const redirectPath = localStorage.getItem("redirectPath");
        // let x =  Cookies.get('redirectPath')

        if (response?.data?.data?.passowrd_new_set == 0) {
          window.location.href = "/update-password/";
        } else {
          // if (x) {
          //   Cookies.remove("redirectPath");

          //   window.location.href = x;
          // } else {
            window.location.href = "/Client_view";
          // }
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
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
        if (response.data.passowrd_new_set == 0) {
          window.location.href = "/update-password/" + response.data?._id;
        } else {
          window.location.href = "/";
        }

        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const setnewPasswordAction = createAsyncThunk(
  "setnewPassword",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/setnewPassword", data);
      if (response.data.status == 200) {
        window.location.href = "/Client_view";

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

export const customerdetailsAction = createAsyncThunk(
  "customerdetails",
  async (id, thunkApi) => {
    try {
      const response = await API.get(`/customerdetails`);
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

export const preCareListAction = createAsyncThunk(
  "/pre_care_details",
  async (data, thunkApi) => {
    try {
      const response = await API.get(`/pre_care_details/${data}`, data);
      if (response.data.status == 200) {
        // toast.success(response.data.message);
        return response?.data;
      } else {
        // toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const preCareList1Action = createAsyncThunk(
  "/customer_pre_care",
  async (data, thunkApi) => {
    try {
      const response = await API.get(`/customer_pre_care`, data);
      if (response.data.status == 200) {
        // toast.success(response.data.message);
        return response?.data;
      } else {
        // toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);

export const consultationFormCompleteCheck = createAsyncThunk(
  "/consultationFormCompleteCheck/FindCustomerConsultationForm",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/FindCustomerConsultationForm", data);
      if (response.status == 200) {
        // toast.success(response.data.message);
        return response.data;
      } else {
        // toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);
