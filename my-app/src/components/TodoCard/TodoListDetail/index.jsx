import React from "react";
import TodoItem from "./TodoItem";
function TodoListDetail({ todoNameListDetail, checkCompleted }) {
  return (
    <div>
      {todoNameListDetail.map((_, index) => (
        <div key={`${index}-${_.text}`}>
          <TodoItem index={index} item={_} checkCompleted={checkCompleted} />
        </div>
      ))}
    </div>
  );
}

export default TodoListDetail;
