import React from "react";
import "./../css/todo.css";
const Todo = ({ todos }) => {
  console.log(todos);
  return (
    <>
      <div className="todo">
        {todos.map((todo, index) => (
          <div key={index} className="todo-content">
            <div className="content">
              <h3>{todo?.name}</h3>
              <p>{todo?.summary}</p>
            </div>
            <div className="buttons">
              
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
