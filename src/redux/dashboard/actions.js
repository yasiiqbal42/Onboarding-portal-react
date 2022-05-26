import axios from "../../helpers/axiosHelper";
import * as actions from "./actionTypes";
import parseJwt from "../../helpers/jwtHelper";

const loginURl = "http://127.0.0.1:8000/api/token/";
const documentURL = "http://localhost:8000/documentByID/";
const profileURL = "http://127.0.0.1:8000/user/";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzNDEyNDU1LCJpYXQiOjE2NTM0MDk0NTUsImp0aSI6ImIzZWJlOTUyMDQwZTQ2NmFiMmYzYWY3MjA5ZWE0MTQ3IiwidXNlcl9pZCI6MX0.I6ktNI7PDReZHZL5Q5u1CoRq5qU8rjBvddMKIKxXrWM";

export const login = (data) => {
  return async (dispatch) => {
    await axios
      .post(loginURl, data)
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data.access);
          // console.log("response header", response.headers);
          sessionStorage.setItem("access_token", response.data.access);
          const tokenPayload = parseJwt(response.data.access);
          sessionStorage.setItem("user_id", tokenPayload.user_id);
          console.log("Parse", tokenPayload.user_id);
          dispatch({
            type: actions.LOGIN,
            payload: {
              token: response.data.access,
              user_id: tokenPayload.user_id,
            },
          });
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

// .get(profileURL, { headers: { Authorization: `Bearer ${token}` } })


export const getProfile = () => {
  return async (dispatch) => {
    await axios
      .get(profileURL)
      .then((response) => {
        if (response.status === 200) {
          console.log("response", response.data);
          dispatch({ type: actions.GET_PROFILE, payload: response.data });
        } else alert("Invalid Login Credentials");
      })
      .catch((error) => console.log(error));
  };
};

export const getDocument = (userId) => {
  console.log('get document url',documentURL+userId);
  return async (dispatch) => {
    await axios
      .get(documentURL+userId+"/")
      .then((response) => {
        console.log('Get document Data',response.data);
        if (response.status === 200) {
          // console.log('Get document Data',response.data);
          dispatch({ type: actions.GET_DOCUMENT, payload: response.data });
        } else alert("Invalid Login Credentials");
      })
      .catch((error) => console.log('Code fatt ',error));
  };
};
