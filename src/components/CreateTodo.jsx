import React, { useState } from "react";
import "./../css/createTodo.css";
const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoObj = {
      name: title,
      author: author,
      summary: summary,
      description: description,
    };
    setTitle("");
    setAuthor("");
    setSummary("");
    setDescription("");
    console.log(todoObj);
    fetch("http://localhost:5000/api/v1/todos/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todoObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h2>Create a new Todo item</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Todo Title</label>
        <input
          type="text"
          name="title"
          placeholder="Enter todo title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          required
          placeholder="Enter Author's name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          name="summary"
          placeholder="Enter a brief summary"
          required
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="8"
          placeholder="Enter the description of the Todo"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default CreateTodo;
