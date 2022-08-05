import {
  INSERT_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  CHECK_TODO,
  GET_TODO,
  GET_DATE_TODO,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case INSERT_TODO:
      return { ...state, Success: action.payload };
    case GET_TODO:
      return { ...state, Success: action.payload };
    case GET_DATE_TODO:
      return { ...state, Success: action.payload };
    case REMOVE_TODO:
      return { ...state, Success: action.payload };
    case CHECK_TODO:
      return { ...state, Success: action.payload };
    case EDIT_TODO:
      return { ...state, Success: action.payload };
    default:
      return state;
  }
}
