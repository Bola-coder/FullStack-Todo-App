import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./../css/todoDetails.css";

const TodoDetails = () => {
  let { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getTodo(id);
  }, [id]);

  function getTodo(id) {
    fetch("http://localhost:5000/api/v1/todos/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodo(data.data.todo);
      })
      .catch((err) => console.log(err));
  }
  console.log(id);
  return (
    <div className="details">
      <Link to="/">
        {" "}
        <button>Back to todos</button>
      </Link>

      {todo ? (
        <div className="todo-details">
          <h2>
            {" "}
            <span>{todo?.name}</span>
          </h2>
          <p>
            Author: <span>{todo?.author}</span>
          </p>
          <p>
            Summary: <span>{todo?.summary}</span>
          </p>
          <p>
            Description: <span>{todo?.description}</span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoDetails;
