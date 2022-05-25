import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SignIn from "../src/SignIn";
import Dashboard from "./Dashboard";
import PrivateRoute from "./App";
import LogOutMenu from "./pages/Logout";
import Dummy from "./pages/Dummy";
// import SignIn from "../src/SignIn";

//need to create axios instance, request interceptor

ReactDOM.render(
  <React.Fragment>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          {/* <Navigate replace to="/dashboard"/>
          // <Route
          //   path="*" navigate
          //   element={
          //     <PrivateRoute>
          //       <Dashboard />
          //     </PrivateRoute>
          //   }
          ></Route> */}
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
