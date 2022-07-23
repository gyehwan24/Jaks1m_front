import { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import "./LoginJoin.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputPw = (event) => {
    setPw(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (email === "") {
      alert("이메일을 입력해야 합니다.");
    }
    if (password === "") {
      alert("비밀번호를 입력해야 합니다");
    } else {
      alert("login 성공");
    }
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
          <label className="checkbox_label" onClick={handleAutoLogin}>
            <input
              type="checkbox"
              className={autoLogin ? "checkbox_on" : "checkbox_off"}
            />
            자동로그인
          </label>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              textDecoration: "underline",
              marginLeft: "220px",
            }}
          >
            비밀번호 찾기
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
          <img src="/img/Naver_logo.png" />
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            marginLeft: "10px",
          }}
        >
          <img src="/img/Kakao_logo.png" />
        </button>
      </div>

      <hr style={{ marginTop: "30px" }} />
      <div style={{ marginTop: "30px" }}>매일 매일 변화하는 삶,</div>
      <div style={{ color: "#A9A9A9", marginBottom: "10px" }}>
        작심하루에서 시작해 보세요!
      </div>
      <button className="loginjoin_button">
        <Link
          to="/join"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          회원가입하기
        </Link>
      </button>
    </div>
  );
}
export default Login;
