import axios from "axios";
import * as actions from "./actionTypes";

const loginURl = "http://127.0.0.1:8000/api/token/";
const profileURL = "http://localhost:8000/document/";
const header={
  
}

export const login = (data) => {
  return async (dispatch) => {
    await axios
      .post(loginURl, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.access);
          sessionStorage.setItem("access_token", response.data.access);
          dispatch({ type: actions.LOGIN, payload: response.data.access });
        } else alert("Invalid Login Credentials");
      })
      .catch((error) => console.log(error));
  };
};

export const logout = () => {
  sessionStorage.removeItem("access_token");
  return {
    type: actions.LOGOUT,
  };
};

export const getProfile = () => {
  return async (dispatch) => {
    await axios
      .get(profileURL)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          dispatch({ type: actions.GET_PROFILE, payload: response.data });
        } else alert("Invalid Login Credentials");
      })
      .catch((error) => console.log(error));
  };
  // return {
  //   type: actions.GET_PROFILE,
  //   payload: { username: "Yasir" },
  // };
};
