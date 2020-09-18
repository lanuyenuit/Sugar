import React from "react";
import "../css/todoTable.scss";
function TodoTable(props) {
  return (
    <div className="todo-table">
      <div className="title-table">
        <div>{props.todoName}</div>
        <div className="d-flex">
          <i className="fa fa-list mr-3" />
          <i className="fa fa-trash" />
        </div>
      </div>
    </div>
  );
}

export default TodoTable;
