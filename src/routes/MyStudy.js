import styled from "styled-components";
import ToDo from "../components/ToDo";
import Header from "../components/Header";
import Calendar from "../components/Calendar";
const StyledBackground = styled.div`
  position: absolute;
  width: 1440px;
  height: 2186px;
  left: 0px;
  top: 81px;
  width: 100%;
  background: rgba(217, 217, 217, 0.5);
  border-radius: 96px;
`;
const StyledSmallBox = styled.div`
  position: absolute;
  width: 45%;
  height: 602px;
  left: ${(props) => props.left};
  top: 300px;
  background: #d9d9d9;
  border-radius: 56px;
`;

function MyStudy() {
  return (
    <div>
      <StyledBackground>
        <Calendar />
        <StyledSmallBox left={"3.5%"}>My schedule</StyledSmallBox>

        <StyledSmallBox left={"51.5%"}>
          To Do List
          <ToDo />
        </StyledSmallBox>
      </StyledBackground>
      <Header />
    </div>
  );
}

export default MyStudy;
