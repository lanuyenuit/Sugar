import React, { useState } from "react";

function AddTodo({ handleAddTodo }) {
  const [inputTodoName, setInputTodoName] = useState("");

  let createTodo = (inputTodoName) => {
    handleAddTodo(inputTodoName);
    setInputTodoName("");
  };
  return (
    <div>
      <div className="row m-2">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo List"
            value={inputTodoName}
            onChange={(e) => setInputTodoName(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="button"
            className="btn btn-primary"
            value="Create"
            onClick={() => createTodo(inputTodoName)}
          />
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
