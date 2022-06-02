const Todos = require("./../model/todoModel");
const handleAsync = require("express-async-handler");

exports.getAllTodos = handleAsync(async (req, res) => {
  const todos = await Todos.find();
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

exports.createNewTodo = handleAsync(async (req, res) => {
  const newTodo = await Todos.create(req.body);
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

exports.getTodo = handleAsync(async (req, res) => {
  // const todoID = req.params.id;
  const todo = await Todos.findById(req.params.id);
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

exports.updateTodo = handleAsync(async (req, res) => {
  const todoID = req.params.id;
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

exports.deleteTodo = handleAsync(async (req, res) => {
  const todoID = req.params.id;
  await Todos.findByIdAndDelete(todoID);
  res.status(204).json({
    status: "success",
    data: null,
  });
});
