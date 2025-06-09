import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

function CustomPrivateRouter() {
  const cookies = new Cookies();
  const adminAuthToken = cookies.get("admintoken");

  if (adminAuthToken) {
    sessionStorage.setItem("token", adminAuthToken);
    window.sessionStorage.setItem("user", undefined);
    window.sessionStorage.setItem("join", undefined);
    window.sessionStorage.setItem("cid", undefined);
    return <Outlet />;
  } else {
    return <Navigate to="/adminlogin" />;
  }
}

export default CustomPrivateRouter;
