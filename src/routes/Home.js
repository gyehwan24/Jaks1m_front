import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import "./Home.css";
import { useDispatch } from "react-redux";
import { getNewToken } from "../_actions/userAction";

function Home() {
  const userName = localStorage.getItem("USER_NAME");
  // const dispatch = useDispatch();
  // const getToken = () => {
  //   const token = localStorage.getItem("AT");
  //   let body = {
  //     accessToken: token,
  //   };
  //   dispatch(getNewToken(body)).then((response) => {
  //     console.log(response);
  //   });
  // };
  const handleLogout = (event) => {
    event.preventDefault();
    if (userName !== null) localStorage.removeItem(userName);
  };

  return (
    <div>
      {/* <button onClick={getToken}>Token</button> */}

      <header>
        <h2 style={{ margin: "0" }}>HARU</h2>
        <div className="container">
          <input type="checkbox" id="trigger" />
          <label for="trigger" style={{ marginTop: "5px" }}>
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
              <button className="loginjoin_btn" onClick={handleLogout}>
                로그아웃
              </button>
              <img src="img/search.png"></img>
            </div>
          ) : (
            <div>
              <button className="loginjoin_btn">
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
                style={{ width: "24px", height: "24px" }}
              ></img>
            </div>
          )}
        </nav>
      </header>

      <Logo />
      {userName !== null ? <h1>{userName}님, 안녕하세요!</h1> : null}
    </div>
  );
}
export default Home;
