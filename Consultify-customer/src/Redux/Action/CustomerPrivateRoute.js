import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

const CustomerPrivateRoute = () => {
  const userToken = window.localStorage.getItem("accessToken");

    const currentPath = window.location.pathname;
    if (!userToken) {
      localStorage.setItem('redirectPath', currentPath);
      Cookies.set("redirectPath", currentPath);
    }

 
  if (userToken) {
    return <Outlet />;
  } else {
    
    return <Navigate to={"/"} />;
  }
};

export default CustomerPrivateRoute;
