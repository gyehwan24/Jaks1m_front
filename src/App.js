import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Join from "./routes/Join";
import Home from "./routes/Home";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
