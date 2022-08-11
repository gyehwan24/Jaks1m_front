import { Link } from "react-router-dom";
import Header from "../components/Header";
import BoardList from "../components/BoardList";
import { Tabs } from "antd";
const { TabPane } = Tabs;
function Community() {
  return (
    <div>
      <Header />
      <h1>커뮤니티</h1>
      {/* <Tabs defaultActiveKey="1" centered>
        <TabPane tab="자유게시판" key="1" onClick={() => console.log("zzz")}>
          <BoardList />
        </TabPane>
        <TabPane tab="질문게시판" key="2">
          <Link to="/community/category?category=questionboard" />
        </TabPane>
        <TabPane tab="팁 게시판" key="3">
          <Link to="/community/category?category=tipboard" />
        </TabPane>
      </Tabs> */}
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
