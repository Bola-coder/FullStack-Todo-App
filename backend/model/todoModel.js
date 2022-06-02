const mongoose = require("mongoose");
const slugify = require("slugify");

const todoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: [true, "A todo must have a name"],
    unique: [true, "Todos must have a Unique name"],
  },
  author: {
    type: String,
    required: [true, "A todo should have an author"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  summary: {
    type: String,
    required: [true, "Please provide a summary of the todo"],
  },
  description: {
    type: String,
    required: [true, "Please add a todo description"],
  },
  slug: String,
});

todoSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const Todos = mongoose.model("Todos", todoSchema);

module.exports = Todos;
