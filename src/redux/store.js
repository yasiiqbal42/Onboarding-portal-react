import { combineReducers, applyMiddleware, createStore } from "redux";

import coursesReducer from "./app/appReducer";

import thunk from "redux-thunk";

const reducer = combineReducers({
  courses: coursesReducer,
});

export const store = createStore (
  { reducer: reducer },

  applyMiddleware(thunk)
);
