import {
  INSERT_SCHEDULE,
  GET_SCHEDULE,
  REMOVE_SCHEDULE,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case INSERT_SCHEDULE:
      return { ...state, Success: action.payload };
      break;
    case GET_SCHEDULE:
      return { ...state, Success: action.payload };
      break;
    case REMOVE_SCHEDULE:
      return { ...state, Success: action.payload };
    default:
      return state;
  }
}
