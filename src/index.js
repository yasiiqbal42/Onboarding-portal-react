import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";

import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignInHOC from "./components/SignInHOC";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SignIn from "../src/SignIn";
import Dashboard from "./Dashboard";
// import AuthGuard from "./App";
import PrivateRoute from "./App";
// import SignIn from "../src/SignIn";

ReactDOM.render(
  <React.Fragment>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          {/* <Route
            path="/dashboard"
            element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            }
          >
            <AuthGuard >
              <Dashboard />
            </AuthGuard>
          </Route> */}
          <Route element={
            <PrivateRoute path="/dashboard" component={Dashboard} />} path="/dashboard">
          </Route>
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
