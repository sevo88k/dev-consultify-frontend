import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import API from "../../ApiConfig/ApiConfig";
import toast from "react-hot-toast";

export const submitconsultationform = createAsyncThunk(
  "AddConsultation",
  async (data, thunkApi) => {
    try {
      const response = await API.post("/AddConsultation", data);
      if (response.data.status == 200) {
        toast.success(response.data.message);
        return response.data.message;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const getlistConsultationAction = createAsyncThunk(
  "getlistConsultation",
  async (data, thunkApi) => {
    try {
      console.log(data);

      const response = await API.post("/getlistConsultation", data);
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

export const deleteConsultationAction = createAsyncThunk(
  "deleteConsultation",
  async (id, thunkApi) => {
    try {
      const response = await API.get(`/deleteConsultation?id=${id}`);

      if (response.data.status == 200) {
        return response.data.message;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const getdetailsConsultationAction = createAsyncThunk(
  "getdetailsConsultation",
  async (id, thunkApi) => {
    try {
      const response = await API.get(`/getdetailsConsultation?id=${id}`);

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

export const deleteConsultaionQuestion = createAsyncThunk(
  "deleteConsultaionQuestion",
  async ({id,consultationId, thunkApi}) => {
    try {
      const response = await API.get(`/getdetailsConsultation?questionId=${id}&id=${consultationId}`);

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

export const adminCompletedConsultation = createAsyncThunk(
  "adminCompletedConsultation",
  async (pageno, thunkApi) => {
    try {
      const response = await API.get(`/adminCompletedConsultation`, {
        params: {
          pageno: pageno, 
        },
      });

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

export const adminFetchCompletedConsultationById = createAsyncThunk(
  "adminFetchCompletedConsultationById",
  async (id, thunkApi) => {
    try {
      const response = await API.get(
        `/adminFetchCompletedConsultationById/${id}`
      );

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

export const salonClientsDispatch = createAsyncThunk(
  "salonClients",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/salonClients`, data);

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

export const SavepostcareAdminAction = createAsyncThunk(
  "savepostcareAdmin",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/savepostcareAdmin`, data);

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

export const getpostcarelistAdminAction = createAsyncThunk(
  "getpostcarelistAdmin",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/getpostcarelistAdmin`, data);

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

export const getpoastcaredetailsAdminAction = createAsyncThunk(
  "getpoastcaredetailsAdmin",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/getpoastcaredetailsAdmin`, data);

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

export const poastcaredeleteByAdminAction = createAsyncThunk(
  "poastcaredeleteByAdmin",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/poastcaredeleteByAdmin`, data);

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

//Faq

export const informationlistAction = createAsyncThunk(
  "informationlist",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/informationlist`, data);

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

// =========================================================

export const faqCategoryListing = createAsyncThunk(
  "faqCategoryListing",
  async (data, thunkApi) => {
    try {
      const response = await API.get(`/faq_category_list`, data);

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


export const deleteFaqCategory = createAsyncThunk(
  "deleteFaqCategory",
  async (data, thunkApi) => {
    try {
      const response = await API.delete(`/deletefaq_category/${data}`);

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


// =========================================================

export const informationdeleteAction = createAsyncThunk(
  "informationdelete",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/informationdelete`, data);

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

export const informationsaveAction = createAsyncThunk(
  "informationsave",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/informationsave`, data);

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


// ======================================================================
export const addFaqCategory = createAsyncThunk(
  "addFaqCategory",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/savefaq_category`, data);

      if (response.data.status == 200) {
        toast.success(response.data.message);
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);

export const editFaqCategory = createAsyncThunk(
  "editFaqCategory",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/Editfaq_category`, data);

      if (response.data.status == 200) {
        toast.success(response.data.message);
        return response.data.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // toast.error(error.message)
    }
  }
);



// =====================================================================

export const informationoffaqAction = createAsyncThunk(
  "informationoffaq",
  async (data, thunkApi) => {
    try {
      const response = await API.post(`/informationoffaq`, data);

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


//  checkbox for admin consultation

export const updateConsultationStatusAdmin = createAsyncThunk(
    "updateConsultationStatusAdmin/updateConsultationstatus",
    async (data, thunkApi) => {
      try {
        const response = await API.post(`/updateConsultationstatus`, data);
  
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