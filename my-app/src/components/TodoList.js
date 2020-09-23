import React, { useState, useEffect } from "react";
import Todo from "./TodoCard/Todo";

function TodoList({ todolist }) {
  const [renderTodoList, setRenderTodoList] = useState(todolist);

  useEffect(() => {
    setRenderTodoList(todolist);
  }, [todolist]);

  return (
    <div>
      <div className="row">
        {renderTodoList &&
          renderTodoList.map((item, index) => (
            <div key={index} className="col-sm-4 mb-3">
              <Todo item={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
