import {
  INSERT_TODO,
  CHANGE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
  GET_TODO,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case INSERT_TODO:
      return { ...state, loginSuccess: action.payload };
    case GET_TODO:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
