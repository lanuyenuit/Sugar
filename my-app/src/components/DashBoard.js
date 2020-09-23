import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function DashBoard() {
  const [todolist, setTodoList] = useState([]);

  let handleAddTodo = (inputTodoName) => {
    setTodoList([...todolist, inputTodoName]);
  };

  return (
    <div className="container-fluid">
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todolist={todolist} />
    </div>
  );
}

export default DashBoard;
