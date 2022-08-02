import {
  JOIN_USER,
  KAKAO_JOIN,
  NAVER_JOIN,
  LOGIN_USER,
  GET_NEWTOKEN,
  IMAGE_UPLOAD,
  INSERT_TODO,
} from "./types";

import axios from "axios";
import { customAxios } from "../customAxios";

//Action Creator 는 객체를 반환한다. (type, payload)

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

//서버에 todo 보내기
export function insertToDo(dataToSubmit) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .post("/api/users/todo", dataToSubmit, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: INSERT_TODO,
    payload: request,
  };
}

// export function changeToDo();
// export function removeToDo();
// export function checkToDo();
