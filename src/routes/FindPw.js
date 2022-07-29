import { useState } from "react";

function FindPw() {
  const [email, setEmail] = useState("");
  const handleInputEmail = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2>비밀번호 찾기</h2>
      <form>
        <h3>이메일 인증이 필요합니다.</h3>
        <input
          type="text"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleInputEmail}
          className="join_input_email"
        />
      </form>
    </div>
  );
}
export default FindPw;
