import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_TODOS,
  TODOS_LOADING,
  TODOS_LOADING_FAIL
} from "../actions/Types";

const initialState = {
  todos: [],
  loading: false
};

export const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_LOADING:
      return {
        ...state,
        loading: true
      };
    case TODOS_LOADING_FAIL:
      return {
        ...state,
        loading: false
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
};
