import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate,Route } from "react-router-dom";
import SignIn from "./SignIn";

export function AuthGuard(props) {
  const navigate = useNavigate();

  const { login, isloggedIn, accessToken } = useSelector(
    (state) => state.dashboard
  );
  if (isloggedIn) {
    return props.children;
  }
  return navigate("/signin");
}
// const mapStateToProps = (state) => {
//   return {
//     isloggedIn: state.isloggedIn,
//     accessToken: state.accessToken,
//   };
// };
// export default connect(mapStateToProps)(App);

export default function PrivateRoute(props) {
  const { login, isloggedIn, accessToken } = useSelector(
    (state) => state.dashboard
  );
  return (
    // <Route
    //   {...rest}
    //   render={(props) =>
        isloggedIn === true ? <Component {...props} /> : <SignIn />
    //   }
    // />
  );
}
