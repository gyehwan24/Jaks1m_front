import { useState } from "react";
import Logo from "../components/Logo";
function Join() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputPassword = (event) => {
    setPassword(event.target.value);
  };
  const handleInputComfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <div>
      <Logo />
      <div>
        <h3>목표를 위한 걸음, 작심하루가 도와줄게요!</h3>
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
          <form htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="닉네임"
              value={name}
              onChange={handleInputName}
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
              onChange={handleInputPassword}
            />
          </form>
        </div>
        <div>
          <form htmlFor="confirmPassword">
            <input
              type="text"
              name="confirmPassword"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleInputComfirmPassword}
            />
          </form>
        </div>
        <button>회원가입</button>
      </div>
    </div>
  );
}
export default Join;
