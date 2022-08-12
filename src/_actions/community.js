import {
  POST_ARTICLE,
  GET_COMMUNITY,
  GET_ARTICLE,
  POST_COMMENT,
  GET_COMMENT,
} from "./types";
import { customAxios } from "../customAxios";
import { getNewToken } from "./userAction";
// import { useDispatch } from "react-redux";
// const dispatch = useDispatch();
//글 포스트하기
export function postArticle(dataToSubmit) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .post("/api/community/upload", dataToSubmit, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: POST_ARTICLE,
    payload: request,
  };
}
//해당 게시판 글 전체 가져오기.
export function getCommunity(category) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get(`/api/community/category?category=${category}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response.data.status === 403) {
        console.log("403이다!!");
        console.log(error);
        // dispatch(getNewToken()).then(response);
      }
    });
  return {
    type: GET_COMMUNITY,
    payload: request,
  };
}
//글 하나 가져오기
export function getArticle(id) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get(`/api/community/${id}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: GET_ARTICLE,
    payload: request,
  };
}
export function getComment(id) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get(`/api/community/${id}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: GET_COMMENT,
    payload: request,
  };
}
//글에 댓글달기 글의 id와 댓글내용을 파라미터로 받는다.
export function postComment(id, desc) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .post(`/api/community/${id}/comment`, desc, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: POST_COMMENT,
    payload: request,
  };
}
