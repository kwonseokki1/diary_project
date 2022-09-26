import { combineReducers } from "redux";
// Reducers
import memoReducer from "./memo";
// Combine Reducer
export const rootReducer = combineReducers({
  memoReducer,
});
