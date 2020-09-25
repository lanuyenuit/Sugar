import React, { useState } from "react";
import { deleteTodo } from "../../actions";
import { connect } from "react-redux";

function TodoTitle({ dispatch, index, title }) {
  const [disableTitle, setDisableTitle] = useState(true);
  const [editTitle, setEditTitle] = useState(title);

  // const editTodoName = () => {
  //   setDisableTitle(false);
  // };

  // const handleUpdateTitle = (index, editTitle) => {
  //   updateTitle(index, editTitle);
  //   // setDisableTitle(true);
  // };

  return (
    <div className="title-table-wrap">
      <div
        className="title-table d-flex p-2"
        // onClick={() => editTodoName()}
      >
        <input
          className="titleTodoName"
          type="text"
          disabled={disableTitle}
          value={title}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      </div>

      <div className="d-flex title-icon">
        <i
          className="fa fa-save mr-3"
          // onClick={() => handleUpdateTitle(index, editTitle)}
        ></i>
        {/* <i className="fa fa-plus-circle mr-3" onClick={() => addTodoDetail()} /> */}
        <i
          className="fa fa-trash"
          onClick={() => dispatch(deleteTodo(index))}
        />
      </div>
    </div>
  );
}

export default connect()(TodoTitle);
