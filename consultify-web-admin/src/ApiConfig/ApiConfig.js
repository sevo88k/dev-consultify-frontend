import axios from "axios";

import Cookies from 'js-cookie';
console.log(process.env.REACT_APP_API_URL);

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,

  headers: {
    authorization: Cookies.get('accessToken'),
  },
});

API.interceptors.response.use(
  (response) => {
   
  
    if (response?.data?.status === 401) {
      setTimeout(() => {
        localStorage.clear();
        window.location.reload(false);
        window.location.href = '/';
      }, 1000);
    }else{
      return response;
    }
   
  },
  (error) => {
  
    if (error?.response?.status === 401) {
      setTimeout(() => {
        localStorage.clear();
        window.location.reload(false);
        window.location.href = '/';
      }, 1000);
    }

   
  }
);
export default API;
