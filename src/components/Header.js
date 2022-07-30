//모든 페이지 상단에 위치할 헤더 컴포넌트. 로고와 메뉴바, 프로필, 로그인 등
import "./Header.css";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Header() {
  const USER_NAME = "USER_NAME";
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const IMG_PROFILE = "IMG_PROFILE";
  const userName = localStorage.getItem(USER_NAME); //localStorage에 저장한 userName
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(IMG_PROFILE);
    alert("로그아웃 되었습니다!");
    navigate("/");
  };
  return (
    <div>
      <header>
        <h2 className="logo">
          <Link to="/" className="logo">
            HARU
          </Link>
        </h2>
        <div className="container">
          <input type="checkbox" id="trigger" />
          <label htmlFor="trigger">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul id="menu">
            <li>
              전체 카테고리
              {/* <ul>
                <li>게시판</li>
              </ul>
              <ul>
                <li>ToDo</li>
              </ul> */}
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
                style={{ width: "28px", height: "28px" }}
              ></img>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
export default Header;
