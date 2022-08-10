import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import BoardList from "../components/BoardList";
function Community() {
  return (
    <div>
      <h1>커뮤니티</h1>

      <nav>
        <div>
          <Link to="/community/category?category=freeboard">자유게시판</Link>
        </div>
        <div>
          <Link to="/community/category?category=questionboard">
            질문게시판
          </Link>
        </div>

        <div>
          <Link to="/community/category?category=tipboard">팁 게시판</Link>
        </div>
      </nav>
    </div>
  );
}

export default Community;
