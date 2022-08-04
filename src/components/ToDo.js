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
  const [edit, setEdit] = useState(false);

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
  const handleCheckToDo = (id, check) => {
    dispatch(
      checkToDo(id, check).then((response) => {
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
              />
              {item.content} ({item.date})
              <button onClick={() => handleEditToDo(item._id)}>수정</button>
              <button onClick={() => handleRemoveToDo(item._id)}>삭제</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ToDo;
