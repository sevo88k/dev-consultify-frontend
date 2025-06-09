import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
    const adminToken=window.sessionStorage.getItem("adminToken")
    if(adminToken){
        return <Outlet />
    }else{
        return <Navigate to={"/"} />
    }
}

export default PrivateRoute