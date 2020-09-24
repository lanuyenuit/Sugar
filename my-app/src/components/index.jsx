import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function DashBoard() {
  const [todolist, setTodoList] = useState([]);

  let handleAddTodo = (inputTodoName) => {
    setTodoList([...todolist, inputTodoName]);
  };
  let updateTitle = (index, todoName) => {
    let newList = [...todolist];
    if (newList) {
      newList[index] = todoName;
      setTodoList(newList);
    }
  };

  let deleteTodo = (index) => {
    let newList = [...todolist];
    if (newList) {
      newList.splice(index, 1);
      setTodoList(newList);
    }
  };

  return (
    <div className="container-fluid">
      <AddTodo handleAddTodo={handleAddTodo} />
      <TodoList
        todolist={todolist}
        updateTitle={updateTitle}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default DashBoard;
