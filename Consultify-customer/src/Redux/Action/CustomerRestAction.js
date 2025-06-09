import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../ApiConfig/ApiConfig";
import toast from "react-hot-toast";


export const customerDashboardDetails = createAsyncThunk(
  "customerDashboardDetails",
  async (id, thunkApi) => {
    try {
      const response = await API.get(`/customerDashboardDetails`);
      if (response.data.status == 200) {
        
        return response.data;
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
);


export const fetchCompletedConsultationById = createAsyncThunk(
    "fetchCompletedConsultationById",
    async (id, thunkApi) => {
      try {
        const response = await API.get(`/fetchCompletedConsultationById/${id}`);
        if (response.data.success) {
          
          return response.data;
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  );


  export const updateCustomerConsultationForm = createAsyncThunk(
    "updateCustomerConsultationForm",
    async (data, thunkApi) => {
      try {
        const response = await API.put(`/updateCustomerConsultationForm`,data);
        if (response.data.status == 200) {
          
          return response.data;
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  );

  export const consultationformdetails = createAsyncThunk(
    "consultationformdetails",
    async (id, thunkApi) => {
      try {
        const response = await API.get(`/consultationformdetails?id=${id}`);
        if (response.data.success) {
          
          return response.data;
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
  );
  
  
  
  export const imagesaveAction=createAsyncThunk(
    'imagesave',async(data,thunkApi)=>{
  
        try {
            const response = await API.post(`/imagesave`,data);
  
          
               return response.data.data;
               
              
          
        } catch (error) {
            toast.error(error.message)
        }
      
    }
  )

  export const fetchAllAppointments=createAsyncThunk(
    'fetchAllAppointments',async(data,thunkApi)=>{
        try {
            const response = await API.get(`/fetchAllAppointments`);
            console.log(response.data?.data,"fetchAllAppointments");
               return response.data?.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
  )

  export const fetchAppointmentById=createAsyncThunk(
    'fetchAppointmentById',async(id,thunkApi)=>{
        try {
            const response = await API.get(`/fetchAppointmentById/${id}`);
               return response.data;
        } catch (error) {
            toast.error(error.message)
        }
    }
  )



  export const medicalhistoryquestionAction = createAsyncThunk(
    "medicalhistoryquestion",
    async (data) => {
        const response = await API.get(`/medicalhistoryquestion`,data);
        return response.data;
    }
);

export const updatemedicalhistoryAction = createAsyncThunk(
  "updatemedicalhistory",
  async (data) => {
      const response = await API.post(`/updatemedicalhistory`,data);
      return response.data;
  }
);


export const AddHelpAndSupportAction = createAsyncThunk(
  "AddHelpAndSupport",
  async (data) => {
      const response = await API.post(`/AddHelpAndSupport`,data);
      console.log(response,"responseresponseresponse")
      
      return response.data;
  }
);

export const informationlistAction = createAsyncThunk(
  "informationlist",
  async (data) => {
      const response = await API.post(`/informationlist`,data);
     
      
      return response.data;
  }
);


export const PreCareCustomerAcknowedgementData = createAsyncThunk(
  'PreCareCustomerAcknowedgementData', async (data, thunkApi) => {
      try {
          const response = await API.get(`/update_acknowledge/${data}`, data);
          return response.data;

      } catch (error) {
          toast.error(error.message)
      }

  }
)
