import { POST_ARTICLE, GET_COMMUNITY } from "./types";

import { customAxios } from "../customAxios";

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
