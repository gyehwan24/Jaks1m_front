import { POST_ARTICLE, GET_COMMUNITY, GET_ARTICLE } from "./types";

import { customAxios } from "../customAxios";

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
    .catch((error) => console.log(error));
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
