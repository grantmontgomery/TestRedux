import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
import loggedReducer from "./reducers/logged";

const allReducers = combineReducers({
  counterReducer,
  loggedReducer
});

export default allReducers;
