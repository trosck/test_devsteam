import { combineReducers } from "redux";
import ImageReducer from "./ImageReducer";

export default combineReducers({
  image: ImageReducer
})