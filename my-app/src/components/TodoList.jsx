import React, { useState, useEffect } from "react";
import Todo from "./TodoCard";

function TodoList({ todolist, updateTitle, deleteTodo }) {
  const [renderTodoList, setRenderTodoList] = useState(todolist);

  useEffect(() => {
    setRenderTodoList(todolist);
  }, [todolist]);

  return (
    <div>
      <div className="row">
        {renderTodoList &&
          renderTodoList.map((_, index) => {
            return (
              <div key={_.text} className="col-sm-4 mb-3">
                <Todo
                  item={_}
                  index={index}
                  updateTitle={updateTitle}
                  deleteTodo={deleteTodo}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TodoList;
