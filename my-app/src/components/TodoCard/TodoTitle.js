import React from "react";

function TodoTitle({ title, addTodoDetail }) {
  return (
    <div className="title-table d-flex p-2">
      <div>{title}</div>
      <div className="d-flex title-icon">
        <i className="fa fa-plus-circle mr-3" onClick={() => addTodoDetail()} />
        <i className="fa fa-trash" />
      </div>
    </div>
  );
}

export default TodoTitle;
