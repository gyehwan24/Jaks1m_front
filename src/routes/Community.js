import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import BoardList from "../components/BoardList";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function Community() {
  const navigate = useNavigate();
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
  return (
    <div>
      <div style={{ position: "absolute", top: "90px", left: "0px" }}>
        <Tabs defaultActiveKey="1" centered onTabClick={onTabClick}>
          <TabPane tab="자유게시판" key="1"></TabPane>
          <TabPane tab="질문게시판" key="2"></TabPane>
          <TabPane tab="팁 게시판" key="3"></TabPane>
        </Tabs>
      </div>
      {/* <nav>
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
      </nav> */}
      <Header />
    </div>
  );
}

export default Community;
