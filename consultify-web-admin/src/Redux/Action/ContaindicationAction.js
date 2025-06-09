import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import API from '../../ApiConfig/ApiConfig';
import toast from 'react-hot-toast';

export const getStaticApiAction=createAsyncThunk(
    'getStaticApi',async(id,thunkApi)=>{

        try {
            const response = await API.get(`/getStaticApi`);

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



export const addContradictionsDatabaseAction = createAsyncThunk(
    "addContradictionsDatabase",
    async (data, thunkApi) => {
  try {
    const response = await API.post("/addContradictionsDatabase", data);
    if(response.data.status==200){

        toast.success(response.data.message)
        return response.data.message
    }else{
    toast.error(response.data.message)
    }

    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );



export const getlistContradictionsDatabaseAction = createAsyncThunk(
    "getlistContradictionsDatabase",
    async (data, thunkApi) => {
  try {
    const response = await API.post("/getlistContradictionsDatabase", data);
    if(response.data.status==200){

       /// toast.success(response.data.message)
       return response.data.data
    }else{
    toast.error(response.data.message)
    }

    } catch (error) {
       // toast.error(error.message)
    }
     
    }
  );



  export const deleteContraindicationAction=createAsyncThunk(
    'deleteContraindication',async(id,thunkApi)=>{
  
        try {
            const response = await API.get(`/deleteContraindication?id=${id}`);
  
            if(response.data.status==200){
               return response.data.message;
               
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )


  export const getdetailscontaindicationAction=createAsyncThunk(
    'getdetailscontaindication',async(id,thunkApi)=>{
  
        try {
            const response = await API.get(`/getdetailscontaindication?id=${id}`);
  
            if(response.data.status==200){
               return response.data.data;
               
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )
  

  
  export const imagesaveAction=createAsyncThunk(
    'imagesave',async(data,thunkApi)=>{
  
        try {
            const response = await API.post(`/imagesave`,data);
  
            if(response.data.status==200){
               return response.data.data;
               
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )

  export const addSideeffectAction=createAsyncThunk(
    'addSideeffect',async(data,thunkApi)=>{
  
        try {
            const response = await API.post(`/addSideeffect`,data);
  
            if(response.data.status==200){
                console.log(response.data.data,"response.data.data");
               return response.data;
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )



  export const getSideEffectAction=createAsyncThunk(
    'getSideEffect',async(id,thunkApi)=>{
  
        try {
            const response = await API.get(`/getSideEffect`);
  
            if(response.data.status==200){
               return response.data.data;
               
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )


  

  export const deletesideeffectAction=createAsyncThunk(
    'deletesideeffect',async(id,thunkApi)=>{
  
        try {
            const response = await API.get(`/deletesideeffect?id=${id}`);
  
            if(response.data.status==200){
               return response.data.message;
               
              
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )

  
  export const uploadContradictionDB=createAsyncThunk(
    'uploadContradictionDB',async(data,thunkApi)=>{
  
        try {
            const response = await API.post(`/uploadContradictionDB`,data);
  
            if(response.data.status==200){
                toast.success(response.data.message);
                //
               return response.data.data;
               
              
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )

  export const convertCsvToExcel=createAsyncThunk(
    'convertCsvToExcel',async(data,thunkApi)=>{
  
        try {
            const response = await API.post(`/convertCsvToExcel`,data);
  
            if(response.data.status==200){
                //
               return response.data.data;
               
              
            }
        } catch (error) {
           // toast.error(error.message)
        }
      
    }
  )
  
  export const createForum = createAsyncThunk("createForum", async (obj) => {
    const { data } = await API.post(`/createForum`, obj);
  
    if(data?.success){
      toast.success(data?.message);
    }  
    !data?.success && toast.success(data?.message);
  
    return data;
  });
  
  export const getForum = createAsyncThunk("getForum", async ({ page, limit, search }) => {
    const { data } = await API.get(`/getForum?page=${page}&limit=${limit}&search=${search}`);
    return data;
  });
  
  export const getForumById = createAsyncThunk("getForumById", async (id) => {
    const { data } = await API.get(`/getForumById?id=${id}`);
    return data;
  });
  
  
  
  export const updateForum = createAsyncThunk(
    "updateForum",
    async (formdata) => {
      const { data } = await API.put("/updateForum", formdata);
      return data;
    }
  );
  
  export const deleteForum = createAsyncThunk("deleteForum", async (id) => {
    const { data } = await API.delete(`/deleteForum?id=${id}`);
  
    data?.success && toast.success(data?.message);
    !data?.success && toast.success(data?.message);
  
    return data;
  });
  

  export const createCategory = createAsyncThunk("createCategory", async (obj) => {
    const { data } = await API.post(`/createCategory`, obj);
  
    if(data?.success){
      toast.success(data?.message);
    }  
    !data?.success && toast.success(data?.message);
  
    return data;
  });
  

  export const getCategory = createAsyncThunk("getCategory", async ({ page, limit, search }) => {
    const { data} = await API.get(`/getCategory?page=${page}&limit=${limit}&search=${search}`);
    return data;
  });
  
  export const getCategoryById = createAsyncThunk("getCategoryById", async (id) => {
    const { data } = await API.get(`/getCategoryById?id=${id}`);
    return data;
  });
  
  
  
  export const updateCategory = createAsyncThunk(
    "updateCategory",
    async (formdata) => {
      const { data } = await API.put("/updateCategory", formdata);
      return data;
    }
  );
  
  export const deleteCategory = createAsyncThunk("deleteCategory", async (id) => {
    const { data } = await API.delete(`/deleteCategory?id=${id}`);
  
    data?.success && toast.success(data?.message);
    !data?.success && toast.success(data?.message);
  
    return data;
  });
  

  export const getlistHelpSupportAction = createAsyncThunk("getlistHelpSupport", async (obj) => {
    const { data } = await API.post(`/getlistHelpSupport`, obj);
  
    return data.data;
  });

  export const deletehelpsupportAction = createAsyncThunk("deletehelpsupport", async (obj) => {
    const { data } = await API.post(`/deletehelpsupport`, obj);
  
    return data.data;
  });


  

