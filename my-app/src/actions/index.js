import { ADD_TODO, DELETE_TODO } from "./actionTypes";

export const handleAddTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  index,
});
