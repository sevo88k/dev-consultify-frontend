import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const userToken = window.localStorage.getItem("accessToken");
  if (userToken) {
    return <Outlet />;
  } else {
    
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoute;
