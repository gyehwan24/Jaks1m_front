import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import "./LoginJoin.css";
import { joinUser } from "../_actions/userAction";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import axios from "axios";
import { Link } from "react-router-dom";
import Kakao from "./Kakao";

function Join() {
  //state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree_1, setAgree_1] = useState(false);
  const [agree_2, setAgree_2] = useState(false);
  const [agree_3, setAgree_3] = useState(false);

  // const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=http%3A%2F%2F13.125.232.250%3A8800%2Fapi%2Fauth%2Fkakao%2Flogin&response_type=code`;
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=http://localhost:3000/join/oauth/kakao&response_type=code`;
  const dispatch = useDispatch();
  //handler function
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

  const handleAgree_1 = (event) => {
    event.preventDefault();
    setAgree_1((current) => !current);
  };
  const handleAgree_2 = (event) => {
    event.preventDefault();
    setAgree_2((current) => !current);
  };
  const handleAgree_3 = (event) => {
    event.preventDefault();
    setAgree_3((current) => !current);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      email !== "" &&
      name !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      alert(
        `email: ${email}
        name: ${name}
        pw: ${password}
        confirmpw: ${confirmPassword}`
      );
      let body = {
        email: email,
        name: name,
        password: password,
        password1: confirmPassword,
      };
      dispatch(joinUser(body)).then((response) => {
        if (response.status === 400) {
          alert("중복된 이메일입니다.");
        }
        console.log(response);
        alert(response.status);
      });
    }
    if (email === "") alert("이메일을 입력해야 합니다.");
    if (name === "") alert("닉네임을 입력해야 합니다.");
    if (password === "") alert("비밀번호를 입력해야 합니다.");
    if (confirmPassword === "") alert("비밀번호 확인을 입력해야 합니다.");
    if (password !== confirmPassword)
      alert("비밀번호와 비밀번호 확인이 다릅니다!");
  };

  return (
    <div className="loginjoin">
      <Link to="/">
        <Logo />
      </Link>

      <form onSubmit={onSubmit}>
        <h3>목표를 위한 걸음, 작심하루가 도와줄게요!</h3>
        <div className="join_email">
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputEmail}
            className="join_input_email"
          />
          <select className="join_email_direct">
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
            className="loginjoin_input"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleInputPassword}
            className="loginjoin_input"
          />
        </div>
        <div>
          <input
            type="text"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={handleInputComfirmPassword}
            className="loginjoin_input"
          />
        </div>
        <div className="join_agree">
          <label
            className="checkbox_label"
            onClick={handleAgree_1}
            style={{ marginRight: "140px" }}
          >
            <input
              type="checkbox"
              className={agree_1 === true ? "checkbox_on" : "checkbox_off"}
            />
            서비스 이용약관에 동의합니다. (필수)
          </label>
          <label
            className="checkbox_label"
            onClick={handleAgree_2}
            style={{ marginRight: "100px" }}
          >
            <input
              type="checkbox"
              className={agree_2 ? "checkbox_on" : "checkbox_off"}
            />
            개인정보 수집 및 이용에 동의합니다. (필수)
          </label>
          <label
            className="checkbox_label"
            onClick={handleAgree_3}
            style={{ marginRight: "51px" }}
          >
            <input
              type="checkbox"
              className={agree_3 ? "checkbox_on" : "checkbox_off"}
            />
            이벤트 정보동의 마케팅 수신에 동의합니다. (선택)
          </label>
        </div>

        <div>
          <button
            type="submit"
            style={{
              color: "white",
              backgroundColor: "#A9A9A9",
              fontSize: "16px",
            }}
            className="loginjoin_button"
          >
            회원가입
          </button>
        </div>
      </form>
      <div>
        <h3 style={{ marginBottom: 0 }}>SNS 계정으로 가입</h3>
        <br />
        <button
          style={{
            border: "none",
            backgroundColor: "white",
            marginRight: "10px",
          }}
        >
          <a>
            <img src="/img/Naver_logo.png" />
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
            <img src="/img/Kakao_logo.png" />
          </a>
        </button>
      </div>
    </div>
  );
}
export default Join;