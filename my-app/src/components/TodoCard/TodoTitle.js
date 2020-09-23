import React, { useState, useRef, useEffect } from "react";

function TodoTitle({ title, addTodoDetail }) {
  const [disableTitle, setDisableTitle] = useState(true);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const editTodoName = () => {
    setDisableTitle(false);
  };
  return (
    <div className="title-table d-flex p-2" onClick={() => editTodoName()}>
      <input
        className="titleTodoName"
        type="text"
        ref={inputRef}
        disabled={disableTitle}
        defaultValue={title}
        onFocus={(e) => {
          e.target.select();
        }}
      />

      <div className="d-flex title-icon">
        <i className="fa fa-plus-circle mr-3" onClick={() => addTodoDetail()} />
        <i className="fa fa-trash" />
      </div>
    </div>
  );
}

export default TodoTitle;
