import {
  JOIN_USER,
  KAKAO_JOIN,
  KAKAO_GET_TOKEN,
  NAVER_JOIN,
  LOGIN_USER,
  GET_NEWTOKEN,
} from "../_actions/types";

//reducer -> mute state 금지 -> ...state / 값을 변경하는게 아니라 새로운 객체를 반환한다.

export default function (state = {}, action) {
  switch (action.type) {
    case JOIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case KAKAO_JOIN:
      console.log(state, action);
      return { ...state, loginSuccess: action.payload };
      break;
    case KAKAO_GET_TOKEN:
      return { ...state, loginSuccess: action.payload };
      break;
    case NAVER_JOIN:
      return { ...state, loginSuccess: action.payload };
      break;
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case GET_NEWTOKEN:
      return { ...state, loginSuccess: action.payload };
    default:
      return state;
  }
}
