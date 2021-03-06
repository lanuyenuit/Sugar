import React, { useState } from "react";

function TodoTitle({ title, addTodoDetail, index, updateTitle, deleteTodo }) {
  const [disableTitle, setDisableTitle] = useState(true);
  const [editTitle, setEditTitle] = useState(title);

  const editTodoName = () => {
    setDisableTitle(false);
  };

  const handleUpdateTitle = (index, editTitle) => {
    updateTitle(index, editTitle);
    // setDisableTitle(true);
  };

  return (
    <div className="title-table-wrap">
      <div className="title-table d-flex p-2" onClick={() => editTodoName()}>
        <input
          className="titleTodoName"
          type="text"
          disabled={disableTitle}
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      </div>

      <div className="d-flex title-icon">
        <i
          className="fa fa-save mr-3"
          onClick={() => handleUpdateTitle(index, editTitle)}
        ></i>
        <i className="fa fa-plus-circle mr-3" onClick={() => addTodoDetail()} />
        <i className="fa fa-trash" onClick={() => deleteTodo(index)} />
      </div>
    </div>
  );
}

export default TodoTitle;
