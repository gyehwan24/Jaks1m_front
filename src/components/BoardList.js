import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCommunity } from "../_actions/community";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, List } from "antd";
import { Pagination } from "antd";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function BoardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let board_type = new URL(window.location.href).searchParams.get("category");

  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultTab, setDefaultTab] = useState("1");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const onTabClick = (event) => {
    switch (event) {
      case "1":
        navigate("/community/category?category=freeboard");
        break;
      case "2":
        navigate("/community/category?category=questionboard");
        break;
      case "3":
        navigate("/community/category?category=tipboard");
    }
  };

  useEffect(() => {
    dispatch(getCommunity(board_type)).then((response) => {
      console.log(response);
      setArticles(response.payload.postings);
    });
    switch (board_type) {
      case "freeboard":
        setDefaultTab("1");
        break;
      case "questionboard":
        setDefaultTab("2");
        break;
      case "tipboard":
        setDefaultTab("3");
        break;
    }
  }, [board_type]);
  let url = `posting/?category=${board_type}`;
  return (
    <div style={{ position: "absolute", top: "90px", left: "0px" }}>
      <Tabs defaultActiveKey={defaultTab} onTabClick={onTabClick}>
        <TabPane tab="자유게시판" key="1"></TabPane>
        <TabPane tab="질문게시판" key="2"></TabPane>
        <TabPane tab="팁 게시판" key="3"></TabPane>
      </Tabs>
      <button style={{ backgroundColor: "white", borderColor: "lightgray" }}>
        <Link to={url}>글쓰기</Link>
      </button>
      <List
        itemLayout="horizontal"
        dataSource={articles}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/community/category/id?id=${item._id}`}>
              <List.Item.Meta
                style={{ width: "1000px" }}
                avatar={<Avatar src={item.userId.img} />}
                title={item.title}
                description={item.desc}
              />
            </Link>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={10}
        centered
      />

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
