import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { insertToDo, getToDo, removeToDo } from "../_actions/todoAction";
function ToDo() {
  const dispatch = useDispatch();
  const [todo, setToDo] = useState(""); //todo 1개단위
  const [todos, setTodos] = useState([]); //todo 배열
  const [todoList, setToDoList] = useState([]); //todo list

  const handleInputToDo = (event) => {
    event.preventDefault();
    setToDo(event.target.value);
  };

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

  useEffect(() => {
    dispatch(getToDo()).then((response) => {
      setToDoList(response.payload.toDos);
    });
  }, [todos]);

  const handleRemoveToDo = (id) => {
    dispatch(removeToDo(id)).then((response) => {
      setTodos(response.payload.toDos);
    });
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
            <div>
              <li key={item._id}>
                <input type="checkbox" />
                {item.content} ({item.date}) /checked:{item.isChecked}
                <button onClick={() => handleRemoveToDo(item._id)}>
                  remove
                </button>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ToDo;
