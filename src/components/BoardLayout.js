import { Link } from "react-router-dom";
import profile_default from "../img/profile_icon.png";

import styled from "styled-components";
import "./css/BoardLayout.css";

function BoardLayout() {
  const userName = localStorage.getItem("USER_NAME");
  let profileImg = localStorage.getItem("USER_PROFILE");
  if (profileImg === null) profileImg = profile_default;
  let board_type = new URL(window.location.href).searchParams.get("category");
  let board_name = "";
  switch (board_type) {
    case "freeboard":
      board_name = "자유게시판";
      break;
    case "questionboard":
      board_name = "질문게시판";
      break;
    case "tipboard":
      board_name = "팁게시판";
      break;
  }

  return (
    <div style={{ position: "absolute", top: "300px", left: "0px" }}>
      <div className="purpleBox"></div>
      <div className="topBox">
        <img src={profileImg} className="topBox_img" />
        <span className="topBox_name">{userName}</span>
      </div>
      <nav>
        <Link to="/community/category?category=freeboard">
          <BoardMenu>자유게시판</BoardMenu>
        </Link>
        <Link to="/community/category?category=questionboard">
          <BoardMenu>질문게시판</BoardMenu>
        </Link>
        <Link to="/community/category?category=tipboard">
          <BoardMenu>팁 게시판 </BoardMenu>
        </Link>
      </nav>
      <IntroduceBoard>{board_name}</IntroduceBoard>
    </div>
  );
}
export default BoardLayout;

const BoardMenu = styled.div`
  width: 240px;
  margin-left: 67px;
  margin-bottom: 67px;
  padding-bottom: 5px;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

const IntroduceBoard = styled.div`
  position: relative;
  left: 373px;
  top: -300px;
  width: 300px;
  height: 35px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
`;
