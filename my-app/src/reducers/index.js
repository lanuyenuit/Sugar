// import { combineReducers } from "redux";
// import todos from "./todos";
// import visibilityFilter from "./visibilityFilter";

// export default combineReducers({ todos, visibilityFilter });

import { ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          isCompleted: false,
        },
      ];

    case DELETE_TODO:
      return [...state.filter((item, index) => index != action.index)];
    default:
      return state;
  }
};

export default todos;
