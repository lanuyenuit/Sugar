import React, { useState } from "react";
import "../css/addTodo.scss";

function AddTodo({ handleAddTodo }) {
  const [inputTodoName, setInputTodoName] = useState("");

  let createTodo = (inputTodoName) => {
    handleAddTodo(inputTodoName);
    setInputTodoName("");
  };
  return (
    <div className="form-add-todo my-3">
      <div className="mr-2">
        <input
          type="text"
          className="form-control input-todo"
          placeholder="Enter Todo List"
          value={inputTodoName}
          onChange={(e) => setInputTodoName(e.target.value)}
        />
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => createTodo(inputTodoName)}
        >
          Create
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
