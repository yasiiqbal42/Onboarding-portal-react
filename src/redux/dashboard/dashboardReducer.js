import * as actions from "./actionTypes";
const initState = {
  login: [],
  accessToken: "",
  // accessToken: sessionStorage.getItem("access_token")
  //   ? sessionStorage.getItem("access_token")
  //   : "",
  documents: [],
  profile: [],
  laptop_delivery: [],
  kit_delivery: [],
  events: [],
  POC: [],
};
// debugger

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      console.log("In Dashboard");
      const { isloggedIn } = state;
      return {
        ...state,
        // login: [...state.login, { ...action.payload }],
        //isloggedIn: true,
        accessToken: action.payload,
      };
    case actions.LOGOUT:
      return {
        ...state,
        accessToken: "",
      };
    case actions.GET_PROFILE:
      return {
        ...state,
        profile: [...state.profile, { ...action.payload }],
      };

    default:
      return state;
  }
};

export default dashboardReducer;
