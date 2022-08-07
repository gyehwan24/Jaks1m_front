import { INSERT_SCHEDULE, GET_SCHEDULE } from "./types";

import { customAxios } from "../customAxios";

export function insertSchedule(dataToSubmit, date) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .post(`/api/users/schedule/${date}`, dataToSubmit, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: INSERT_SCHEDULE,
    payload: request,
  };
}
export function getSchedule(date) {
  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  const request = customAxios
    .get(`/api/users/schedule/${date}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
  return {
    type: GET_SCHEDULE,
    payload: request,
  };
}
