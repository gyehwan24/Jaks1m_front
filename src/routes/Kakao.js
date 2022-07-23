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
function Kakao() {
  const dispatch = useDispatch();
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  let body = {
    code: code,
  };
  dispatch(kakaoJoin(body)).then((response) => {
    console.log(response);
    console.log(response.data);
    alert(response.payload.email);
  });
  return <h2>code posting..</h2>;
}

export default Kakao;
