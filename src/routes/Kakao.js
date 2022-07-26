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
import { useEffect } from "react";
function Kakao() {
  const dispatch = useDispatch();
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  let body = {
    code: code,
  };
  useEffect(() => {
    //dispatch는 reducer로 메세지를 보낸다. 메세지는 action에 정의되어있다.
    dispatch(kakaoJoin(body)).then((response) => {
      console.log(response);
      console.log(response.type);
      alert(response.payload.email + response.payload.name);
    });
  }, []);

  return <h2>Kakao code posting..</h2>;
}

export default Kakao;
