import * as actions from "./actionTypes";
const initState = {
  userId:'',
  accessToken: sessionStorage.getItem("access_token")
    ? sessionStorage.getItem("access_token")
    : "",
  documents: [],
  profile: [],
  laptopDelivery: [],
  kitDelivery: [],
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
        profile: [ ...action.payload ],
      };
    case actions.GET_DOCUMENT:
      return {
        ...state,
        documents: [ ...action.payload ],
      };
    default:
      return state;
  }
};

export default dashboardReducer;
