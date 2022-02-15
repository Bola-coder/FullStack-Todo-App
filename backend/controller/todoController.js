const Todos = require("./../model/todoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createNewTodo = async (req, res) => {
  try {
    const newTodo = await Todos.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todoID = req.params.id;
    const todo = await Todos.findById(todoID);
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todoID = req.params.id;
    await Todos.findByIdAndDelete(todoID);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
