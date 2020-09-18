import React from "react";
import TodoTable from "./TodoTable";

function TodoList(props) {
  return (
    <div>
      <div className="row">
        {props.todoList &&
          props.todoList.map((item, index) => (
            <div className="col-sm-4 mb-3">
              <TodoTable key={index} todoName={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
