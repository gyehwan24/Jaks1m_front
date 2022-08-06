import { naverJoin } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Naver() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const USER_NAME = "USER_NAME";
  const USER_PROFILE = "USER_PROFILE";
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  //state
  let state = new URL(window.location.href).searchParams.get("stae");

  let body = {
    code: code,
    state: state,
  };
  useEffect(() => {
    dispatch(naverJoin(body)).then((response) => {
      console.log(response);
      localStorage.setItem(ACCESS_TOKEN, response.payload.accessToken);
      localStorage.setItem(USER_NAME, response.payload.responseUser.name);
      localStorage.setItem(USER_PROFILE, response.payload.responseUser.img);
      axios.defaults.headers.common[
        "AccessToken"
      ] = `${response.payload.accessToken}`;
      // axios.defaults.headers.common[
      //   "RefreshToken"
      // ] = `${response.payload.refreshToken}`;
    });
    alert("네이버 회원가입이 완료되었습니다. 로그인 해주세요!");
    navigate("/login");
  }, []);

  return (
    <div>
      <h2> Naver code posting..</h2>
    </div>
  );
}

export default Naver;
