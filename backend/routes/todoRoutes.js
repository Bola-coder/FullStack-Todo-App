const express = require("express");
const {
  getAllTodos,
  createNewTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("./../controller/todoController");
const verifyUser = require("./../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(verifyUser, getAllTodos).post(verifyUser, createNewTodo);

router
  .route("/:id")
  .get(verifyUser, getTodo)
  .patch(verifyUser, updateTodo)
  .delete(verifyUser, deleteTodo);

module.exports = router;
