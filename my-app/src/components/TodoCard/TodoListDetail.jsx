import React from "react";

function TodoListDetail({ todoNameListDetail }) {
  return (
    <div>
      {todoNameListDetail.map((_, index) => (
        <div key={index}>{_}</div>
      ))}
    </div>
  );
}

export default TodoListDetail;
