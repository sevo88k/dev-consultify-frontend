import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import API from '../../ApiConfig/ApiConfig';
import toast from 'react-hot-toast';


export const getSalonListAction = createAsyncThunk(
  'getSalonList', async (data, thunkApi) => {

    try {
      const response = await API.post("/getSalonList", data);

      if (response.data.status == 200) {
        console.log(response.data.data);
        return response.data.data

      } else {
        //   toast.error(response.data.message)
      }
    } catch (error) {
      ////  toast.error(error.message)
    }

  }
)


export const salonDetailsAction = createAsyncThunk(
  'salonDetails', async (id, thunkApi) => {

    try {
      const response = await API.get(`/salonDetails?id=${id}`);

      if (response.data.status == 200) {

        return response.data.data

      } else {
        // toast.error(response.data.message)
      }
    } catch (error) {
      // toast.error(error.message)
    }

  }
)


export const salonConsultationPresetCreatedByAdmin = createAsyncThunk(
  'salonConsultationPresetCreatedByAdmin', async (id, thunkApi) => {
    try {
      const response = await API.get(`/ListpresetConsultation?salonid=${id}`);
      if (response.data.status == 200) {
        return response.data.data
      } else {

      }
    } catch (error) {
      // toast.error(error.message)
    }

  }
)

export const salonPresetCreatedByAdminUser = createAsyncThunk(
  'salonPresetCreatedByAdminUser', async (id, thunkApi) => {
    try {
      const response = await API.get(`/presetlistConsultation?salonid=${id}`);
      if (response.data.status == 200) {
        return response.data.data
      } else {

      }
    } catch (error) {
      // toast.error(error.message)
    }

  }
)


export const DeleteSalonAction = createAsyncThunk(
  "deleteSalon",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/deleteSalon", data);
      if (response.data.status == 200) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);


export const salonUpdatePasswordAction = createAsyncThunk(
  "salonUpdatePassword",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/salonUpdatePassword", data);
      if (response.data.status == 200) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);


export const updateSalondetailsAction = createAsyncThunk(
  "updateSalondetails",
  async (data, thunkApi) => {
    try {
      console.log(data);
      const response = await API.post("/updateSalondetails", data);
      if (response.data.status == 200) {
        toast.success(response.data.message)
        return response.data.data

      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);



export const SalonResetpasswordAction = createAsyncThunk(
  "SalonResetpassword",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/SalonResetpassword", data);
      if (response.data.status == 200) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);



export const UpdateaccountstatussalonAction = createAsyncThunk(
  "Updateaccountstatussalon",
  async (data, thunkApi) => {
    try {
      console.log(data);

      const response = await API.post("/Updateaccountstatussalon", data);
      if (response.data.status == 200) {
        toast.success(response.data.message)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);



export const stafflistAction = createAsyncThunk(
  "stafflist",
  async (data, thunkApi) => {
    try {
      console.log(data);

      const response = await API.post("/stafflist", data);
      if (response.data.status == 200) {
        return response.data.data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);


export const getCompletedconsultaitonformSalonAction = createAsyncThunk(
  "getCompletedconsultaitonformSalon",
  async (data, thunkApi) => {
    try {


      const response = await API.post("/getCompletedconsultaitonformSalon", data);

      if (response.data.status == 200) {
        return response.data.data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);


export const getAllSaonSearchHistory = createAsyncThunk(
  'getAllSaonSearchHistory', async (data, thunkApi) => {

    try {
      const response = await API.get(`/getAllSaonSearchHistory?salonId=${data}`);

      if (response.data.success) {

        return response.data.data

      } else {
        // toast.error(response.data.message)
      }
    } catch (error) {
      // toast.error(error.message)
    }

  }
)

export const customerlogsAction = createAsyncThunk(
  'customerlogs', async (data, thunkApi) => {

    try {
      const response = await API.post(`/customerlogs`);

      if (response.data.status == 200) {

        return response.data.data

      } else {
        // toast.error(response.data.message)
      }
    } catch (error) {
      // toast.error(error.message)
    }

  }
)

// to delete consultation on creation
export const consultationFormDelete = createAsyncThunk(
  "consultationFormDelete",
  async (data, thunkAPI) => {
    const response = await API.delete(`/other/consultationFormDelete/${data}`);
    return response.data;
  }
)

export const updateConsultationStatus = createAsyncThunk(
  "updateConsultationStatus",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/update_consulatation", data);

      if (response.data.status == 200) {
        return response.data.data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);

// update precare tab for admin
export const updatePreAndPostCareStatus = createAsyncThunk(
  "updatePreAndPostCareStatus",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/update_preset_consulatation", data);

      if (response.data.status == 200) {
        return response.data.data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);

export const updateConsultationPresetStatus = createAsyncThunk(
  "updateConsultationPresetStatus",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/update_preset", data);

      if (response.data.status == 200) {
        return response.data.data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);


export const updatePrePostCareStatus = createAsyncThunk(
  "updatePrePostCareStatus",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/update_postcare_presets", data);

      if (response.data.status == 200) {
        return response.data.data
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      //  toast.error(error.message)
    }

  }
);