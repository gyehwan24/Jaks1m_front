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
      axios.defaults.headers.common[
        "AccessToken"
      ] = `${response.payload.accessToken}`;
      axios.defaults.headers.common[
        "RefreshToken"
      ] = `${response.payload.refreshToken}`;
    });
    navigate("/");
  }, []);

  return (
    <div>
      <h2> Naver code posting..</h2>
    </div>
  );
}

export default Naver;
