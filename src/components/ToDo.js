import { useState } from "react";
import { useDispatch } from "react-redux";
import { insertToDo } from "../_actions/userAction";
function ToDo() {
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
    dispatch(insertToDo(inputTodo)).then((response) => {
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
        {todos.map((item) => (
          <div>
            <li key={item.date}>
              <input type="checkbox" />
              {item.text}
              <button>remove</button>
              <button>change</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ToDo;
