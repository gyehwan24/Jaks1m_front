import { INSERT_TODO, GET_TODO } from "./types";
import axios from "axios";
import { customAxios } from "../customAxios";

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
//서버로부터 todo 받아오기
export function getToDo() {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get("/api/users/todo", {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: GET_TODO,
    payload: request,
  };
}
// export function changeToDo();
// export function removeToDo();
// export function checkToDo();
