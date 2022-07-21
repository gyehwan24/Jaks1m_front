import { useState } from "react";
import Checkbox from "../components/Checkbox";
import Logo from "../components/Logo";
import { useDispatch } from "react-redux";
import "./LoginJoin.css";
import { joinUser } from "../_actions/userAction";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";
import axios from "axios";
import { Link } from "react-router-dom";

function Join(props) {
  //state
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
  const onSubmit = (event) => {
    event.preventDefault();

    if (email === "") alert("이메일을 입력해야 합니다.");
    if (name === "") alert("닉네임을 입력해야 합니다.");
    if (password === "") alert("비밀번호를 입력해야 합니다.");
    if (confirmPassword === "") alert("비밀번호 확인을 입력해야 합니다.");
    if (password !== confirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 다릅니다!");
    } else {
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
        if (response.payload.success) {
          alert("회원가입이 완료되었습니다.");
          props.history.push("/");
        } else {
          alert("회원가입에 실패했습니다.");
        }
      });
      // signup(email, name, password, confirmPassword);
    }

    // axios.post("http://13.125.246.227:8800/api/auth/signup", {
    //   email: email,
    //   name: name,
    //   password: password,
    //   Password1: confirmPassword,
    // });
  };
  //   const signup = (email, name, password, confirmPassword) => {
  //     return function (dispatch, getState, { history }) {
  //       axios({
  //         method: "post",
  //         url: "http://13.125.246.227:8800//api/auth/signup",
  //         data: {
  //           email: email,
  //           name: name,
  //           password: password,
  //           confirmPassword: confirmPassword,
  //         },
  //       })
  //         .then((response) => {
  //           alert(response.data.result);
  //         })
  //         .catch((error) => {
  //           alert("error");
  //         });
  //     };
  //   };
  return (
    <div className="loginjoin">
      <Logo />
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
          <Checkbox text="서비스 이용약관에 동의합니다. (필수)" />
          <Checkbox text="개인정보 수집 및 이용에 동의합니다. (필수)" />
          <Checkbox text="이벤트 정보동의 마케팅 수신에 동의합니다. (선택)" />
        </div>
        <div>
          <button
            type="submit"
            style={{ color: "white", backgroundColor: "#A9A9A9" }}
            className="loginjoin_button"
          >
            회원가입
          </button>
        </div>
      </form>
      <div>
        SNS 계정으로 가입
        <button>네이버</button>
        <button>
          <Link to="accounts.kakao.com/">카카오</Link>
        </button>
      </div>
    </div>
  );
}
export default Join;
