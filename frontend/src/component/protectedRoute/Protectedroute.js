import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authContext";

const ProtectedRoute = ({ isLoggedIn, setIsLoggedIn }) => {
  localStorage.getItem("userId") !== null
    ? setIsLoggedIn(true)
    : setIsLoggedIn(false);
  console.log("logged in", isLoggedIn);
  return isLoggedIn || localStorage.getItem("userId") !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" />
  );
};

export default ProtectedRoute;
