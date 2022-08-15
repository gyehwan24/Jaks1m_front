import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunity } from "../_actions/community";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, List } from "antd";
import { Pagination } from "antd";
import searchIcon from "../img/search_gray.png";
import styled from "styled-components";
import "./css/BoardList.css";
function BoardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSearchArticle = (e) => {
    //게시글 검색
    e.preventDefault();
  };
  useEffect(() => {
    dispatch(getCommunity(board_type)).then((response) => {
      console.log(response);
      setArticles(response.payload.postings);
    });
  }, [board_type]);
  let post_url = `posting/?category=${board_type}`;
  return (
    <div style={{ position: "absolute", top: "300px", left: "0px" }}>
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

      <ArticleList
        itemLayout="horizontal"
        dataSource={articles}
        renderItem={(item) => (
          <ListItem>
            <Link to={`/community/category/id?id=${item._id}`}>
              <List.Item.Meta
                style={{ width: "900px" }}
                avatar={
                  <Avatar
                    style={{ width: "45px", height: "45px" }}
                    src={item.userId.img}
                  />
                }
                title={<div style={{ fontSize: "18px" }}>{item.title}</div>}
                description={item.desc}
              />
            </Link>
          </ListItem>
        )}
      />
      {/* <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={10}
        centered
      /> */}

      {/* <ul>
        {articles &&
          articles.map((item) => (
            <li key={item._id}>
              <p>
                <Link to={`/community/category/id?id=${item._id}`}>
                  {item.title}/ {item.desc}/ 작성자: {item.userId.name}
                </Link>
              </p>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
export default BoardList;

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
const ArticleList = styled(List)`
  position: absolute;
  left: 373px;
  top: 100px;
  width: 1000px;
  height: 420px;
  background: rgba(216, 216, 216, 0.1);
`;
const ListItem = styled(List.Item)`
  padding-left: 25px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
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
