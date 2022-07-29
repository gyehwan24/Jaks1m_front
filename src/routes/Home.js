import Logo from "../components/Logo";
import Profile from "../components/Profile";
import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const USER_NAME = "USER_NAME";
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const userName = localStorage.getItem(USER_NAME); //localStorage에 저장한 userName
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setGreeting(`${userName}님 안녕하세요!`);
  }, [userName]);

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(ACCESS_TOKEN);
    alert("로그아웃 되었습니다!");
    navigate("/");
  };
  const handleMouse = () => {
    console.log("mouse");
  };

  return (
    <div>
      <header>
        <h2 style={{ margin: "0" }}>HARU</h2>
        <div className="container">
          <input type="checkbox" id="trigger" />
          <label htmlFor="trigger" style={{ marginTop: "5px" }}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul id="menu">
            <li>
              전체 카테고리
              <ul>
                <li>게시판</li>
              </ul>
              <ul>
                <li>ToDo</li>
              </ul>
            </li>
          </ul>
        </div>

        <nav>
          {userName !== null ? (
            <div>
              <Profile />
              <button
                className="loginjoin_btn"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                로그아웃
              </button>
              <img src="img/search.png"></img>
            </div>
          ) : (
            <div>
              <button onMouseEnter={handleMouse} className="loginjoin_btn">
                <Link to="/join" className="loginjoin_btn">
                  회원가입
                </Link>
              </button>
              <button className="loginjoin_btn">
                <Link to="/login" className="loginjoin_btn">
                  로그인
                </Link>
              </button>
              <img
                src="img/search.png"
                style={{ width: "28px", height: "28px" }}
              ></img>
            </div>
          )}
        </nav>
      </header>

      <Logo />

      {userName !== null ? <h1>{greeting}</h1> : null}
    </div>
  );
}
export default Home;
