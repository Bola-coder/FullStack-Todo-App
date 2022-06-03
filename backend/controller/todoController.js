const Todos = require("./../model/todoModel");
const User = require("./../model/userModel");
const handleAsync = require("express-async-handler");

// Private Route
// GET /api/v1/todos
// Get all Todos
exports.getAllTodos = handleAsync(async (req, res) => {
  const todos = await Todos.find({ user: req.user.id });
  if (!todos) {
    res.status(404);
    throw new Error("Can't fetch todos. Please try again");
  }
  res.status(200).json({
    status: "success",
    results: todos.length,
    data: {
      todos,
    },
  });
});

// Private Route
// POST /api/v1/todos
// Create new Todo
exports.createNewTodo = handleAsync(async (req, res) => {
  const newTodo = await Todos.create({
    name: req.body.name,
    author: req.body.author,
    summary: req.body.summary,
    description: req.body.description,
    user: req.user.id,
  });
  if (!newTodo) {
    res.status(404);
    throw new Error("Error creating new todo. Please try again");
  }
  res.status(201).json({
    status: "success",
    data: {
      newTodo,
    },
  });
});

// Private Route
// GET /api/v1/todos/:id
// Get single Todo
exports.getTodo = handleAsync(async (req, res) => {
  // const todoID = req.params.id;
  // const todo = await Todos.findById(req.params.id);
  const todo = await Todos.findOne({ user: req.user.id, _id: req.params.id });
  if (!todo) {
    res.status(404);
    throw new Error("Error fetching todo. Please try again");
  }
  res.status(200).json({
    status: "success",
    data: {
      todo,
    },
  });
});

// Private Route
// PATCH /api/v1/todos/:id
// Update Todo
exports.updateTodo = handleAsync(async (req, res) => {
  const todoID = req.params.id;
  const todo = await Todos.findById(todoID);
  // Checking is user exists;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Checking if the todo user is the currently authorized user.
  if (todo.user.toString() !== user.id) {
    res.status(402);
    throw new Error("User not Authorized to update Todo.");
  }

  const updatedTodo = await Todos.findByIdAndUpdate(todoID, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      updatedTodo,
    },
  });
});

// Private Route
// DELETE /api/v1/todos/:id
// Delete Todo
exports.deleteTodo = handleAsync(async (req, res) => {
  const todoID = req.params.id;
  const todo = await Todos.findById(todoID);
  // Checking is user exists;
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Checking if the todo user is the currently authorized user.
  if (todo.user.toString() !== user.id) {
    res.status(402);
    throw new Error("User not Authorized to delete Todo.");
  }
  await Todos.findByIdAndDelete(todoID);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
