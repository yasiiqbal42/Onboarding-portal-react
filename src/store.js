import { combineReducers, applyMiddleware, createStore } from "redux";

import appReducer

import thunk from "redux-thunk";

const reducer = combineReducers({
  app: coursesReducer,
});

export const store = createStore(
  { reducer: reducer },

  applyMiddleware(thunk)
);

