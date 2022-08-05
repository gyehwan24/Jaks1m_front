import {
  INSERT_TODO,
  GET_TODO,
  GET_DATE_TODO,
  REMOVE_TODO,
  CHECK_TODO,
  EDIT_TODO,
} from "./types";
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
//서버로부터 선택한 date의 todo 받아오기 형식: ex)2022-08-05
export function getDateToDo(date) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get(`/api/users/todo/${date}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: GET_DATE_TODO,
    payload: request,
  };
}
// 삭제할 todo delete하기
export function removeToDo(remove_id) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .delete("/api/users/todo", {
      headers: {
        Authorization: `${accessToken}`,
      },
      data: {
        id: remove_id,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: REMOVE_TODO,
    payload: request,
  };
}
//todo 수정하기
// export function editToDo(edit_id, edit_content) {
//   const accessToken = localStorage.getItem("ACCESS_TOKEN");
//   const request = customAxios
//     .put("/api/users/todo", {
//       data: {
//         id: edit_id,
//         content: edit_content,
//       },
//       headers: {
//         Authorization: `${accessToken}`,
//       },
//     })
//     .then((response) => response.data)
//     .catch((error) => console.log(error));
//   return {
//     type: EDIT_TODO,
//     payload: request,
//   };
// }
//todo check상태 변경
export function checkToDo(check_id, is_check) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  let data = {
    id: check_id,
    isChecked: is_check,
  };
  const request = customAxios
    .put("/api/users/todo", data, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: CHECK_TODO,
    payload: request,
  };
}
