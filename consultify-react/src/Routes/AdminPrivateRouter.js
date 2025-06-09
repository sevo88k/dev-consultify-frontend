import { Navigate, Outlet } from "react-router-dom";

function AdminPrivateRouter() {
  const adminAuthToken = window.sessionStorage.getItem("token");
  if (adminAuthToken) {
    return <Outlet />;
  } else {
    return <Navigate to="/adminlogin" />;
  }
}

export default AdminPrivateRouter;
