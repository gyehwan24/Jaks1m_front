import axios from "axios";

const DOMAIN = "http://13.209.66.190:8800/";
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
};

export default request;
