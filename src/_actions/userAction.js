import {
  JOIN_USER,
  KAKAO_JOIN,
  NAVER_JOIN,
  LOGIN_USER,
  GET_NEWTOKEN,
  KAKAO_GET_TOKEN,
} from "./types";

import axios from "axios";
import { customAxios } from "../customAxios";

//Action Creator return Object

export function joinUser(dataToSubmit) {
  // axios를 이용해 login 요청을 보내고 response.data를 반환하여 request에 넣어준다.
  const request = customAxios
    .post("/api/auth/signup", dataToSubmit)
    .then((response) => response.data);
  return {
    //action정의 (type,payload가 action)
    type: JOIN_USER,
    payload: request,
  };
}

export function kakaoJoin(dataToSubmit) {
  const request = customAxios
    .post("/api/auth/kakao/login", dataToSubmit)
    .then((response) => response.data);

  return {
    type: KAKAO_JOIN,
    payload: request,
  };
}

// export function kakaoGetToken(dataTosubmit) {
//   const request = axios.get().then((response) => response.data);
//   return {
//     type: KAKAO_GET_TOKEN,
//     payload: request,
//   };
// }

export function naverJoin(dataToSubmit) {
  const request = customAxios
    .post("/api/auth/naver/login", dataToSubmit)
    .then((response) => response.data);
  return {
    type: NAVER_JOIN,
    payload: request,
  };
}
//login 시 post
export function loginUser(dataTosubmit) {
  const request = customAxios
    .post("/api/auth/signin", dataTosubmit)
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function getNewToken(dataTosubmit) {
  const request = customAxios
    .post("/api/auth/refresh", dataTosubmit)
    .then((response) => response.data);
  return {
    type: GET_NEWTOKEN,
    payload: request,
  };
}
