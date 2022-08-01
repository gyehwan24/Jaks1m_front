import Header from "../components/Header";
import styled from "styled-components";
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
  width: 700px;
  height: 602px;
  left: ${(props) => props.left};
  top: 391px;
  background: #d9d9d9;
  border-radius: 56px;
`;

function MyStudy() {
  return (
    <div>
      <StyledBackground>
        <StyledSmallBox left={"48px"}>My schedule</StyledSmallBox>

        <StyledSmallBox left={"780px"}>Task to do</StyledSmallBox>
      </StyledBackground>
      <Header />
    </div>
  );
}

export default MyStudy;
