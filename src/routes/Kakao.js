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
import { useEffect } from "react";
import axios from "axios";
function Kakao() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const USER_NAME = "USER_NAME";
  const IMG_PROFILE = "IMG_PROFILE";
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  let body = {
    code: code,
  };

  //dispatch는 reducer로 메세지를 보낸다. 메세지는 action에 정의되어있다.
  useEffect(() => {
    dispatch(kakaoJoin(body)).then((response) => {
      console.log(response);
      localStorage.setItem(ACCESS_TOKEN, response.payload.accessToken);
      localStorage.setItem(USER_NAME, response.payload.responseUser.name);
      localStorage.setItem(IMG_PROFILE, response.payload.responseUser.img);
      axios.defaults.headers.common[
        "accesstoken"
      ] = `Bearer ${response.payload.accessToken}`;
      // axios.defaults.headers.common[
      //   "refreshtoken"
      // ] = `Bearer ${response.payload.refreshToken}`;
    });
    navigate("/");
  }, []);

  return (
    <div>
      <h2>Kakao code posting..</h2>
    </div>
  );
}

export default Kakao;
