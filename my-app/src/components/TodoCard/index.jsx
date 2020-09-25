import React, { useState } from "react";
import "../../css/todoTable.scss";
import TodoListDetail from "./TodoListDetail/index.jsx";
import TodoTitle from "./TodoTitle";
import InPutTodoItem from "./InputTodoItem";

function Todo({ item, updateTitle, index, deleteTodo }) {
  const [isAddTodoDetail, setIsAddTodoDetail] = useState(false);
  const [todoNameListDetail, setTodoNameListDetail] = useState([]);

  const checkCompleted = (index) => {
    let newList = [...todoNameListDetail];
    newList[index].isCompleted = !newList[index].isCompleted;
    setTodoNameListDetail(newList);
  };
  let addTodoDetail = () => {
    setIsAddTodoDetail(true);
  };

  let handleKeyDown = (e, todoName) => {
    let list = [];
    if (e.keyCode === 13 || e.which === 13) {
      list = [...todoNameListDetail, { text: todoName, isCompleted: false }];
      setTodoNameListDetail(list);
      setIsAddTodoDetail(false);
    }
  };
  console.log({ item });
  return (
    <div className="todo-table">
      <TodoTitle
        index={index}
        title={item.text}
        addTodoDetail={addTodoDetail}
        updateTitle={updateTitle}
        deleteTodo={deleteTodo}
      />
      <div className="body-table container-fluid">
        {isAddTodoDetail && <InPutTodoItem handleKeyDown={handleKeyDown} />}
        <TodoListDetail
          todoNameListDetail={todoNameListDetail}
          checkCompleted={checkCompleted}
        />
      </div>
    </div>
  );
}

export default Todo;
