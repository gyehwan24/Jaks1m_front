import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import { current } from "@reduxjs/toolkit";
import customAxios from "../customAxios";
import { useDispatch } from "react-redux";
import { postToDo } from "../_actions/userAction";

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
  const dispatch = useDispatch();
  const [todo, setToDo] = useState(""); //todo 1개단위
  const [todos, setTodos] = useState([]); //todo 배열

  const handleSubmitToDo = (event) => {
    event.preventDefault();
    if (todo === "") return; //todo가 빈칸이면 submit X
    let inputTodo = {
      text: todo,
      date: new Date(Date.now()),
      checked: false,
    };
    setTodos((currentArray) => [inputTodo, ...currentArray]);
    dispatch(postToDo(inputTodo)).then((response) => {
      console.log(response);
    });
    console.log(todos);
    setToDo("");
  };

  const handleInputToDo = (event) => {
    event.preventDefault();
    setToDo(event.target.value);
  };
  return (
    <div>
      <StyledBackground>
        <form onSubmit={handleSubmitToDo}>
          <input
            onChange={handleInputToDo}
            type="text"
            value={todo}
            placeholder="write your to do!"
          />
        </form>
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
        <StyledSmallBox left={"48px"}>My schedule</StyledSmallBox>

        <StyledSmallBox left={"780px"}>Task to do</StyledSmallBox>
      </StyledBackground>
      <Header />
    </div>
  );
}

export default MyStudy;
