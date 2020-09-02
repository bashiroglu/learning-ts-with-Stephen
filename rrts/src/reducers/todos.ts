import { Todo, actionTypes, Action } from "../actions/index";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case actionTypes.fetchTodos:
      return action.payload;
    case actionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
