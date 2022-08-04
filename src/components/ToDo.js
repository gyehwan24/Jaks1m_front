import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  insertToDo,
  getToDo,
  removeToDo,
  checkToDo,
  editToDo,
} from "../_actions/todoAction";

function ToDo() {
  const dispatch = useDispatch();
  //state
  const [todo, setToDo] = useState(""); //todo 1개단위
  const [todos, setTodos] = useState([]); //todo 배열
  const [todoList, setToDoList] = useState([]); //todo list

  useEffect(() => {
    dispatch(getToDo()).then((response) => {
      setToDoList(response.payload.toDos);
    });
  }, [todos]);

  const handleInputToDo = (event) => {
    event.preventDefault();
    setToDo(event.target.value);
  };

  //todo 입력 handler
  const handleSubmitToDo = (event) => {
    event.preventDefault();
    if (todo === "") return; //todo가 빈칸이면 submit X
    let inputTodo = {
      date: new Date(Date.now()),
      content: todo,
      isChecked: false,
    };
    setTodos((currentArray) => [inputTodo, ...currentArray]);
    dispatch(insertToDo(inputTodo)).then((response) => {});
    setToDo("");
  };

  //todo 삭제 handler
  const handleRemoveToDo = (id) => {
    dispatch(removeToDo(id)).then((response) => {
      setTodos(response.payload.toDos);
    });
  };

  //todo check handler
  const handleCheckToDo = (id) => {
    dispatch(
      checkToDo(id).then((response) => {
        setTodos(response.payload.toDos);
      })
    );
  };

  //todo 수정 handler
  const handleEditToDo = (id, content) => {
    dispatch(
      editToDo(id, content).then((response) => {
        setTodos(response.payload.toDos);
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmitToDo}>
        <input
          onChange={handleInputToDo}
          type="text"
          value={todo}
          placeholder="write your to do!"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {/* {todos.map((item) => (
          <div>
            <li key={item.date}>
              <input type="checkbox" />
              {item.text}
              <button>remove</button>
              <button>change</button>
            </li>
          </div>
        ))} */}
      </ul>
      <ul>
        {todoList &&
          todoList.map((item) => (
            <li key={item._id}>
              <input
                onClick={() => handleCheckToDo(item._id)}
                type="checkbox"
              />
              {item.content} ({item.date})
              <button onClick={() => handleEditToDo(item._id)}>edit</button>
              <button onClick={() => handleRemoveToDo(item._id)}>remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ToDo;
