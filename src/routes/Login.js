import "./css/LoginJoin.css";
import { useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import { getNewToken, loginUser } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useCookies } from "react-cookie";
import kakao_logo from "../img/Kakao_logo.png";
import naver_logo from "../img/Naver_logo.png";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const USER_NAME = "USER_NAME";
  const USER_PROFILE = "USER_PROFILE";
  const [cookies, setCookie, removeCookie] = useCookies(["myCookie"]);
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=https://jaksimharu.netlify.app/join/oauth/kakao&response_type=code`;
  const naverUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_KEY}&redirect_uri=https://jaksimharu.netlify.app/join/oauth/naver&state=jaksim`;
  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputPw = (event) => {
    setPw(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (email !== "" && password !== "") {
      let body = {
        email: email,
        password: password,
      };
      dispatch(loginUser(body)).then((response) => {
        console.log(response);
        localStorage.setItem(ACCESS_TOKEN, response.payload.accessToken);
        localStorage.setItem(USER_NAME, response.payload.responseUser.name);
        localStorage.setItem(USER_PROFILE, response.payload.responseUser.img);
        let refreshToken = response.headers.get("set-cookie").slice(14);
        console.log(refreshToken);
        setCookie("refreshToken", refreshToken);

        //API 요청마다 헤더에 accessToken 담아 보내도록 세팅
        // axios.defaults.headers.common[
        //   "AccessToken"
        // ] = `${response.payload.accessToken}`;
        // axios.defaults.headers.common[
        //   "RefreshToken"
        // ] = `${response.payload.refreshToken}`;

        alert("로그인 되었습니다!");
        navigate("/");
      });
    }

    if (email === "") alert("이메일을 입력해야 합니다.");
    if (password === "") alert("비밀번호를 입력해야 합니다.");
  };

  const handleAutoLogin = (event) => {
    event.preventDefault();
    setAutoLogin((current) => !current);
  };

  return (
    <div className="loginjoin">
      <Logo />

      <form onSubmit={onSubmit} className="login_form">
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputEmail}
            className="loginjoin_input"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputPw}
            className="loginjoin_input"
          />
        </div>
        <div className="login_option">
          <label
            className={autoLogin ? "checkbox_label_on" : "checkbox_label_off"}
            onClick={handleAutoLogin}
          >
            <input
              type="checkbox"
              className={autoLogin ? "checkbox_on" : "checkbox_off"}
            />
            자동로그인
          </label>

          <button className="login_findpw">
            <Link to="/findpw" className="login_findpw">
              비밀번호 찾기
            </Link>
          </button>
        </div>
        <button
          type="submit"
          style={{
            color: "white",
            backgroundColor: "black",
          }}
          className="loginjoin_button"
        >
          로그인
        </button>
      </form>

      <div>
        <h3>SNS 계정으로 로그인</h3>

        <button
          style={{
            border: "none",
            backgroundColor: "white",
            marginRight: "10px",
          }}
        >
          <a href={naverUrl}>
            <img src={naver_logo} style={{ width: "60px" }} />
          </a>
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            marginLeft: "10px",
          }}
        >
          <a href={kakaoUrl}>
            <img src={kakao_logo} style={{ width: "60px" }} />
          </a>
        </button>
      </div>

      <hr style={{ marginTop: "30px" }} />
      <div style={{ marginTop: "30px" }}>매일 매일 변화하는 삶,</div>
      <div style={{ color: "#A9A9A9", marginBottom: "10px" }}>
        작심하루에서 시작해 보세요!
      </div>
      <Link to="/join">
        <button
          className="loginjoin_button"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          회원가입하기
        </button>
      </Link>
    </div>
  );
}
export default Login;
