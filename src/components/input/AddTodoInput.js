import React, { useState } from "react";
import "./input.scss";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/TodosActions";

function AddTodoInput() {
  let id = 0;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    id: id,
    title: "",
    completed: false
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(addTodo(todo));
  };
  return (
    <div className="todo__form">
      <form onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            type="text"
            name="todo"
            id="todo"
            defaultValue={todo.title}
            placeholder="add todo"
            className="form__control"
            onChange={e =>
              setTodo({
                id: id++,
                title: e.target.value,
                completed: false
              })
            }
          />
        </div>
      </form>
      <button onClick={handleSubmit} className="btn">
        Add Todo
      </button>
    </div>
  );
}

export default AddTodoInput;
