import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { favouriteReducer } from "./favouriteReducer";

export const allReducers = combineReducers({
  postsReducer: postsReducer,
  favouriteReducer: favouriteReducer,
});
