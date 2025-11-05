import React, { use } from "react";
import { AuthContext } from "../authcontext/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Loading/Loading";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  console.log(loading);
  if (loading) {
    return <Loading />;
  }
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={location} />;
  }
  return children;
};

export default PrivetRoute;
