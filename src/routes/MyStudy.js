import styled from "styled-components";
import ToDo from "../components/ToDo";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
import Schedule from "../components/Schedule";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const StyledBackground = styled.div`
  position: absolute;
  width: 1440px;
  height: 2186px;
  left: 0px;
  top: 75px;
  width: 100%;
  background: rgba(217, 217, 217, 0.5);
  border-radius: 96px;
`;
const StyledMiddleBox = styled.div`
  position: absolute;
  width: 45%;
  height: 602px;
  left: ${(props) => props.left};
  top: 270px;
  background: #d9d9d9;
  border-radius: 56px;
`;
const StyleSmallBox = styled.div`
  position: absolute;
  width: 93%;
  height: 277px;
  left: 48px;
  top: 940px;
  background: #d9d9d9;
  border-radius: 82px;
`;
function MyStudy() {
  const navigate = useNavigate();
  const isAdmin = () => {
    return !!localStorage.getItem("ACCESS_TOKEN");
  };
  //엑세스토큰이 없으면 로그인 시키기
  // const token = localStorage.getItem("ACCESS_TOKEN");
  // if (localStorage.getItem("ACCESS_TOKEN") === null) {
  //   // toast.error("로그인 후 이용해주세요!", {
  //   //   position: toast.POSITION.TOP_CENTER,
  //   //   autoClose: 1000,
  //   //   hideProgressBar: true,
  //   // });
  //   navigate("/login");
  //   alert("로그인 후 이용해주세요!");
  // }

  return (
    <div>
      {/* {isAdmin() ? null : <Link to="/login" />} */}
      <StyledBackground>
        <Calendar />
        <StyledMiddleBox left={"3.5%"}>
          <Schedule />
        </StyledMiddleBox>

        <StyledMiddleBox left={"51.5%"}>
          <ToDo />
        </StyledMiddleBox>
        <StyleSmallBox />
      </StyledBackground>
      <Header />

      <ToastContainer />
    </div>
  );
}

export default MyStudy;
