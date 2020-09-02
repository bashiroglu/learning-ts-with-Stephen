import axios from "axios";
import { actionTypes } from "./types";
import { Dispatch } from "redux";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export interface fetchTodosAction {
  type: actionTypes.fetchTodos;
  payload: Todo[];
}
export interface deleteTodoAction {
  type: actionTypes.deleteTodo;
  payload: number;
}

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<fetchTodosAction>({
      type: actionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): deleteTodoAction => {
  return { type: actionTypes.deleteTodo, payload: id };
};
