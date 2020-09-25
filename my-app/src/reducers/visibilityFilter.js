import { ADD_TODO } from "../actions/actionTypes";

const defaultState = {
  todoList: [],
};

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default todos;
