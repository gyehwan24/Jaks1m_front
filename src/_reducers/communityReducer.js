import {
  GET_COMMUNITY,
  POST_ARTICLE,
  GET_ARTICLE,
  POST_COMMENT,
} from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_COMMUNITY:
      return { ...state, Success: action.payload };
      break;
    case POST_ARTICLE:
      return { ...state, Success: action.payload };
      break;
    case GET_ARTICLE:
      return { ...state, Success: action.payload };
      break;
    case POST_COMMENT:
      return { ...state, Success: action.payload };
      break;
    default:
      return state;
  }
}
