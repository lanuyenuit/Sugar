import React, { useState, useEffect } from "react";
import Todo from "./TodoCard";
import { connect } from "react-redux";

function TodoList({ todoList }) {
  // const [renderTodoList, setRenderTodoList] = useState(todolist);

  // useEffect(() => {
  //   setRenderTodoList(todolist);
  // }, [todolist]);

  return (
    <div>
      <div className="row">
        {todoList &&
          todoList.map((_, index) => {
            return (
              <div key={`${index}-${_.text}`} className="col-sm-4 mb-3">
                <Todo
                  item={_}
                  index={index}
                  // updateTitle={updateTitle}
                  // deleteTodo={deleteTodo}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todoList: state,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleTodo: (id) => dispatch(toggleTodo(id)),
// });

export default connect(mapStateToProps)(TodoList);
