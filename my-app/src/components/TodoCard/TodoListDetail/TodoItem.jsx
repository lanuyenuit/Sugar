import React, { useEffect } from "react";

function TodoItem({ item, index, checkCompleted }) {
  return (
    <div
      className="form-check"
      style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}
    >
      <input
        className="form-check-input position-static mr-2"
        type="checkbox"
        id="blankCheckbox"
        value="option1"
        aria-label="..."
        onClick={() => checkCompleted(index)}
      />
      {item.text}
    </div>
  );
}

export default TodoItem;
