import { combineReducers } from "redux";
import { TodosReducer } from "./TodosReducer";

export const RootReducer = combineReducers({
  todos: TodosReducer
});
