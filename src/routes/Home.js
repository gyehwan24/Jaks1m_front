import Logo from "../components/Logo";
import Profile from "../components/Profile";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const USER_NAME = "USER_NAME";
  const ACCESS_TOKEN = "ACCESS_TOKEN";
  const IMG_PROFILE = "IMG_PROFILE";
  const userName = localStorage.getItem(USER_NAME); //localStorage에 저장한 userName
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setGreeting(`${userName}님 안녕하세요!`);
  }, [userName]);

  return (
    <div>
      <Header />
      <Logo />

      {userName !== null ? <h1>{greeting}</h1> : null}
    </div>
  );
}
export default Home;
