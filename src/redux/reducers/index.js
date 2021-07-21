import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";

export const allReducers = combineReducers({
  postsReducer: postsReducer,
});
