import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  TODOS_LOADING,
  TODOS_LOADING_FAIL
} from "./Types";
import axios from "axios";

export const fetchTodos = () => dispatch => {
  dispatch({
    type: TODOS_LOADING
  });
  axios
    .get("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10")
    .then(res =>
      dispatch({
        type: FETCH_TODOS,
        payload: res.data
      })
    )
    .catch(error => {
      dispatch({
        type: TODOS_LOADING_FAIL
      });
      console.log(error);
    });
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};
