import BoardList from "../components/BoardList";
import Header from "../components/Header";
import "./css/Board.css";
import profile_default from "../img/profile_icon.png";
function Board() {
  const userName = localStorage.getItem("USER_NAME");
  let profileImg = localStorage.getItem("USER_PROFILE");
  if (profileImg === null) profileImg = profile_default;
  return (
    <div>
      <div className="purpleBox"></div>
      <div className="topBox">
        <img src={profileImg} className="topBox_img" />
        <span className="topBox_name">userName</span>
      </div>
      {/* 글 목록을 불러온다. */}
      <BoardList />
      <Header />
    </div>
  );
}

export default Board;
