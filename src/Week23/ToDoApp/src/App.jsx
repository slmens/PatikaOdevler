import { useState } from "react";
import Todo from "./Todo.jsx";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleChange(e) {
    setNewTodo(e.target.value);
    console.log(newTodo);
  }

  function handleSubmit() {
    setTodoList((prev) => [...prev, newTodo]);
    setNewTodo("");
    console.log(todoList);
  }

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form className="inputForm">
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={newTodo}
              onChange={handleChange}
            />
            <button id="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            {todoList.map((todo) => {
              return (
                <Todo
                  key={todo}
                  label={todo}
                  setTodoList={setTodoList}
                  todoList={todoList}
                />
              );
            })}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{todoList.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
