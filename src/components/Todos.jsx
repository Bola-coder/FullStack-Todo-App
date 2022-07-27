import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Todo from "./Todo";
import "./../css/todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch("http://localhost:5000/api/v1/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data.data?.todos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err.message);
      });
  };

  const handleDelete = (id) => {
    fetch("http://localhost:5000/api/v1/todos/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,
    })
      .then(() => {
        console.log("Deletion successful");
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="todos">
        <div className="top">
          <h2 className="todo__header">Your Todos</h2>
          <Link to="/create">
            <button>Add New</button>
          </Link>
        </div>
        {loading ? <p className="loading">Loading Todos... Please wait</p> : ""}
        {error ? <p>{error}</p> : ""}
        {todos ? <Todo todos={todos} handleDelete={handleDelete} /> : ""}
      </div>
    </>
  );
};

export default Todos;
