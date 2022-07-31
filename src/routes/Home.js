import Logo from "../components/Logo";
import Profile from "../components/Profile";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  left: 0px;
  top: ${(props) => props.top};
  display: block;
`;
styled(Header)`
  position: fixed;
`;
function Home() {
  const USER_NAME = "USER_NAME";
  const userName = localStorage.getItem(USER_NAME); //localStorage에 저장한 userName
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setGreeting(`${userName}님 안녕하세요!`);
  }, [userName]);

  return (
    <div>
      <StyledImg src="/img/home/home_1.png" top={"75px"}></StyledImg>
      <Header />
      <StyledImg src="/img/home/home_2.png" top={"629px"}></StyledImg>
      <StyledImg src="/img/home/home_3.png" top={"1275px"}></StyledImg>
      <StyledImg src="/img/home/home_4.png" top={"1877px"}></StyledImg>
      {/* {userName !== null ? <h1>{greeting}</h1> : null} */}
    </div>
  );
}
export default Home;
