import { GET_COMMUNITY } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_COMMUNITY:
      return { ...state, Success: action.payload };
      break;

    default:
      return state;
  }
}
