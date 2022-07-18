import { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";

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
  return (
    <div>
      <Logo />
      <div>
        <form htmlFor="email">
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputEmail}
          />
        </form>
      </div>
      <div>
        <form htmlFor="password">
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputPw}
          />
        </form>
      </div>

      <div>
        <Checkbox text="자동로그인" />
        <button style={{}}>비밀번호 찾기</button>
      </div>

      <button style={{ color: "white", backgroundColor: "black" }}>
        로그인
      </button>
      <div>SNS 계정으로 로그인</div>
      <button>네이버</button>
      <button>카카오</button>
      <hr />
      <div>매일 매일 변화하는 삶,</div>
      <div style={{ color: "#A9A9A9" }}>작심하루에서 시작해 보세요!</div>
      <button>
        <Link to="/join">회원가입하기</Link>
      </button>
    </div>
  );
}
export default Login;
