import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';
function UserPrivateRoute() {
  const data = sessionStorage.getItem("token");
  if (data) {
    return <Outlet />;
  } else {
    return <Navigate to="/userlogin" />;
  }

}
export default UserPrivateRoute
