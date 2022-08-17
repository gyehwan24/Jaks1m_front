import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import profile_default from "../img/profile_icon.png";
import searchIcon from "../img/search_gray.png";
import styled from "styled-components";
import "./css/BoardLayout.css";
function BoardLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  let post_url = `posting/?category=${board_type}`;
  const handleSearchArticle = (e) => {
    //게시글 검색
    e.preventDefault();
  };
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

      <TopOfArticles>
        <form onSubmit={handleSearchArticle}>
          <SearchArticle type="text" placeholder="검색어를 입력하세요" />
          <button
            style={{
              border: "0px",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <img src={searchIcon} style={{ width: "25px" }} />
          </button>
        </form>

        <Link to={post_url}>
          <PostArticleBtn>글 등록하기</PostArticleBtn>
        </Link>
      </TopOfArticles>
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

const TopOfArticles = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 373px;
  top: 50px;
`;
const PostArticleBtn = styled.button`
  border: 0;
  width: 158px;
  height: 40px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.8);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
const SearchArticle = styled.input`
  width: 190px;
  height: 21px;
  border: 0;
  margin-top: 10px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgb(151 151 151);
`;
const IntroduceBoard = styled.div`
  position: relative;
  left: 373px;
  top: -300px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 35px;
`;
