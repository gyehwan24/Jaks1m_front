import { JOIN_USER } from "../_actions/types";
import { KAKAO_JOIN } from "../_actions/types";
export default function (state = {}, action) {
  switch (action.type) {
    case JOIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case KAKAO_JOIN:
      return { ...state, loginSuccess: action.payload };
      break;
    default:
      return state;
  }
}
