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
      break;
    case GET_TODO:
      return { ...state, Success: action.payload };
      break;
    case GET_DATE_TODO:
      return { ...state, Success: action.payload };
      break;
    case REMOVE_TODO:
      return { ...state, Success: action.payload };
      break;
    case CHECK_TODO:
      return { ...state, Success: action.payload };
      break;
    case EDIT_TODO:
      return { ...state, Success: action.payload };
      break;
    default:
      return state;
  }
}
