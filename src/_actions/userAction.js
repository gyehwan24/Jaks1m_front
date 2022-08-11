import {
  JOIN_USER,
  KAKAO_JOIN,
  NAVER_JOIN,
  LOGIN_USER,
  GET_NEWTOKEN,
  IMAGE_UPLOAD,
} from "./types";

import axios from "axios";
import { customAxios } from "../customAxios";

//Action Creator 는 객체를 반환한다. action(type, payload)

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
    .post("/api/auth/signin", dataTosubmit, {
      withCredentials: true,
    })
    .then((response) => response.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

//accessToken 만료시 새로운 토큰 발급
export function getNewToken() {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get("/api/auth/refresh", {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data);
  return {
    type: GET_NEWTOKEN,
    payload: request,
  };
}

//서버에 이미지 업로드
export function imageUpload(dataToSubmit) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .post("/api/users/edit-profile", dataToSubmit, {
      headers: {
        Authorization: `${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
  return {
    type: IMAGE_UPLOAD,
    payload: request,
  };
}
