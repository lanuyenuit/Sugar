import { ADD_TODO } from "./actionTypes";

export const addTodo = (inputTodoName) => ({
  type: ADD_TODO,
  payload: inputTodoName,
});
