import React from "react";
import { Navigate, Route } from "react-router-dom";
function GuestRoute(props) {
    
    const isAuth = true;
    if (isAuth) return <Navigate to="/" />
    return <Outlet/>;
}
export default GuestRoute; 