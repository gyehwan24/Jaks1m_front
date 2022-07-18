import Logo from "../components/Logo";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Homepage</h1>
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
