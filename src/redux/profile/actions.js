import axios from "axios";

const URL = "https://627cfe98bf2deb7174e560df.mockapi.io/courses";

export const getProfile = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(URL);
      dispatch({ type: GET_ALL_COURSES, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };
};


export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: "DELETE_FROM_CART",
    payload: id,
  };
};


export const setProfileData = (data) => {
  return {
    type: "SET_PROFILE_DATA",
    payload: data,
  };
};
