import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useNavigate } from "react-router-dom";

export default function PrivateRoute({
  component: Component,
  authed,
  children,
  ...rest
}) {
  const { login, isloggedIn, accessToken } = useSelector(
    (state) => state.dashboard
  );
  if (!accessToken) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
}
