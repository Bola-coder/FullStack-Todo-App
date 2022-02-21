import React from "react";
import { Link } from "react-router-dom";
import "./../css/todo.css";
const Todo = ({ todos, handleDelete }) => {
  console.log(todos);

  return (
    <>
      <div className="todo">
        {todos.map((todo, index) => (
          <div key={index} className="todo-content">
            <div className="content">
              <h3>
                <Link to={`/${todo._id}`}>{todo?.name}</Link>
              </h3>
              <p>{todo?.summary}</p>
            </div>
            <div className="buttons">
              <button className="edit">Edit</button>
              <button className="delete" onClick={() => handleDelete(todo._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
