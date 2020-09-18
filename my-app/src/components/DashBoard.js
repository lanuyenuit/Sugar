import React, { useState } from "react";
import TodoList from "./TodoList";

function DashBoard() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);
  let createList = (todoName) => {
    let list = [];
    list = [...todoList, todoName];
    setTodoList(list);
  };
  return (
    <div className="container-fluid">
      <div className="row m-2">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo List"
            defaultValue={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="button"
            className="btn btn-primary"
            value="Create"
            onClick={() => createList(todoName)}
          />
        </div>
      </div>
      <div>
        <TodoList todoList={todoList} />
      </div>
    </div>
  );
}

export default DashBoard;
