import React, { useState } from "react";

function InputTodoItem({ handleKeyDown }) {
  const [todoNameDetail, setTodoNameDetail] = useState("");

  let updateHandleKeyDown = (e, todoNameDetail) => {
    handleKeyDown(e, todoNameDetail);
    setTodoNameDetail("");
  };
  return (
    <div>
      <input
        type="text"
        className="form-control mt-2"
        placeholder="New item"
        defaultValue={todoNameDetail}
        onKeyDown={(e) => updateHandleKeyDown(e, todoNameDetail)}
        onChange={(e) => setTodoNameDetail(e.target.value)}
      />
    </div>
  );
}

export default InputTodoItem;
