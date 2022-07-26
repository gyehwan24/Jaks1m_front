import { combineReducers } from "redux";
import user from "./userReducer";

//2개 이상의 reducer를 사용할 때,

export default combineReducers({
  user,
});
