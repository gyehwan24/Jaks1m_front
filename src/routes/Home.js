import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch } from "react-redux";
import { getNewToken } from "../_actions/userAction";

function Home() {
  const userName = localStorage.getItem("USER_NAME");
  const dispatch = useDispatch();
  const getToken = () => {
    const token = localStorage.getItem("AT");
    let body = {
      accessToken: token,
    };
    dispatch(getNewToken(body)).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={getToken}>Token</button>

      <header>
        <h2 style={{ margin: "0" }}>HARU</h2>
        <div className="container">
          <input type="checkbox" id="trigger" />
          <label htmlFor="trigger" style={{ marginTop: "5px" }}>
            <span></span>
            <span></span>
            <span></span>
            {/* <ul id="menu">
              <li>
                전체 카테고리
                <ul>
                  <li>게시판</li>
                </ul>
                <ul>
                  <li>ToDo</li>
                </ul>
              </li>
            </ul> */}
          </label>
        </div>

        <nav>
          <button className="loginjoin_Btn">
            <Link to="/login">로그인</Link>
          </button>
          <button className="loginjoin_Btn" style={{ textDecoration: "none" }}>
            <Link to="/join">회원가입</Link>
          </button>
        </nav>
      </header>
      <h1>{userName}님, 안녕하세요!</h1>
      <Logo />
    </div>
  );
}
export default Home;
