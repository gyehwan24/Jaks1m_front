import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Logo from "../components/Logo";
import "./LoginJoin.css";
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
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 다릅니다!");
      console.log("hi");
    }
  };
  return (
    <div class="loginjoin">
      <Logo />
      <form>
        <h3>목표를 위한 걸음, 작심하루가 도와줄게요!</h3>
        <div class="join_email">
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputEmail}
            class="join_input_email"
          />
          <select class="join_email_direct">
            <option value="0">직접입력</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="닉네임"
            value={name}
            onChange={handleInputName}
            class="loginjoin_input"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputPassword}
            class="loginjoin_input"
          />
        </div>
        <div>
          <input
            type="text"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={handleInputComfirmPassword}
            class="loginjoin_input"
          />
        </div>
        <div class="join_agree">
          <Checkbox text="서비스 이용약관에 동의합니다. (필수)" />
          <Checkbox text="개인정보 수집 및 이용에 동의합니다. (필수)" />
          <Checkbox text="이벤트 정보동의 마케팅 수신에 동의합니다. (선택)" />
        </div>
        <div>
          <button
            type="submit"
            onSubmit={onSubmit}
            style={{ color: "white", backgroundColor: "#A9A9A9" }}
            class="loginjoin_button"
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
}
export default Join;
