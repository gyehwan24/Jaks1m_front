import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Home from "./routes/Home";
import Kakao from "./routes/Kakao";
import Naver from "./routes/Naver";
import FindPw from "./routes/FindPw";
import ProfilePage from "./routes/ProfilePage";
import MyStudy from "./routes/MyStudy";
import Community from "./routes/Community";
import Board from "./routes/Board";
import PostArticle from "./components/PostArticle";
import Article from "./routes/Article";
function App() {
  return (
    <Routes>
      <Route path="community" element={<Community />}>
        {/* <Route path=":id" element={<Community />} /> */}
      </Route>
      <Route path="community/category" element={<Board />} />
      <Route path="community/category/posting" element={<PostArticle />} />
      <Route path="community/category/id" element={<Article />} />
      <Route path="/mystudy" element={<MyStudy />}>
        <Route path=":date" element={<MyStudy />} />
      </Route>
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/findpw" element={<FindPw />} />
      <Route path="/join/oauth/naver" element={<Naver />} />
      <Route path="/join/oauth/kakao" element={<Kakao />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
