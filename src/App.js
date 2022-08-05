import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Home from "./routes/Home";
import Kakao from "./routes/Kakao";
import Naver from "./routes/Naver";
import FindPw from "./routes/FindPw";
import ProfilePage from "./routes/ProfilePage";
import MyStudy from "./routes/MyStudy";

function App() {
  return (
    <Routes>
      <Route path="/category/mystudy" element={<MyStudy />}>
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
