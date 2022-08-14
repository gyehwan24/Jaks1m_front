import {
  JOIN_USER,
  KAKAO_JOIN,
  NAVER_JOIN,
  LOGIN_USER,
  GET_NEWTOKEN,
  IMAGE_UPLOAD,
  TEST,
} from "../_actions/types";

//reducer -> mute state 금지 -> ...state / 값을 변경하는게 아니라 새로운 객체를 반환한다.
//reducer는 state와 action을 인자로 받는다.

export default function (state = {}, action) {
  switch (action.type) {
    case JOIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case KAKAO_JOIN:
      console.log(state, action);
      return { ...state, loginSuccess: action.payload };
      break;
    case NAVER_JOIN:
      console.log(state, action);
      return { ...state, loginSuccess: action.payload };
      break;
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case GET_NEWTOKEN:
      return { ...state, loginSuccess: action.payload };
      break;
    case IMAGE_UPLOAD:
      return { ...state, loginSuccess: action.payload };
      break;
    case TEST:
      return { ...state, loginSuccess: action.payload };
      break;
    default:
      return state;
  }
}
