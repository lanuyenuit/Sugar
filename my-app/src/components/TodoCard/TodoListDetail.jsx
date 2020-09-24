import React from "react";

function TodoListDetail({ todoNameListDetail }) {
  return (
    <div>
      {todoNameListDetail.map((_, index) => (
        <div key={`${index + 1}-${_}`}>{_}</div>
      ))}
    </div>
  );
}

export default TodoListDetail;
