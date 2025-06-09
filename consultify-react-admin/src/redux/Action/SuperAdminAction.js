import { toast } from "react-toastify";
import API from "../../service/Api";
import Cookies from "universal-cookie";
export const AdminLogin = (adminData, keepLogin) => async () => {
  const cookies = new Cookies();
  try {
    const Login = await API.post("/adminLogin", adminData);
    if (keepLogin && Login.status == 200) {
      cookies.set("adminToken", Login.data.data.token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      });
      sessionStorage.setItem("adminToken", Login.data.data.token);
      window.location.href = "/all-users";
    } else if (!keepLogin && Login.status == 200) {
      sessionStorage.setItem("adminToken", Login.data.data.token);
      window.location.href = "/all-users";
    } else {
      toast.error(Login.data.message);
    }
  } catch (error) {
    toast.warning(error.message);
  }
};
