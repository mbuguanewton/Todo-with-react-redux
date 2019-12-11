import React, { useEffect, lazy, Suspense } from "react";
import "./todos.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../store/actions/TodosActions";

const TodoCard = lazy(() => import("./TodoCard"));

function TodosWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchTodos());
    }
  }, [dispatch]);
  const todos = useSelector(state => state.todos.todos);

  return (
    <div className="todos__wrapper">
      {todos && todos.length
        ? todos.map(todo => (
            <Suspense key={todo.id} fallback={<div className="blank"></div>}>
              <TodoCard todo={todo}></TodoCard>
            </Suspense>
          ))
        : null}
    </div>
  );
}

export default TodosWrapper;
