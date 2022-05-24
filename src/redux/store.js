import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import dashboardReducer from "./dashboard/dashboardReducer";


import thunk from "redux-thunk";

const reducer = combineReducers({
  dashboard: dashboardReducer,
});

export const store = createStore(
   reducer ,
   composeWithDevTools(
  applyMiddleware(thunk))
);

