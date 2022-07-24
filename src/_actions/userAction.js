import { JOIN_USER } from "./types";
import { KAKAO_JOIN } from "./types";
import { KAKAO_GET_TOKEN } from "./types";
import { NAVER_JOIN } from "./types";
import axios from "axios";

export function joinUser(dataToSubmit) {
  // axios를 이용해 login 요청을 보내고 response.data를 반환하여 request에 넣어준다.
  const request = axios
    .post("http://13.125.232.250:8800/api/auth/signup", dataToSubmit)
    .then((response) => response.data);

  return {
    type: JOIN_USER,
    payload: request,
  };
}

export function kakaoJoin(dataToSubmit) {
  const request = axios
    .post("http://13.125.232.250:8800/api/auth/kakao/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: KAKAO_JOIN,
    payload: request,
  };
}

export function kakaoGetToken(dataTosubmit) {
  const request = axios.get().then((response) => response.data);
  return {
    type: KAKAO_GET_TOKEN,
    payload: request,
  };
}

export function naverJoin(dataToSubmit) {
  const request = axios
    .post("http://13.125.232.250:8800/api/auth/naver/login", dataToSubmit)
    .then((response) => response.data);
  return {
    type: NAVER_JOIN,
    payload: request,
  };
}
