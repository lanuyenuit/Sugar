import React, { useState } from "react";
import "../../css/todoTable.scss";
import TodoListDetail from "./TodoListDetail";
import TodoTitle from "./TodoTitle";
import InPutTodoItem from "./InputTodoItem";

function Todo({ item, updateTitle, index }) {
  const [isAddTodoDetail, setIsAddTodoDetail] = useState(false);
  const [todoNameListDetail, setTodoNameListDetail] = useState([]);

  let addTodoDetail = () => {
    setIsAddTodoDetail(true);
  };

  let handleKeyDown = (e, todoName) => {
    let list = [];
    if (e.keyCode === 13 || e.which === 13) {
      list = [...todoNameListDetail, todoName];
      setTodoNameListDetail(list);
      setIsAddTodoDetail(false);
    }
  };

  return (
    <div className="todo-table">
      <TodoTitle
        index={index}
        title={item}
        addTodoDetail={addTodoDetail}
        updateTitle={updateTitle}
      />
      <div className="body-table container-fluid">
        {isAddTodoDetail && <InPutTodoItem handleKeyDown={handleKeyDown} />}
        <TodoListDetail todoNameListDetail={todoNameListDetail} />
      </div>
    </div>
  );
}

export default Todo;
