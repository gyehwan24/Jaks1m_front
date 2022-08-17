import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunity } from "../_actions/community";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, List } from "antd";
import { Pagination } from "antd";

import styled from "styled-components";
import "./css/BoardList.css";
import BoardLayout from "./BoardLayout";
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

  useEffect(() => {
    dispatch(getCommunity(board_type)).then((response) => {
      console.log(response);
      setArticles(response.payload.postings);
    });
  }, [board_type]);
  let post_url = `posting/?category=${board_type}`;
  return (
    <div>
      <BoardLayout />
      <div style={{ position: "absolute", top: "300px", left: "0px" }}>
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
    </div>
  );
}

export default BoardList;

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
