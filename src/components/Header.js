//모든 페이지 상단에 위치할 헤더 컴포넌트. 로고와 메뉴바, 프로필, 로그인 등
import "./Header.css";
import Profile from "../components/Profile";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import search from "../img/search.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const USER_NAME = "USER_NAME";
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const USER_PROFILE = "USER_PROFILE";
  const userName = localStorage.getItem(USER_NAME); //localStorage에 저장한 userName
  const [menuClicked, setMenuClicked] = useState(false);
  const handleMenuClick = () => {
    setMenuClicked((current) => !current);
  };
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem(USER_NAME);
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_PROFILE);
    toast.success("로그아웃 되었습니다!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1000,
      hideProgressBar: true,
    });
    navigate("/");
  };
  return (
    <div>
      <header>
        <Link to="/" className="logo">
          <h2 className="logo">HARU</h2>
        </Link>

        <div className="container">
          <input type="checkbox" id="trigger" onClick={handleMenuClick} />
          <label htmlFor="trigger">
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                전체 카테고리
                <div className={menuClicked ? "menu_item_on" : "menu_item_off"}>
                  <ul style={{ border: "0" }}>
                    <li>개인스터디</li>
                  </ul>
                  <ul>
                    <li>그룹스터디</li>
                  </ul>
                  <ul>
                    <li>커뮤니티</li>
                  </ul>
                  <ul>
                    <li onClick={handleMenuClick}>
                      <Link to="/category/mystudy">마이스터디</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </label>
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
              <img
                src={search}
                style={{
                  width: "25px",
                  height: "25px",
                  marginTop: "20px",
                  marginRight: "15px",
                }}
              ></img>
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
                src={search}
                style={{
                  width: "25px",
                  height: "25px",
                  marginTop: "20px",
                  marginRight: "15px",
                }}
              ></img>
            </div>
          )}
        </nav>
      </header>
      <ToastContainer />
    </div>
  );
}
export default Header;
