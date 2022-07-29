// function Kakao() {
//   const host = "https://kauth.kakao.com/oauth/authorize";
//   const config = {
//     client_id: process.env.REACT_APP_KAKAO_KEY,
//     redirect_uri: "http://localhost:3000/join/oauth/kakao",
//     response_type: "code",
//   };
//   const params = new URLSearchParams(config).toString();
//   var url = `${host}?${params}`;
//   return url;
// }

import { kakaoJoin } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Kakao() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const USER_NAME = "USER_NAME";
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  let body = {
    code: code,
  };

  //dispatch는 reducer로 메세지를 보낸다. 메세지는 action에 정의되어있다.
  dispatch(kakaoJoin(body)).then((response) => {
    console.log(response);
    alert(response.payload.email + response.payload.name);
    localStorage.setItem(ACCESS_TOKEN, response.payload.accessToken);
    localStorage.setItem(USER_NAME, response.payload.responseUser.name);
    axios.defaults.headers.common[
      "AccessToken"
    ] = `${response.payload.accessToken}`;
    axios.defaults.headers.common[
      "RefreshToken"
    ] = `${response.payload.refreshToken}`;
  });
  // alert("로그인 되었습니다!");
  navigate("/");

  return <h2>Kakao code posting..</h2>;
}

export default Kakao;
