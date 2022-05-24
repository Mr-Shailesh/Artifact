import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";


const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
 
  // console.log("Check user in Private: ", user);
  // localStorage.setItem("token", user.accessToken)
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;