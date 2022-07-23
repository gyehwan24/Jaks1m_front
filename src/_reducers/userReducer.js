import { JOIN_USER, KAKAO_JOIN, KAKAO_GET_TOKEN } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case JOIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case KAKAO_JOIN:
      return { ...state, loginSuccess: action.payload };
      break;
    case KAKAO_GET_TOKEN:
      return { ...state, loginSuccess: action.payload };
      break;
    default:
      return state;
  }
}
