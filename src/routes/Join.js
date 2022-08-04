import { useState } from "react";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import "./LoginJoin.css";
import { joinUser } from "../_actions/userAction";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import axios from "axios";
import { Link } from "react-router-dom";
import Kakao from "./Kakao";
import Naver from "./Naver";
import { useNavigate } from "react-router-dom";

import kakao_logo from "../img/Kakao_logo.png";
import naver_logo from "../img/Naver_logo.png";
import jaksim from "../img/jaks1m_logo.jpeg";
function Join() {
  //state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree_1, setAgree_1] = useState(false);
  const [agree_2, setAgree_2] = useState(false);
  const [agree_3, setAgree_3] = useState(false);

  const navigate = useNavigate();
  // const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=http%3A%2F%2F13.125.232.250%3A8800%2Fapi%2Fauth%2Fkakao%2Flogin&response_type=code`;
  const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_KEY}&redirect_uri=http://localhost:3000/join/oauth/kakao&response_type=code`;
  const naverUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_KEY}&redirect_uri=http://localhost:3000/join/oauth/naver&state=jaksim`;

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

  //회원가입 버튼 눌렀을 때
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      email !== "" &&
      name !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword &&
      agree_1 === true &&
      agree_2 === true
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
      });
      navigate("/login");
      alert("회원가입이 완료되었습니다. 로그인 해주세요!");
    }
    if (email === "") alert("이메일을 입력해야합니다.");
    if (name === "") alert("닉네임을 입력해야 합니다.");
    if (password === "") alert("비밀번호를 입력해야 합니다.");
    if (confirmPassword === "") alert("비밀번호 확인을 입력해야 합니다.");
    if (password !== confirmPassword)
      alert("비밀번호와 비밀번호 확인이 다릅니다!");
    if (agree_1 === false || agree_2 === false)
      alert("약관에 동의해야 합니다.");
  };

  return (
    <div className="loginjoin">
      <Logo />

      <form onSubmit={onSubmit}>
        <h3>목표를 위한 걸음, 작심하루가 도와줄게요!</h3>
        <div>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={handleInputEmail}
            className="loginjoin_input"
          />

          {/* <select className="join_email_direct">
            <option value="0">직접입력</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
          </select> */}
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
            className={agree_1 ? "checkbox_label_on" : "checkbox_label_off"}
            onClick={handleAgree_1}
            style={{ marginRight: "142px" }}
          >
            <input
              type="checkbox"
              className={agree_1 === true ? "checkbox_on" : "checkbox_off"}
            />
            서비스 이용약관에 동의합니다. (필수)
          </label>
          <label
            className={agree_2 ? "checkbox_label_on" : "checkbox_label_off"}
            onClick={handleAgree_2}
            style={{ marginRight: "104px" }}
          >
            <input
              type="checkbox"
              className={agree_2 ? "checkbox_on" : "checkbox_off"}
            />
            개인정보 수집 및 이용에 동의합니다. (필수)
          </label>
          <label
            className={agree_3 ? "checkbox_label_on" : "checkbox_label_off"}
            onClick={handleAgree_3}
            style={{ marginRight: "57px" }}
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
              fontSize: "18px",
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
    </div>
  );
}
export default Join;
