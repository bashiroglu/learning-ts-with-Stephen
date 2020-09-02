import { fetchTodosAction, deleteTodoAction } from "./todos";

export enum actionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = fetchTodosAction | deleteTodoAction;
