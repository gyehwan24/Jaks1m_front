import { combineReducers } from "redux";
import user from "./userReducer";
import todo from "./todoReducer";
import schedule from "./scheduleReducer";
import community from "./communityReducer";
//2개 이상의 reducer를 사용할 때,

export default combineReducers({
  user,
  todo,
  schedule,
  community,
});
