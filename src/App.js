import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Home from "./routes/Home";
import Kakao from "./routes/Kakao";
import Naver from "./routes/Naver";
import axios from "axios";

function App() {
  return (
    <Routes>
      <Route path="/join/oauth/naver" element={<Naver />} />
      <Route path="/join/oauth/kakao" element={<Kakao />} />
      {/* <Route path="/join/accounts.kakao.com/" element={<Kakao />} /> */}
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
