import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodoInput from "./components/input/AddTodoInput";
import TodosWrapper from "./components/todos/todosWrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODO APP WITH REDUX</p>
      </header>

      <div className="todos__container">
        <AddTodoInput></AddTodoInput>
        <br />
        <TodosWrapper></TodosWrapper>
      </div>
    </div>
  );
}

export default App;
