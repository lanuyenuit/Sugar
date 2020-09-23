import React, { useState } from "react";
import "../../css/todoTable.scss";
import TodoListDetail from "./TodoListDetail";

function Todo(props) {
  const [isAddTodoDetail, setIsAddTodoDetail] = useState(false);
  const [todoNameDetail, setTodoNameDetail] = useState("");
  const [todoNameListDetail, setTodoNameListDetail] = useState([]);
  let addTodoDetail = () => {
    setIsAddTodoDetail(true);
  };

  let handleKeyDown = (e) => {
    let list = [];
    if (e.keyCode == 13) {
      list = [...todoNameListDetail, todoNameDetail];
      setTodoNameListDetail(list);
    }
  };

  return (
    <div className="todo-table">
      <div className="title-table d-flex p-2">
        <div>{props.todoName}</div>
        <div className="d-flex title-icon">
          <i
            className="fa fa-plus-circle mr-3"
            onClick={() => addTodoDetail()}
          />
          <i className="fa fa-trash" />
        </div>
      </div>
      <div className="body-table container-fluid">
        {isAddTodoDetail && (
          <input
            type="text"
            className="form-control mt-2"
            placeholder="New item"
            defaultValue={todoNameDetail}
            onKeyDown={(e) => handleKeyDown(e)}
            onChange={(e) => setTodoNameDetail(e.target.value)}
          />
        )}
        <TodoListDetail todoNameListDetail={todoNameListDetail} />
      </div>
    </div>
  );
}

export default Todo;
