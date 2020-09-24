import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function DashBoard() {
  const [todolist, setTodoList] = useState([]);

  let handleAddTodo = (inputTodoName) => {
    setTodoList([...todolist, inputTodoName]);
  };
  let updateTitle = (index, todoName) => {
    let newList = [...todolist];
    if (index && todoName != "") {
      newList[index] = todoName;
      setTodoList(newList);
    }
  };
  return (
    <div className="container-fluid">
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList todolist={todolist} updateTitle={updateTitle} />
    </div>
  );
}

export default DashBoard;
