import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  // timeout: 2000,
  headers: {
    //device_token: localStorage.getItem('device_token'),
    authorization: sessionStorage.getItem('adminToken'),
  },
});
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      setTimeout(() => { 
        sessionStorage.clear();
        window.location.reload(false);
        window.location.href = '/';
      }, 1000);
    }
    return error.response;
  }
);  
 
export default API;
 