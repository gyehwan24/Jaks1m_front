import { JOIN_USER } from "./types";

import axios from "axios";
const USER_URL = "api/auth";

// export function joinUser(dataToSubmit) {
//   //모듈화된 axios로 제작된 request를 사용
// //   const data = request("post", USER_URL + "/signup", dataToSubmit);
// //   return {
// //     type: JOIN_USER,
// //     payload: data,
// //   };
// }
export function joinUser(dataToSubmit) {
  // axios를 이용해 login 요청을 보내고 response.data를 반환하여 request에 넣어준다.
  const request = axios
    .post("http://13.209.35.181:8800/api/auth/signup", dataToSubmit)
    .then((response) => response.data);

  return {
    type: JOIN_USER,
    payload: request,
  };
}
