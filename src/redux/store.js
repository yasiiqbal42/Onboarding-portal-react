import { combineReducers, applyMiddleware, createStore } from "redux";

import dashboardReducer from "./dashboard/dashboardReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  dashboard: dashboardReducer,
});

export const store = createStore(
   reducer ,

  applyMiddleware(thunk)
);

console.log(store)
