import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

ReactDOM.render(
  <React.Fragment>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <SignIn/>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
