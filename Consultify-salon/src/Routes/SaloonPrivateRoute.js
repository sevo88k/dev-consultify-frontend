import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

const SaloonPrivateRoute = () => {
  const userToken = window.localStorage.getItem("token");

  const currentPath = window.location.pathname;
  if (!userToken) {
    Cookies.set("precarepath", currentPath);
  }

  if (userToken) {
    return <Outlet />;
  } else {
    
    return <Navigate to={"/"} />;
  }
};

export default SaloonPrivateRoute;
