import React from "react";
import "./../css/todo.css";
const Todo = ({ todos }) => {
  console.log(todos);
  return (
    <>
      <div className="todo-content">
        <h3 className="name">My first Todo</h3>
        {todos.map((todo, index) => (
          <div key={index}>
            <p>{todo?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
