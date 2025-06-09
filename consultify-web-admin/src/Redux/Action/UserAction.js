import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import API from '../../ApiConfig/ApiConfig';
import toast from 'react-hot-toast';


export const getCustomerAction=createAsyncThunk(
    'getCustomer',async(data,thunkApi)=>{

        try {
            const response = await API.post("/getCustomer", data);

            if(response.data.status==200){
                console.log(response.data.data);
                return response.data.data
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
)


export const customerDetailsAction=createAsyncThunk(
    'customerDetails',async(id,thunkApi)=>{

        try {
            const response = await API.get(`/customerDetails?id=${id}`);

            if(response.data.status==200){
               
                return response.data.data
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
)


export const deleteUserAction = createAsyncThunk(
    "deleteUser",
    async (data, thunkApi) => {
  try {
    console.log(data);

    const response = await API.post("/deleteUser", data);
        if(response.data.status==200){
            toast.success(response.data.message)
        }else{
        toast.error(response.data.message)
        }
    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );



  export const updateuserdetailsAction = createAsyncThunk(
    "UpdateUserdetails",
    async (data, thunkApi) => {
  try {
    console.log(data);

    const response = await API.post("/UpdateUserdetails", data);
        if(response.data.status==200){
            toast.success(response.data.message)
        }else{
        toast.error(response.data.message)
        }
    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );


  export const updateaccountstatusAction = createAsyncThunk(
    "updateaccountstatus",
    async (data, thunkApi) => {
  try {
    console.log(data);

    const response = await API.post("/updateaccountstatus", data);
        if(response.data.status==200){
            toast.success(response.data.message)
        }else{
        toast.error(response.data.message)
        }
    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );

  
  
  export const customerUpdatePasswordAction = createAsyncThunk(
    "customerUpdatePassword",
    async (data, thunkApi) => {
  try {
    const response = await API.post("/customerUpdatePassword", data);
        if(response.data.status==200){
            toast.success(response.data.message)
        }else{
        toast.error(response.data.message)
        }
    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );

  export const CustomerResetpasswordAction = createAsyncThunk(
    "customerResetpassword",
    async (data, thunkApi) => {
  try {
    const response = await API.post("/customerResetpassword", data);
        if(response.data.status==200){
            toast.success(response.data.message)
        }else{
        toast.error(response.data.message)
        }
    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );


  export const getCompletedconsultaitonformUserAction = createAsyncThunk(
    "getCompletedconsultaitonformUser",
    async (data, thunkApi) => {
  try {
    const response = await API.post("/getCompletedconsultaitonformUser", data);
        if(response.data.status==200){
            return response.data.data
       
        }else{
            toast.error(response.data.message)
            }
    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );



  