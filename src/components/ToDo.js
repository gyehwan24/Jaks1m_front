import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./css/ToDo.css";
import {
  insertToDo,
  getToDo,
  removeToDo,
  checkToDo,
  editToDo,
  getDateToDo,
} from "../_actions/todoAction";

function ToDo() {
  const dispatch = useDispatch();
  const params = useParams();
  let day_todo = params.date;
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  let inputDate = `${year}${month}${day}`;
  //state
  const [todo, setToDo] = useState(""); //todo 1개단위
  const [todos, setTodos] = useState([]); //todo 배열
  const [todoList, setToDoList] = useState([]); //todo list
  // const [edit, setEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false); //check 상태

  const handleInputToDo = (event) => {
    event.preventDefault();
    setToDo(event.target.value);
  };

  //todo insert handler
  const handleSubmitToDo = (event) => {
    event.preventDefault();
    if (todo === "") return; //todo가 빈칸이면 submit X
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    let inputDate = `${year}${month}${day}`;
    let inputTodo = {
      date: inputDate,
      content: todo,
      isChecked: false,
    };
    setTodos((currentArray) => [inputTodo, ...currentArray]);
    dispatch(insertToDo(inputTodo)).then((response) => {
      console.log(response);
    });
    setToDo("");
    dispatch(getDateToDo(inputDate)).then((response) => {
      console.log(response);
      setToDoList(response.payload.toDos);
    });
  };

  //todo 삭제 handler
  const handleRemoveToDo = (id) => {
    dispatch(removeToDo(id)).then((response) => {
      setTodos(response.payload.toDos);
    });
  };

  //todo check handler
  const handleCheckToDo = (id, check) => {
    dispatch(checkToDo(id, check)).then((response) => {
      setTodos(response.payload.toDos);
      console.log(response);
    });
  };

  //todo 수정 handler
  // const handleEditToDo = (id, content) => {
  //   dispatch(editToDo(id, content)).then((response) => {
  //     setTodos(response.payload.toDos);
  //   });
  // };
  useEffect(() => {
    if (day_todo === undefined) {
      dispatch(getDateToDo(inputDate)).then((response) => {
        console.log(response);
        setToDoList(response.payload.toDos);
      });
    } else {
      dispatch(getDateToDo(day_todo)).then((response) => {
        console.log(response);
        setToDoList(response.payload.toDos);
      });
    }
  }, [todos, day_todo]);

  return (
    <div>
      <form onSubmit={handleSubmitToDo}>
        <input
          onChange={handleInputToDo}
          type="text"
          value={todo}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList &&
          todoList.map((item) => (
            <li key={item._id}>
              <input
                onClick={() => handleCheckToDo(item._id, item.isChecked)}
                type="checkbox"
                className={item.isChecked ? "todo_on" : "todo_off"}
              />
              {item.content} ({item.date})
              {/* <button onClick={() => handleEditToDo(item._id)}>수정</button> */}
              <button onClick={() => handleRemoveToDo(item._id)}>삭제</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ToDo;
