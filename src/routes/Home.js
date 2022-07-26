import Logo from "../components/Logo";
import { Link } from "react-router-dom";

function Home() {
  const userName = localStorage.getItem("USER_NAME");

  return (
    <div>
      <h1>{userName}님, 안녕하세요!</h1>
      <button>
        <Link to="/login">로그인</Link>
      </button>
      <button>
        <Link to="/join">회원가입</Link>
      </button>

      <Logo />
    </div>
  );
}
export default Home;
