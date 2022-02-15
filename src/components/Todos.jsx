import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import "./../css/todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = () => {
      fetch("http://localhost:5000/api/v1/todos")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTodos(data.data.todos);
        })
        .catch((err) => console.log(err));
    };
    fetchTodos();
  }, []);

  return (
    <>
      <div className="todo">
        <h2 className="todo__header">Your Todos</h2>
        <Todo todos={todos} />
      </div>
    </>
  );
};

export default Todos;
