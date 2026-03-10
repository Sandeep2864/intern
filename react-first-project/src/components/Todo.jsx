import { useEffect, useState, useRef } from "react";
import "./css/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputref = useRef(null);

  const addItem = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputref.current.value, display: "" },
    ]);
    inputref.current.value = "";
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  },[]);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
      localStorage.setItem("todos_count", count);
    }, 100);
  }, [todos]);

  return (
    <div className="todo">
      <div className="todo-header">To-Do-List</div>
      <div className="todo-add">
        <input
          ref={inputref}
          type="text"
          placeholder="Add your task"
          className="todo-input"
        />
        <div
          className="todo-add-btn"
          onClick={() => {
            addItem();
          }}
        >
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((item, index) => {
          return (
            <TodoItems
              key={index}
              no={item.no}
              display={item.display}
              text={item.text}
              setTodos={setTodos}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
