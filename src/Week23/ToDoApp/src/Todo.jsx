import React, { useState } from "react";

function Todo({ label, setTodoList, todoList }) {
  const [isCompleted, setIsCompleted] = useState(false);
  function handleToggle() {
    setIsCompleted(!isCompleted);
  }

  function handleDelete() {
    let filteredTodo = todoList.filter((todo) => todo !== label);

    // Update the todoList state with the new filtered array
    setTodoList(filteredTodo);
  }

  return (
    <li className={isCompleted ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleToggle} />
        <label>{label}</label>
        <button onClick={handleDelete} className="destroy"></button>
      </div>
    </li>
  );
}

export default Todo;
